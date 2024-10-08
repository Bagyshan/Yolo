import React from 'react';
import logofooter from '../../accets/logo.png';
import telegram from '../../accets/telegram.png';
import whatsapp from '../../accets/whatsapp (1).png';
import yandexzen from '../../accets/yandexzen.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo-section">
          <img src={logofooter} alt="Logo Icon" className="logo-icon" />
          <span className="logo-text">Yolo</span>
        </div>
      
        <div className="contact-section">
          <div className="icons-section">
          <a href='https://t.me/manager_temir' className="socialIcon"><img src={telegram} alt="telegram icon" className="social-icon"/></a>
          <a href='http://wa.me/996702930787' className="socialIcon"><img src={whatsapp} alt="whatsapp icon" className="social-icon"/></a>
          <a href='https://dzen.ru/yolokg' className="socialIcon"><img src={yandexzen} alt="yandex zen icon" className="social-icon"/></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
