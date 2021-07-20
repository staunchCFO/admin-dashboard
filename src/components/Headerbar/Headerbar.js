import React from 'react'
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

import "./style.css"

const Headerbar = () => {
    return (
        <div className="headerbar">
            <div className="headerbar__wrapper">
                <div className="topleft">
                    <span className="logo">Staunch</span>
                </div>
                <div className="topright">
                    <div className="topright__headerIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topright__headerIconContainer">
                        <Language />
                    </div>
                    <div className="topright__headerIconContainer">
                        <Settings />
                    </div>
                    <img 
                        src="https://freesvg.org/img/1519501415.png" 
                        alt="ImageAvatar" 
                        className="topAvatar"
                    />
                </div>
            </div>

        </div>
    )
}

export default Headerbar;