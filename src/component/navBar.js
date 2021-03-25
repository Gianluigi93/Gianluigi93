import React, { Component } from 'react'

class Navbar extends Component{
    render() {
        return (
            <header className="header">
            <div className="progress-container">
              <div className="progress-bar" id="myBar"></div>
            </div>  
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
            <div class="logo"><p>Gianluigi Ceglie</p></div>
                <ul className="menu">
                    <div className="works">
                        <div className="menu">
                            <li data-toggle="collapse" data-target=".nav-collapse">
                                <a href="#cinque">
                                    <button className="bottone-out"><span>lavori</span></button>
                                </a>
                            </li>
                            <li data-toggle="collapse" data-target=".nav-collapse">
                                <a href="#tre">
                                    <button className="bottone-out"><span>chi sono</span></button>
                                </a>
                            </li>
                            <li data-toggle="collapse" data-target=".nav-collapse">
                                <a href="#sei">
                                    <button className="bottone-out"><span>contatti</span></button>
                                </a>
                            </li>
                            <li data-toggle="collapse" data-target=".nav-collapse">
                                <div className="social-mobile">
                                    <a href="https://www.behance.net/GianlugiCeglie" target="_blank" rel="noreferrer"><i className="fab fa-behance"></i></a>
                                    <a href="https://www.linkedin.com/in/gianluigi-ceglie-4890aa88/?trk=nav_responsive_tab_profile_pic"  target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </li>
                        </div>
                    </div>
                 </ul>
            <a href="mailto:gianluig.ceglie@gmail.com" className="progetti">
                <div id="contattami">
                    <div id="speechbubble" data-hover="gianluig.ceglie@gmail.com"><span><i className="fas fa-envelope"></i><p>Contattami</p></span></div> 
                </div>
            </a>
        </header>
        )
}
}

export default Navbar;