import AxiosInstance from "../api/axios";
var jwt = require('jsonwebtoken');

//jwt secret
const secret = "Knex_Task_Tracker_Secret"

export const phoneNumberValidation = phoneNumber => {
    if (phoneNumber.includes('+91')) return phoneNumber.length === 13;
    else return phoneNumber.length === 10;
};

export const validateEmail = email => {
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
};

export const getFormattedAddress = geocodeSuccessFailure => {
    return geocodeSuccessFailure && geocodeSuccessFailure.isSuccess
        ? geocodeSuccessFailure.response[0].formattedAddress
        : '';
};

export const isConfirmPasswordSame = (password, confirmPassword) => {
    return password === confirmPassword;
};

export const passwordLength = password => {
    return password.length >= 5;
};

export const checkPassword = password => {
    let phoneno = /^[ 0-9-.()]*$/;
    return phoneno.test(password);
};

export const setCorsHeader = () => {
    AxiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
}

export const getAccessToken = () => {
    let savedData = JSON.parse(localStorage.getItem("token"));
    return savedData;
}

export const setAccessToken = (data) => {
    localStorage.setItem("token", JSON.stringify(data));
}

export const getLoginDetails = () => {
    return jwt.verify(getAccessToken(),
        secret,
        (err, decoded) => {
            let userData = decoded && decoded.userData ? decoded.userData : {};
            let roles = decoded && decoded.role ? decoded.role : []
            userData.role = roles;
            return userData;
        });
}

export const logout = () => {
    localStorage.removeItem("token");
}

function padValue(value) {
    return (value < 10) ? "0" + value : value;
}

export const formatDate = (dateVal) => {
    var newDate = new Date(dateVal);

    var sMonth = padValue(newDate.getMonth() + 1);
    var sDay = padValue(newDate.getDate());
    var sYear = newDate.getFullYear();
    var sHour = newDate.getHours();
    var sMinute = padValue(newDate.getMinutes());
    var sAMPM = "AM";

    var iHourCheck = parseInt(sHour);

    if (iHourCheck > 12) {
        sAMPM = "PM";
        sHour = iHourCheck - 12;
    }
    else if (iHourCheck === 0) {
        sHour = "12";
    }

    sHour = padValue(sHour);

    return sMonth + "-" + sDay + "-" + sYear + " " + sHour + ":" + sMinute + " " + sAMPM;
}