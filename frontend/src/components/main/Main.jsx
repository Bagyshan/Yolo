import React from 'react';
import rectangle from '../../accets/mainphoto.png';
import './Main.css';

const Main = () => {
  return (
    <div className="container">
      <div className="text-content">
        <h3>Освободите свое время для важных задач, доверив рутинные процессы команде YOLO</h3>
        <p>
          Вы – начинающий или уже опытный бизнесмен, стремящийся к новым вершинам? Думате о расширении ассортимента, но не хватает времени на рутинные задачи по поиску, выкупу, сборке, проверке и отправке товаров?
          <br />
          <strong>YOLO</strong> - ваш надежный партнер в оптимизации логистики и байерского сопровождения!
        </p>
      </div>
      <div className="image-content">
        <img src={rectangle} alt="Home Owner" />
      </div>
    </div>
  );
};

export default Main;
