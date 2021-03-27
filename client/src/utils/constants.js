export const alert = {
    mandatoryFields: "All Fields are mandatory",
    allStarFieldsRequired: "All (*) mark fields are required.",
    inValidEmail: "Email is not valid",
    upload: "Please Upload Image",
    submitSuccess: "Data Submit Successfully",
    EMPTY_EMAIL_VALIDATION: "Please Enter Your Email-ID.",
    FIRST_NAME_VALIDATION: "Please Enter Your first name.",
    LAST_NAME_VALIDATION: "Please Enter Your last name.",
    EMPTY_CONFIRM_EMAIL_VALIDATION: "Please Enter Your Confirm Email-ID.",
    EMAIL_VALIDATION: "Please Enter Valid Email-ID.",
    EMPTY_PASSWORD_VALIDATION: "Please Enter Your Password.",
    EMPTY_OLD_PASSWORD_VALIDATION: "Please Enter Your Old Password.",
    CONFIRM_EMPTY_PASSWORD_VALIDATION: "Please Enter Your Confirm Password.",
    passwordMandatoryFields: "Please fill the password field",
    phoneNumber: "Phone number should be 10 digits long."
}

export const routePathNames = {
    SIGNIN: "/",
    SIGNUP: "/signUp",
    DASHBOARD: '/dashboard',
    CREATE_TASK: "/",
    TASK_LIST: "",
    CHARTS: ""

}

export const sideBarRoutes = [
    {
        name: "Create Task",
        path: routePathNames.CREATE_TASK,
    },
    {
        name: "Task List",
        path: routePathNames.TASK_LIST,
    },
    {
        name: "Dashboard",
        path: routePathNames.CHARTS,
    },
];