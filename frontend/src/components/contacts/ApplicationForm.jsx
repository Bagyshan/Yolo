import React, { useState } from 'react';
import './Application.css'; // Подключение CSS файла для стилизации
import { useDispatch, useSelector } from 'react-redux';
import { postApplication } from '../../store/apiSlice';

const ApplicationForm = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    messenger:'',
    content: '',
  });
  const {loading} = useSelector((state) => state.api)
  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('messenger', formData.messenger);
    formDataToSend.append('content', formData.content);
    await dispatch(postApplication(formDataToSend));
    alert("Заявка отправлена.")
    setFormData({
        name: '',
        email: '',
        messenger: '',
        content: '',
    })
  };

  return (
    <div className="application-container">
      <div className="application-form-container">
        <h1 className="form-title">Заявка</h1>
        <form className="application-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Имя"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Почта"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="messenger"
            placeholder="Номер WhatsApp"
            value={formData.messenger}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="content"
            placeholder="Какая услуга вам требуется?"
            value={formData.content}
            onChange={handleChange}
            required
          />
          <div className='submitButton'>
          {!loading ? (
                        <button type="submit" className="submit-button">
                            Отправить
                        </button>
                    ): (
                        <div>
                            <div className="lds-roller">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
