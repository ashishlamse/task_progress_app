import React, { Component } from "react";
import { register } from "../redux/actions/register";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ShowSnackBar from "../component/snackBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Loading from "../component/loading";
import "../css/signIn.css";
import { alert,routePathNames } from "../utils/constants";
import _ from "lodash";
import * as utils from "../utils/index";
import logo from '../assets/logo/logo.png'; 

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      toggle: false,
      email: "",
      password: "",
      message: "",
      firstName:"",
      lastName:""
    };
  }

  handleSnackBar = () => {
    this.setState({
      toggle: false,
    });
  };

  showSnackBarEvent = (msg, isSuccess = false) => {
    this.setState({
      toggle: true,
      message: msg,
      snackbarStatus: isSuccess,
    });
  };

  /* input handle fuction */
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  /* submit function */
  submituserLoginForm = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      let body = {
        first_name:this.state.firstName,
        last_name:this.state.lastName,
        email:this.state.email,
        password:this.state.password
      };
      this.props
        .dispatch(register(body))
        .then(() => {
          let result = this.props.registerSuccessFailure;
          if (result && result.isSuccess) {
            this.props.history.push(routePathNames.DASHBOARD);
          } else {
            this.showSnackBarEvent(
              result && result.message
                ? result.message
                : alert.CHECK_CREDENTIALS
            );
          }
        })
        .catch((error) => {
          console.log("error", error);
          // this.showSnackBarEvent(error);
        });
    }
  };
  /* validation function  */
  validateForm = () => {
    let errors = {};
    let formIsValid = true;
    /* Store Contact email validation */
    if (!this.state.email) {
      formIsValid = false;
      errors["email"] = alert.EMPTY_EMAIL_VALIDATION;
    }
    if (typeof this.state.email !== "undefined") {
      var pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/);
      if (!pattern.test(this.state.email)) {
        formIsValid = false;
        errors["email"] = alert.EMAIL_VALIDATION;
      }
    }
    /* Store password validation */
    if (!this.state.password) {
      formIsValid = false;
      errors["password"] = alert.EMPTY_PASSWORD_VALIDATION;
    }

    /* Store password validation */
    if (!this.state.firstName) {
      formIsValid = false;
      errors["firstName"] = alert.FIRST_NAME_VALIDATION;
    }

    /* Store password validation */
    if (!this.state.lastName) {
      formIsValid = false;
      errors["lastName"] = alert.LAST_NAME_VALIDATION;
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  };

  renderInputs = (title,stateName) =>{
    return(
    <div>
      <label className="col-md-12 card-label">
        {title}
      </label>
      <input
        className="col-md-12 form-control input-margin"
        type="text"
        name={stateName}
        value={this.state[stateName]}
      />
      <div className="errorMsg">{this.state.errors[stateName]}</div>
    </div>
    )
  }

  render() {
    return (
      <div>
          <div className="login-card">
            <div>
              <div className="card card-style">
                <div>
                  <form
                    method="post"
                    name="userRegistrationForm"
                    onChange={this.handleChange}
                    onSubmit={this.submituserLoginForm}
                  >
                      <h5 className="heading-font">Sign up</h5>
                      {this.renderInputs('First Name','firstName')}
                      {this.renderInputs('Last Name','lastName')}
                    <div>
                      <label className="col-md-12 card-label">
                        Email address
                      </label>
                      <input
                        className="col-md-12 form-control input-margin"
                        type="text"
                        pattern="[^\s]+"
                        name="email"
                        value={this.state.email}
                      />
                      <div className="errorMsg">{this.state.errors.email}</div>
                    </div>
                    <div>
                      <label className="col-md-12 card-label">Password</label>
                      <input
                        className="col-md-12 form-control input-margin"
                        type="password"
                        pattern="[^\s]+"
                        name="password"
                        value={this.state.password}
                      />
                      <div className="errorMsg">
                        {this.state.errors.password}
                      </div>
                    </div>
                    <Link to={routePathNames.SIGNIN} className="link-btn-style">
                        Return to Login
                      </Link>
                    <div>
                      <button type="submit" className="login-btn">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <Loading isFetching={this.props.isFetching} />
            </div>
          </div>
        <ShowSnackBar
          message={this.state.message}
          toggle={this.state.toggle}
          handleClose={this.handleSnackBar}
          snackbarStatus={this.state.snackbarStatus}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isFetching: state.register.isFetching,
    registerSuccessFailure: state.register.registerSuccessFailure,
  };
};
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    register,
  }),
  dispatch,
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
