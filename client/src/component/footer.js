import React, { Component } from 'react';
import '../css/footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer class="page-footer font-small blue footer-style">
                <div class="footer-copyright text-center py-3 white-text">
                    <div class="container email-container">
                        <a href="mailto:test@knecinc.com" class="white-text">
                            <i class="bi bi-envelope-fill email-icon"></i>
                            test@knecinc.com
                        </a>
                    </div>
                    © 2021 All Rights Reserved
                </div>
            </footer>
        );
    }
}