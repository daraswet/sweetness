/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import './Footer.scss';
import { Timer } from '../Timer';
import { Modal } from '../Modal';
import ModalPhoto from '../../img/modal__photo.png';
import NotificationPhoto from '../../img/notification__photo.jpg';
import classNames from 'classnames';

export const Footer: React.FC = () => {
  const startDate = new Date('2020-11-07');
  const [showModal, setShowModal] = useState(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsNotificationVisible(true);

    setTimeout(() => {
      setIsNotificationVisible(false);
    }, 5000);
  };
  
  const handleCloseNotification = () => {
    setIsNotificationVisible(false);
  };

  return (
    <section className="section section--footer">
      <div className="timer">
        <Timer startDate={startDate} />
        <button
          type="button"
          className="timer__button"
          onClick={handleOpenModal}
        >
          Остановить таймер
        </button>
        <div
          className={classNames('timer__notification', { visible: isNotificationVisible})}
          onClick={handleCloseNotification}
        >
          <img src={NotificationPhoto} />
          <p>
            {`Правильный выбор сделан, твоя жопка довольная)`}
          </p>
        </div>
        <Modal isVisible={showModal}>
          <img src={ModalPhoto} alt="We will kill you!" />
          <h3>Are you ahuel? 🤨</h3>
          <button
            type="button"
            onClick={handleCloseModal}
          >
            Отменить заявку
          </button>
        </Modal>
      </div>
    </section>
  );
};
