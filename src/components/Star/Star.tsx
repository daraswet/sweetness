import React, { useState } from 'react';
import './Star.scss';
import classNames from 'classnames';
import star from '../../img/star.png';
import { allowScroll, blockScroll } from '../../utils/scrollBody';

type Props = {
  text: string,
  classNamePart: string,
};

export const Star: React.FC<Props> = ({ text, classNamePart }) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleStarClick = () => {
    setIsTextVisible(true);
    blockScroll();
  };

  const handleCloseText = () => {
    setIsTextVisible(false);
    allowScroll();
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
