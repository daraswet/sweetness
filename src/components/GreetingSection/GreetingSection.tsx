import React, { useState, useEffect} from 'react';
import './GreetingSection.scss';
import photo from '../../img/greeting.png';
import kiss from '../../img/kiss.png';
import classNames from 'classnames';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-java'; // Import other language components if needed

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
          <img 
            className={classNames('greeting__photo__main', { 'animation': withAnimation})}
            src={photo} alt="Me & you"
            onClick={initializedAnimation}
          />
          <img className={classNames('greeting__photo__kiss', { 'animation': withAnimation})} src={kiss} alt="Kiss you" />
        </div>
        <div className="greeting__text">
          <div className="greeting__text__title__wrapper">
            <h1 className="title title--greeting">
              Happy Birthday, my lovely boy ♥
            </h1>
            <h2 className="title--date">
              19.07.2023
            </h2>
          </div>
          <div className="greeting__code">
            <pre>
              <code className="language-java">
{`public class BirthdayWishes {
    public static void main(String[] args) {
      String[] phrases = {
        "Happy birthday",
        "my lovely boy",
      };
      for (String phrase : phrases) {
          System.out.println(phrase);
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
