import React, { useState, useEffect} from 'react';
import './GreetingSection.scss';
import photo from '../../img/greeting.png';
import kiss from '../../img/kiss.png';
import classNames from 'classnames';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-java';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

export const GreetingSection: React.FC = () => {
  const [withAnimation, setWithAnimation] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const initializedAnimation = () => {
    setWithAnimation(prevState => !prevState);

    setTimeout(() => {
      setWithAnimation(false);
    }, 4000);
  };

  return (
    <section className="section section--greeting">
      <div className="greeting">
        <div className="greeting__photo">
          <h1 className="title title--greeting title--greeting--mobile">
            Happy birthday,
          </h1>
          <img
            className={classNames('greeting__photo__main', { 'animation': withAnimation})}
            src={photo} alt="Me & you"
            onClick={initializedAnimation}
          />
          <FontAwesomeIcon
            icon={faShare}
            rotation={180}
            size="2xl"
            className="greeting__photo__decorator"
          />
          <h1 className="title title--greeting title--greeting--mobile">
            my lovely boy
          </h1>
          <img className={classNames('greeting__photo__kiss', { 'animation': withAnimation})} src={kiss} alt="Kiss you" />
        </div>
        <div className="greeting__text">
          <div className="greeting__text__title__wrapper">
            <h1 className="title title--greeting">
              <em>Happy Birthday, my lovely boy ♥</em>
            </h1>
            <h2 className="title--date">
              19.07.2023
            </h2>
          </div>
          <div className="greeting__code">
            <pre>
              <code className="language-java">
{`from datetime import data
    public class BirthdayMyLove {
    public static void main (String [] args){
      today = date.today ();
      birthday = date (2023,07,19);
      if (today = birthday ) {
        print ("Congratulations, lovely!");
      KISS_YOU ();
    }
  }
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
