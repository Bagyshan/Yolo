import React from 'react';
import './Services.css';
import board from '../../accets/Board.png';
import packageicon from '../../accets/Package.png';
import deliveryicon from '../../accets/Delivery.png';
import bestsupport from '../../accets/bestsupport.png';
import clearinfo from '../../accets/clearinfo.png';
import garantee from '../../accets/garantee.png'


const services = [
  {
    title: "Байерские услуги",
    description: "Переговоры с поставщиками и заключение выгодных сделок. Контроль качества продукции на всех этапах производства.",
    icon: board 
  },
  {
    title: "Сборка товара",
    description: "Аккуратно соберем ваш заказ, учитывая все ваши требования и пожелания. Объединим ваши товары из разных источников в одну отправку, чтобы вы экономили на доставке.",
    icon: packageicon
  },
  {
    title: "Быстро и выгодно",
    description: "Мы предлагаем быструю и выгодную доставку, чтобы вы могли начать реализацию как можно скорее",
    icon: deliveryicon
  },
  {
    title: "Удобный сервис",
    description: "Стремимся сделать процесс доставки максимально удобным для вас, чтобы опыт остался приятным и беззаботным",
    icon: bestsupport
  },
  {
    title: "Поиск и выкуп товаров",
    description: "Найдем для вас любые товары, независимо от их местоположения, и выкупим их по выгодным ценам.",
    icon: clearinfo
  },
  {
    title: "Индивидуальный подход",
    description: "Мы предлагаем гибкие условия сотрудничества и подберем решение, идеально подходящее именно для вашего бизнеса.",
    icon: garantee
  }
];

const Services = () => {
  return (
    <div className="services-container">
      <h1>Наши услуги</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <img src={service.icon} alt={service.title} />
            <div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
