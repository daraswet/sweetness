import React, { useState } from 'react';
import './InfoButton.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

export const InfoButton = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleButtonClick = () => {
    setIsTextVisible(true);
  };

  const handleTextClick = () => {
    setIsTextVisible(false);
  };

  return (
    <div className="info__button">
      <div className="info__button__icon" onClick={handleButtonClick}>
        <FontAwesomeIcon icon={faLightbulb} style={{color: "#ff1dd9",}} size="2xl" />
      </div>
      <div className={classNames('info__button__text', { visible: isTextVisible})} onClick={handleTextClick}>
        <p className="info__button__text__value">
          Котёнок, я надеюсь ты удивлён и уже улыбаешься от происходящего, но это ещё не всё 😏
          <br />
          Местом следующего подарка я хотела выбрать машинку, но я подумала, что мы потом можем отнести
          его вместе и использовать в нашем ближайшем путешествии. Поэтому ищи его на месте, где мы храним
          постельное бельё 🙂
        </p>
      </div>
    </div>
  );
};
