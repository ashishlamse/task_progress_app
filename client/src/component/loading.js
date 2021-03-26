import Loader from 'react-loader-spinner'
import React from "react";
import colors from "../style/colors"

const Loading = props => {
    return (
        <div style={styles.centerLoading}>
            <Loader
                type="Oval"
                color={colors.black}
                height={50}
                width={50}
                visible={props.isFetching ? props.isFetching : false}
            />
        </div>
    );
};

export default Loading;


const styles = {
    centerLoading: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        overlay: "rgba(0, 0, 0, 0.4)",
        zIndex: 1000
    }
};