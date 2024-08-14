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
          <a href='https://web.telegram.org/' className="socialIcon"><img src={telegram} alt="telegram icon" className="social-icon"/></a>
          <a href='https://web.whatsapp.com/' className="socialIcon"><img src={whatsapp} alt="whatsapp icon" className="social-icon"/></a>
          <a href='https://dzen.ru' className="socialIcon"><img src={yandexzen} alt="yandex zen icon" className="social-icon"/></a>
          </div>
          <div className="contact-info">
            <span className="phone-number">+7 123 456 7890</span>
            <span className="phone-description">Звонки по России бесплатны</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
