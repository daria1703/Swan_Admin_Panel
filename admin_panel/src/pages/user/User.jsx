import React from 'react'
import "./user.css"
import user from '../../img/userProfile.png'
import {Link} from "react-router-dom"

export default function User() {
  return (
    <div className='userPage'>
        <div className="titleContainer">
        <h1 className="userTitle">
            Edit User
        </h1>
        <a className="creaeUser" href="">
            <div className="createUserBtn">Create New User</div>
        </a>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <span><img src={user} alt="user" className='userImg'/></span>
                    <span className="userName">User Name</span>
                    <span className='userEmail'>test@gmail.com</span>
                    <span className="userId">ID: 123456</span>
                </div>
                <div className="userShowBottom"></div>
            </div>
            <div className="userUpdate">2</div>
        </div>
    </div>
  )
}
