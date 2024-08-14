import React, { useState, useEffect } from 'react';
import previos from '../../accets/Vector (1).png';
import next from '../../accets/Vector (2).png';
import quotes from '../../accets/Quotes.png';
import './Reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      text: "Хочу выразить огромную благодарность компании YOLO за их безупречный сервис и высокое качество товаров. Я заказывал у них детскую одежду и остался очень доволен. Они помогли мне выбрать именно то, что мне нужно, и ответили на все мои вопросы.",
      name: "Александр",
      icon: quotes
    },
    {
      id: 2,
      text: "Я очень рада, что начала сотрудничать с YOLO. Они берут на себя все заботы по поиску, выкупу, доставке и проверке товаров, что позволяет мне значительно экономить время. Благодаря этому я могу сосредоточиться на развитии своего бизнеса.",
      name: "Елена",
      icon: quotes
    },
    {
      id: 3,
      text: "Ваш сервис действительно изменил процесс заказа. Я больше не переживаю о таможенных вопросах и документах - все у вас в порядке. Спасибо за ваше качество и надежность.",
      name: "Екатерина",
      icon: quotes
    },
    {
      id: 4,
      text: "В этой компании ценят каждого клиента и всегда готовы предложить индивидуальное решение. Они внимательно  слушают  пожелания своих клиентов и  учитывают  все  их  требования.",
      name: "Дмитрий",
      icon: quotes
    },
    {
      id: 5,
      text: "Здесь  мне  нравится  абсолютно  все:  от  профессионализма  сотрудников  до  качества  товаров  и  услуг.Я  всегда  уверен,  что  получу  именно  то,  что  мне  нужно. YOLO  –  это  компания,  которой  можно  доверять!",
      name: "Нурсултан",
      icon: quotes
    },
    {
      id: 6,
      text: "Они всегда  выполняют  свои  обязательства  в  срок  и  на  высоком  уровне. Я знаю, что могу  быть  уверен  в  том,  что  YOLO не  подведет. Это  очень  важно  для  меня,  поскольку  я  ценю  надежность  в  бизнесе",
      name: "Нурлан",
      icon: quotes
    }
  ]);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewsPerPage, setReviewsPerPage] = useState(2);

  useEffect(() => {
    const updateReviewsPerPage = () => {
      if (window.innerWidth <= 768) {
        setReviewsPerPage(1);
      } else {
        setReviewsPerPage(2);
      }
    };

    updateReviewsPerPage();
    window.addEventListener('resize', updateReviewsPerPage);

    return () => {
      window.removeEventListener('resize', updateReviewsPerPage);
    };
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? reviews.length - reviewsPerPage : prevIndex - reviewsPerPage));
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + reviewsPerPage >= reviews.length ? 0 : prevIndex + reviewsPerPage));
  };

  return (
    <div className="reviews-container">
      <h1>Отзывы</h1>
      <div className="carousel">
        <img src={previos} alt="previos" className="carousel-button" onClick={goToPrevious} />
        <div className="carousel-content">
          {reviews.slice(currentIndex, currentIndex + reviewsPerPage).map((review) => (
            <ReviewItem
              key={review.id}
              text={review.text}
              name={review.name}
              icon={review.icon}
            />
          ))}
        </div>
        <img src={next} alt="next" className="carousel-button" onClick={goToNext} />
      </div>
    </div>
  );
};

const ReviewItem = ({ text, name, icon }) => (
  <div className="review-item">
    <p className="review-text">{text}</p>
    <div className="review-footer">
      <span className="review-name">{name}</span>
      <img src={icon} alt="quotes" className="review-icon" />
    </div>
  </div>
);

export default Reviews;
