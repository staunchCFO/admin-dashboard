import { Add } from '@material-ui/icons'
import React from 'react'

import "./style.css"

const SingleUser = () => {
    return (
        <div className="singleUser">
            <div className="singleUserTitle__container">
                <h3 className="singleUserTitle">Edit User</h3>
                <button className="singleUser__btn">Add User<Add className="singleUser__icon" /></button>
            </div>
            <div className="singleUser__container">
                <div className="singleUser__display">
                    <div className="singleUser__top">
                        <img src="" alt="" />
                    </div>
                    <div className="singleUser__bottom"></div>
                </div>
                <div className="singleUser__update">
                    Update
                </div>
            </div>
        </div>
    )
}

export default SingleUser;
