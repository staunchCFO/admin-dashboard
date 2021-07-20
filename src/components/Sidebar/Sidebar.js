import React from 'react'
import { AttachMoney, DynamicFeed, Email, Equalizer, LineStyle, Person, Report, Sms, Storefront, Timeline, TrendingUp, Work } from '@material-ui/icons';

import "./style.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__wrapper">
                <div className="sidebar__menu">
                    <h3 className="sideabar__title">Dashboard</h3>
                    <ul className="sidebar__list">
                        <li className="sidebar__listItem active">
                            <LineStyle className="sidebarIcons" /> 
                            Home
                        </li>
                        <li className="sidebar__listItem">
                            <Timeline className="sidebarIcons" /> 
                            Analytics
                        </li>
                        <li className="sidebar__listItem">
                            <TrendingUp className="sidebarIcons" /> 
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebar__menu">
                    <h3 className="sideabar__title">Quick Menu</h3>
                    <ul className="sidebar__list">
                        <li className="sidebar__listItem">
                            <Person className="sidebarIcons" /> 
                            Users
                        </li>
                        <li className="sidebar__listItem">
                            <Storefront className="sidebarIcons" /> 
                            Products
                        </li>
                        <li className="sidebar__listItem">
                            <AttachMoney className="sidebarIcons" /> 
                            Transactions
                        </li>
                        <li className="sidebar__listItem">
                            <Equalizer className="sidebarIcons" /> 
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebar__menu">
                    <h3 className="sideabar__title">Nofications</h3>
                    <ul className="sidebar__list">
                        <li className="sidebar__listItem">
                            <Email className="sidebarIcons" /> 
                            Mail
                        </li>
                        <li className="sidebar__listItem">
                            <DynamicFeed className="sidebarIcons" /> 
                            Feedback
                        </li>
                        <li className="sidebar__listItem">
                            <Sms className="sidebarIcons" /> 
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebar__menu">
                    <h3 className="sideabar__title">Staff</h3>
                    <ul className="sidebar__list">
                        <li className="sidebar__listItem">
                            <Work className="sidebarIcons" /> 
                            Manage
                        </li>
                        <li className="sidebar__listItem">
                            <Timeline className="sidebarIcons" /> 
                            Analytics
                        </li>
                        <li className="sidebar__listItem">
                            <Report className="sidebarIcons" /> 
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
