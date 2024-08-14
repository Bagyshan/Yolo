import React from 'react';
import './Dordoimap.css'; 

const Dordoimap = () => {
  return (
    <div className="dordoimap-container">
      <div className="dordoimap-text">
        <p>
          Дордой – это не просто рынок, а настоящий колоссальный торговый центр под открытым небом, раскинувшийся на 100 гектарах в пригороде Бишкека. С начала 1990-х годов он является бесспорным лидером оптовой и розничной торговли в Центральной Азии.
          Здесь можно найти товары на любой вкус и кошелек: от одежды, обуви и аксессуаров до электроники, бытовой техники, строительных материалов и продуктов питания. На территории 100 гектаров 40 000 торговых точек, 55 000 человек, занятых в торговле, и ежегодный товарооборот в 6 миллиардов долларов – эти цифры говорят сами за себя.
        </p>
      </div>
      <div className="dordoimap-map">
        <div className="map-wrapper">
          <iframe
            src="https://yandex.ru/map-widget/v1/?l=sat&ll=74.618865%2C42.940696&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo1MjM5ODc1NDE2EjvQmtGL0YDQs9GL0LfRgdGC0LDQvSwg0JHQuNGI0LrQtdC6LCDRgNGL0L3QvtC6INCU0L7RgNC00L7QuSIKDcc9lUIVaMIrQg%2C%2C&z=15"
            width="100%"
            height="800"
            frameBorder="0"
            allowFullScreen
            title="Yandex Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Dordoimap;
