import React, { Component } from "react";
import Select, { components } from "react-select";
import colors from "../style/colors";
import "../css/dropDown.css";
import {
    MdCheck,
    MdArrowDropDown,
    MdSearch,
    MdLocationOn,
} from "react-icons/md";

const Option = (props) => {
    return (
        <div>
            <components.Option {...props}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <div className="width-select-option">
                        {props.isSelected ? (
                            <MdCheck size={"1.5em"} color={colors.blue2} />
                        ) : null}
                    </div>
                    <div style={{ width: "80%" }}>
                        {props.label}
                        {props &&
                            props.data &&
                            props.data.address &&
                            props.data.address.address ? (
                                <div
                                    className="num-of-line-2"
                                    style={{
                                        fontSize: "10px",
                                        color: "#7E8BA0",
                                    }}
                                >
                                    {props.data.address.address}
                                </div>
                            ) : null}
                    </div>
                </div>
            </components.Option>
        </div>
    );
};

const MultiValue = (props) => {
    return (
        <components.MultiValue {...props}>
            <span>{props.data.label}</span>
        </components.MultiValue>
    );
};

export default class SelectDropdown extends React.Component {
    constructor() {
        super();
        this.state = { options: [], selectedOption: null };
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption }, () => {
            this.props.selectedDataCallback(this.props.stateType, selectedOption);
        });
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            options: nextProps.data,
            selectedOption: nextProps.selectedData,
        });
    }

    componentDidMount() {
        this.setState({
            options: this.props.data,
            selectedOption: this.props.selectedData,
        });
    }

    render() {
        return (
            <div>
                <Select
                    maxMenuHeight={150}
                    hideSelectedOptions={false}
                    closeMenuOnSelect={this.props.closeMenuOnSelect}
                    removeSelected={false}
                    components={{ Option, MultiValue, DropdownIndicator }}
                    isClearable={false}
                    isMulti={this.props.stateType === "selectedLocation" ? true : false}
                    placeholder={this.props.title}
                    className="input-box"
                    options={this.state.options}
                    isSearchable={true}
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                    styles={selectStyles}
                />
            </div>
        );
    }
}

const selectStyles = {
    option: (styles, state) =>
        console.log(state.isFocused) || {
            ...styles,
            backgroundColor: state.isSelected ? "white" : null,
            color: state.isSelected ? "#4a5d7a" : "#4a5d7a",
        },
    // control: (base) => ({
    //   ...base,
    //   "&:hover": { borderColor: "#e95b27" }, // border style on hover
    //   border: "1px solid lightgray", // default border color
    //   boxShadow: "none", // no box-shadow
    //   // height: 34,
    //   // minHeight: 34,
    // }),

    control: (provided, state) => ({
        ...provided,
        background: "#fff",
        borderColor: "#9e9e9e",
        minHeight: "30px",
        height: "30px",
        border: "1px solid lightgray", // default border color
    }),

    valueContainer: (provided, state) => ({
        ...provided,
        height: "28px",
        padding: "0 6px",
    }),

    input: (provided, state) => ({
        ...provided,
        margin: "0px",
    }),
    indicatorSeparator: (state) => ({
        display: "none",
    }),
    indicatorsContainer: (provided, state) => ({
        ...provided,
        height: "28px",
    }),
};

const DropdownIndicator = (props) => {
    if (props.isFocused) {
        return (
            <components.DropdownIndicator {...props}>
                <i className="glyphicon glyphicon-search">
                    <MdSearch size={"1.5em"} color={colors.darkBlue} />
                </i>
            </components.DropdownIndicator>
        );
    } else {
        return (
            <components.DropdownIndicator {...props}>
                <MdArrowDropDown size={"1.5em"} color={colors.darkBlue} />
            </components.DropdownIndicator>
        );
    }
};
