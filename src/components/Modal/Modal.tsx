import React from 'react';
import './Modal.scss';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode,
  isVisible: boolean,
};

export const Modal: React.FC<Props> = ({ children, isVisible }) => {
  return (
    <div className={classNames('modal', { visible: isVisible})}>
      <div className="modal__content">{children}</div>
    </div>
  );
};
