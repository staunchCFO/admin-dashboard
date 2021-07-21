import { Visibility } from '@material-ui/icons'
import React from 'react'

import "./style.css"

const WidgetSm = () => {
    return (
        <div className="widget__small">
            <span className="widget__small-title">New Members</span>
            <ul className="widget__small-list">
                <li className="widget__small-listItem">
                    <img 
                        src="https://freesvg.org/img/1519501415.png"
                        className="widget__small-image"
                        alt="User"
                    />
                    <div className="widget__small-user">
                        <span className="widget__small-username">Emeka Okezie</span>
                        <span className="widget__small-job">Software Developer</span>
                    </div>
                    <button className="widget__small-btn">
                        <Visibility className="widget__small-icons" />
                        Display
                    </button>
                </li>
                
                <li className="widget__small-listItem">
                    <img 
                        src="https://freesvg.org/img/1519501415.png"
                        className="widget__small-image"
                        alt="User"
                    />
                    <div className="widget__small-user">
                        <span className="widget__small-username">Favour Okoye</span>
                        <span className="widget__small-job">Frontend Developer</span>
                    </div>
                    <button className="widget__small-btn">
                        <Visibility className="widget__small-icons" />
                        Display
                    </button>
                </li>
                <li className="widget__small-listItem">
                    <img 
                        src="https://freesvg.org/img/1519501415.png"
                        className="widget__small-image"
                        alt="User"
                    />
                    <div className="widget__small-user">
                        <span className="widget__small-username">Tola Iwaloye</span>
                        <span className="widget__small-job">Backend Developer</span>
                    </div>
                    <button className="widget__small-btn">
                        <Visibility className="widget__small-icons" />
                        Display
                    </button>
                </li>
                <li className="widget__small-listItem">
                    <img 
                        src="https://freesvg.org/img/1519501415.png"
                        className="widget__small-image"
                        alt="User"
                    />
                    <div className="widget__small-user">
                        <span className="widget__small-username">Tola Iwaloye</span>
                        <span className="widget__small-job">Backend Developer</span>
                    </div>
                    <button className="widget__small-btn">
                        <Visibility className="widget__small-icons" />
                        Display
                    </button>
                </li>
                
            </ul>
        </div>
    )
}

export default WidgetSm;
