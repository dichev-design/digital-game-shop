import React from 'react'
import "./header.css";
import userImg from '../images/profile.JPG';

export default function () {
  return (
    <header>
      <a href="#" className="menu">
        <i class="bi bi-sliders"></i>
      </a>
      <div className="userItems">
        <a href="#" className="icon">
          <i class="bi bi-heart-fill"></i>
          <span className="like">0</span>
        </a>
        <a href="#" className="icon">
          <i class="bi bi-bag-fill"></i>
            <span className="bag">0</span>
        </a>
        <div className="avatar">
          <a href="#">
            <img src={userImg} alt="User Image" />
            <div className="user">
              <span>User Name</span>
              <a href="">View Profile</a>
            </div>
          </a>
        </div>
      </div>
    </header>
  )
}
