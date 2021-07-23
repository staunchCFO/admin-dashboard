import { Add, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

import "./style.css"

const SingleUser = () => {
    return (
        <div className="singleUser">
            <div className="singleUserTitle__container">
                <h3 className="singleUserTitle">Edit User</h3>
                <Link to="/add-new-user">
                    <button className="singleUser__btn">Add User<Add className="singleUser__icon" /></button>
                </Link>
            </div>
            <div className="singleUser__container">
                <div className="singleUser__display">
                    <div className="singleUser__top">
                        <img 
                            src="https://freesvg.org/img/1519501415.png" 
                            alt="" 
                            className="singleUser__img"
                        />
                        <div className="singleUser__ShowTitle">
                            <span className="singleUser__Username">Emeka Okezie</span>
                            <span className="singleUser__Job">Software Engineer</span>
                        </div>
                    </div>
                    <div className="singleUser__bottom">
                        <span className="singleUser__showBottomTitle">Account Details</span>
                        <div className="singleUser__showBottomDetails">
                            <PermIdentity className="singleUser__showUserIcon" />
                            <span className="singleUser__showUserInfo">Staunch</span>
                        </div>
                        <span className="singleUser__showBottomTitle">Contact Details</span>
                        <div className="singleUser__showBottomDetails">
                            <PhoneAndroid className="singleUser__showUserIcon" />
                            <span className="singleUser__showUserInfo">+234 9066829042</span>
                        </div>
                        <div className="singleUser__showBottomDetails">
                            <MailOutline className="singleUser__showUserIcon" />
                            <span className="singleUser__showUserInfo">staunch@gmail.com</span>
                        </div>
                        <div className="singleUser__showBottomDetails">
                            <LocationSearching className="singleUser__showUserIcon" />
                            <span className="singleUser__showUserInfo">Lagos | Nigeria</span>
                        </div>
                    </div>
                </div>
                <div className="singleUser__update">
                    <span className="singleUser__updateTitle">Edit</span>
                    <form className="singleUser__updateForm">
                        <div className="singleUser__updateLeft">
                            <div className="singleUser__updateItem">
                                <label>Username</label>
                                <input 
                                    type="text"
                                    placeholder="Staunch"
                                    className="singleUser__updateInput"
                                />
                            </div>
                            <div className="singleUser__updateItem">
                                <label>Full Name</label>
                                <input 
                                    type="text"
                                    placeholder="Emeka Okezie"
                                    className="singleUser__updateInput"
                                />
                            </div>
                            <div className="singleUser__updateItem">
                                <label>Phone</label>
                                <input 
                                    type="number"
                                    placeholder="+234 9066829042"
                                    className="singleUser__updateInput"
                                />
                            </div>
                            <div className="singleUser__updateItem">
                                <label>Email</label>
                                <input 
                                    type="email"
                                    placeholder="staunch@gmail.com"
                                    className="singleUser__updateInput"
                                />
                            </div>
                            <div className="singleUser__updateItem">
                                <label>Address</label>
                                <input 
                                    type="text"
                                    placeholder="Lagos | Nigeria"
                                    className="singleUser__updateInput"
                                />
                            </div>
                        </div>
                        <div className="singleUser__updateRight">
                            <div className="singleUser__updateUpload">
                                <img 
                                    src="https://freesvg.org/img/1519501415.png" 
                                    alt="" 
                                    className="singleUser__updateImg"
                                />
                                <label htmlFor="file"><Publish className="singleUser__userUploadIcon" /></label>
                                <input 
                                    type="file" 
                                    id="file" 
                                    style={{display: "none"}}
                                />
                            </div>
                            <button className="singleUser__updateBtn">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SingleUser;
