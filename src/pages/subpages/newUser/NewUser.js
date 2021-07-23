import React from 'react'

import "./style.css"


const NewUser = () => {
    return (
        <div className="newUser">
            <h2 className="newUser__title">Create New User</h2>
            <form className="newUser__form">
                <div className="newUser__updateItem">
                    <label>Username</label>
                    <input 
                        type="text"
                        placeholder="Staunch"
                        className="newUser__updateInput"
                    />
                </div>
                <div className="newUser__updateItem">
                    <label>Full Name</label>
                    <input 
                        type="text"
                        placeholder="Emeka Okezie"
                        className="newUser__updateInput"
                    />
                </div>
                <div className="newUser__updateItem">
                    <label>Phone</label>
                    <input 
                        type="number"
                        placeholder="+234 9066829042"
                        className="newUser__updateInput"
                    />
                </div>
                <div className="newUser__updateItem">
                    <label>Email</label>
                    <input 
                        type="email"
                        placeholder="info@example.com"
                        className="newUser__updateInput"
                    />
                </div>
                <div className="newUser__updateItem">
                    <label>Address</label>
                    <input 
                        type="text"
                        placeholder="Ikeja"
                        className="newUser__updateInput"
                    />
                </div>
                <div className="newUser__updateItem">
                    <label>Password</label>
                    <input 
                        type="password"
                        placeholder="********"
                        className="newUser__updateInput"
                    />
                </div>
                <div className="newUser__updateItem">
                    <label>Gender</label>
                    <div className="newUser__genderOption">
                        <input 
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                        />
                        <label for="male">Male</label>
                        <input 
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                        />
                        <label for="female">Female</label>
                        <input 
                            type="radio"
                            name="gender"
                            id="other"
                            value="other"
                        />
                        <label for="other">Other</label>
                    </div>
                </div>
                <div className="newUser__active">
                    <label>Active</label>
                    <select className="newUser__selectOption" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                {/* <div className="newUser__btnWrap">
                    <button className="newUser__btn">Create</button>
                </div> */}
            </form>
        </div>
    )
}

export default NewUser;
