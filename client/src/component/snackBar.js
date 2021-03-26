import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const ShowSnackBar = (props) => {
    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}
                open={props.toggle}
                autoHideDuration={props.duration ? props.duration : 2000}
                onClose={() => props.handleClose()}
            >
                <div className={props.snackbarStatus ? "alert alert-success" : "alert alert-danger"} role="alert">
                    {props.message}
                </div>
            </Snackbar>
        </div>
    );
}

export default ShowSnackBar;