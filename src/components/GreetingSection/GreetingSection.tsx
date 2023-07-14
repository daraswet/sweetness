import React, { useState, useEffect} from 'react';
import './GreetingSection.scss';
import photo from '../../img/greeting_photo.jpg';
import silhoutte from '../../img/greeting_silhoutte.png';
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
          <img className="greeting__photo__main" src={photo} alt="Me & you" />
          <img
            className={classNames('greeting__photo__silhoutte', { 'animation': withAnimation})}
            src={silhoutte}
            alt="Me & you"
            onClick={initializedAnimation}
          />
          <img className={classNames('greeting__photo__kiss', { 'animation': withAnimation})} src={kiss} alt="Kiss you" />
        </div>
        <div className="greeting__text">
          <h1 className="title title--greeting">
            Happy Birthday
          </h1>
          <div className="greeting__code">
            <pre>
              <code className="language-java">
                {`public class HelloWorld {
                    public static void main(String[] args) {
                    System.out.println("Hello, World!");
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
