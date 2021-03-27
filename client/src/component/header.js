import React, { Component } from 'react'
import "../css/dashboard.css"
import logo from '../assets/logo/logo.png'

export default class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-md navbar-dark fixed-top header-style">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand">
                    <img src={logo} width="70" height="30" class="d-inline-block align-top" alt="" />
                    <span class="title-of-app">Knex Inc Task Manager</span>
                </a>
            </nav>
        )
    }
}
