import React, { useState } from 'react';
import './Star.scss';
import classNames from 'classnames';
import star from '../../img/star.png';

type Props = {
  text: string,
  classNamePart: string,
};

export const Star: React.FC<Props> = ({ text, classNamePart }) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleStarClick = () => {
    setIsTextVisible(true);

    setTimeout(() => {
      setIsTextVisible(false);
    }, 5000);
  };

  const handleCloseText = () => {
    setIsTextVisible(false);
  };

  return (
    <div className={`star star--${classNamePart}`}>
      <button className="star__button" onClick={handleStarClick}>
        <img src={star} alt="Star" />
      </button>
      <div className={classNames('star__text', { visible: isTextVisible })} onClick={handleCloseText}>
        <p className="star__text__value">
          {text}
        </p>
      </div>
    </div>
  );
};
