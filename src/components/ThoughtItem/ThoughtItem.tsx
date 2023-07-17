import React, { useState } from 'react';
import './ThoughtItem.scss';
import classNames from 'classnames';

type Props = {
  itemInfo: {
    stickerSource: string,
    text: string,
  },
};

export const ThoughtItem: React.FC<Props> = ({ itemInfo }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClickOnItem = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div className="thoughts__item" onClick={handleClickOnItem}>
      <p className={classNames('thoughts__item__text', { 'visible': isVisible })}>
        {itemInfo.text}
      </p>
      <img src={itemInfo.stickerSource} className="thoughts__item__photo" />
    </div>
  );
};
