import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import telegram from '../../accets/telegram.png';
import whatsapp from '../../accets/whatsapp.png';
import yandexzen from '../../accets/yandexzen.png';

const Navbar = () => {
  const navigate = useNavigate(); 

  const handleNavigate = (path) => {
    navigate(path); 
  };

  return (
    <div className="navbar">
      <div className="navbar-top">
        <h1 className="navbar-title" onClick={() => handleNavigate('/')}>Yolo</h1>
        <div className="navbar-right">
          <a href='https://t.me/manager_temir' className="socialIcon"><img src={telegram} alt="telegram icon" className="social-icon"/></a>
          <a href='http://wa.me/996702930787' className="socialIcon"><img src={whatsapp} alt="whatsapp icon" className="social-icon"/></a>
          <a href='https://dzen.ru/yolokg' className="socialIcon"><img src={yandexzen} alt="yandex zen icon" className="social-icon"/></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
