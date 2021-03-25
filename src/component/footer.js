import React, { Component } from 'react'

class Footer extends Component{
    render() {
        return (
            <div class="sezione" id="quattro" data-color="blue-dark">
                <div id="paralax-footer">
                    <div class="inner-section">
                        <h2>Ti interessano i miei progetti?
                        <span><a href="#" class="link-text" id="apriPopUp">Contattami</a></span></h2>
                        <div class="container">
                            <div class="coffee-header">
                                <div class="coffee-header__buttons coffee-header__button-one"></div>
                                <div class="coffee-header__buttons coffee-header__button-two"></div>
                                <div class="coffee-header__display"></div>
                                <div class="coffee-header__details"></div>
                            </div>
                            <div class="coffee-medium">
                                <div class="coffe-medium__exit"></div>
                                <div class="coffee-medium__arm"></div>
                                <div class="coffee-medium__liquid"></div>
                                <div class="coffee-medium__smoke coffee-medium__smoke-one"></div>
                                <div class="coffee-medium__smoke coffee-medium__smoke-two"></div>
                                <div class="coffee-medium__smoke coffee-medium__smoke-three"></div>
                                <div class="coffee-medium__smoke coffee-medium__smoke-for"></div>
                                <div class="coffee-medium__cup"></div>
                            </div>
                            <div class="coffee-footer"></div>
                        </div>
                    </div>
                </div>
            </div>

        )
}
}

export default Footer;