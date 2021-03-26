var express = require("express");
var async = require("async");
var _ = require("underscore");
var loginApiRouter = express.Router();
var connection = require('../../service/database');
var message = require('../../constants/message').msg;
var { verifyPassword, generateHashPassword } = require('../../service/checkPassword');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var configData = require('../../config/config');
var {query}=require('../../constants/query');
const { user } = require("../../config/config");
const sendMail  = require("../../service/sendMail");
//Log in api.
loginApiRouter.logIn = (req, res) => {
    try {
        if (req.body.email.length > 0 && req.body.password.length > 0) {
            var email = req.body.email;
            var password = req.body.password;
            //var query = 'SELECT * FROM users WHERE email = ?';
            var userId;
            var role;
            var userData={};
            connection.query(query.GET_USER_BY_EMAIL, [email], async function(error, results, fields) {
                if (error) {
                    res.status(502).json({ message: message.SOMETHING_WENT_WRONG });
                } else {
                    console.log(results)
                    if (results.length > 0) {
                        verifyPassword(password, results[0].password).then(isChecked => {
                            console.log("hi", isChecked);
                            if (isChecked) {
                               
                                userId=results[0].id;
                                userData={
                                    userId:results[0].id,
                                    name:results[0].name,
                                    email:results[0].email
                                }    
                                connection.query(query.GET_ROLES_DISPLAYNAME_BY_USER_ID,[userId] ,function(error, results, fields) {
                                    if (error) {
                                        console.log('Error', error)
                                        res.status(502).json({ message: message.SOMETHING_WENT_WRONG });
                                    } else {
                                        var roles=results.map(element=>{
                                            
                                            return element.display_name;
                                        })
                                        role=roles;
                                        var token = jwt.sign({ id: results.id,role:role,userData:userData }, configData.secret, {
                                            expiresIn: 86400 // expires in 24 hours
                                        });
                                       return res.status(200).json({ message: message.LOGIN_SUCCESSFULL, token: token });
                                    }
                                })
                                  } else {
                          return res.status(409).json({ message: message.CREDENTIALS_INVALID });
                            }
                        })
                    } else {
                        res.status(404).json({ message: message.CREDENTIALS_INVALID });
                    }
                }
            });
        } else {
            res.status(404).json({ message: message.PROVIDE_CREDENTIALS });
        }
    } catch (err) {
        console.log('error', err)
        res.status(502).json({ message: message.SOMETHING_WENT_WRONG });
    }

}

//use to request for forgot password.
loginApiRouter.forgotPassword = (req, res) => {
        if (req.body.email.length > 0) {
            var email = req.body.email;
            //var query = 'SELECT * FROM users WHERE email = ?';
            connection.query(query.GET_USER_BY_EMAIL, [email], async function(error, results, fields) {
                if (error) {
                    res.status(502).json({ message: message.SOMETHING_WENT_WRONG });
                } else {
                    console.log("inside here results ==>",results)
                    if (results.length > 0) {
                        console.log(results.id)
                        var token = jwt.sign({ id: results[0].id }, configData.secret, {
                            expiresIn: 86400 // expires in 24 hours
                        });
                        var reset_paas_url = "https://refined-legend-301013.uc.r.appspot.com/resetPassword/" + token;
                        var emailmessage = "<p>We heard that you lost your Ocean City Vacation app password." +
                            "<p>But don’t worry! You can use the following link to reset your password : " +
                            "<a href='" + reset_paas_url + "'>Reset Password</a>" + "</p>" +
                            "If you don’t use this link within 24 hours, it will expire. To get a new password reset link, visit - " + +"https://refined-legend-301013.uc.r.appspot.com/forgotPassword" +
                            "</p>";

                        // sendMail.sendMail("ashish.lamse@gmail.com","ashish lamse","Testing",emailmessage,'',(callback)=>{
                        //     console.log("data =>",data);
                        // })
                        sendMail.sendEmail(email,"ashish lamse","Testing",emailmessage,'',(callback)=>{
                            console.log("callback =>",callback);
                        })
                        return res.status(200).json({ message: message.RESET_PASSWORD_MESSAGE, token: token });
                    } else {
                        return res.status(404).json({ message: message.CREDENTIALS_INVALID })
                    }
                }
            });
        } else {
            return res.status(404).json({ message: message.PROVIDE_CREDENTIALS });
        }
    }

//Use to reset password.
loginApiRouter.resetPassword = (req, res, next) => {
    try {
        var token = req.body.token;
        var password = req.body.password;

        if (!token) return res.status(401).send({ auth: false, message: message.NO_TOKEN_PROVIDE });

        jwt.verify(token, configData.secret, (err, decoded) => {
            if (err) return res.status(500).send({ auth: false, message: message.LINK_EXPIRE });
            console.log("decoded ==>", decoded.id);
            password = generateHashPassword(password);
            var data = [password, new Date(), decoded.id];
            //var query = "UPDATE users SET password=?,updated_at=? where id=?"
            connection.query(query.UPDATE_SET_USER_PASSWORD, data, function(error, results, fields) {
                if (error) {
                    console.log('Error', error);
                    res.status(502).json({ message: message.SOMETHING_WENT_WRONG });
                } else {
                    return res.status(200).json({ message: message.PASSWORD_RESET_SUCCESSFULLY });
                }
            })
        });
    } catch (err) {
        console.log('Error', err);
        return res.status(502).json({ message: message.SOMETHING_WENT_WRONG });
    }
}

module.exports = loginApiRouter;