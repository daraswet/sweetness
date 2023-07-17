import React, { useState } from 'react';
import './SliderSection.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import first from '../../img/1.jpg';
import second from '../../img/2.jpg';
import third from '../../img/3.jpg';
import fourth from '../../img/4.jpg';
import fifth from '../../img/5.jpg';
import sixth from '../../img/6.jpg';
import seventh from '../../img/7.jpg';
import eighth from '../../img/8.jpg';
import nineth from '../../img/9.jpg';
import tenth from '../../img/10.jpg';
import eleventh from '../../img/11.jpg';
import twelfth from '../../img/12.jpg';
import thirteenth from '../../img/13.jpg';
import fourthteenth from '../../img/14.jpg';
import fifteenth from '../../img/15.jpg';
import sixteenth from '../../img/16.jpg';
import seventeenth from '../../img/17.jpg';
import eighteenth from '../../img/18.jpg';
import nineteenth from '../../img/19.jpg';
import twenty from '../../img/20.jpg';
import { Star } from '../Star';

export const SliderSection:React.FC = () => {
  const [slides] = useState([
    {
      title: 'какой была наша первая фотка?',
      image: first,
    },
    {
      title: 'как мы делали масочки и фоткались в снепчате?',
      image: second,
    },
    {
      title: 'каким был мой первый день рождение, который мы отмечали вместе?',
      image: third,
    },
    {
      title: 'как ты сказал, что ты тут очень мило держишь мою ручку?',
      image: fourth,
    },
    {
      title: 'а потом сплятался🙈',
      image: fifth,
    },
    {
      title: 'как мы гуляли по городу всю ночь и встртили рассвет возле речки? Ты сказал, что это теперь будет нашим местом ...',
      image: sixth,
    },
    {
      title: 'какие у нас были эмоции впервые в аэропорту, как летели отдыхать?',
      image: seventh,
    },
    {
      title: 'какой у нас был крутой отель и как мы ахреннвпли каждый раз, как заходили внутрь?',
      image: eighth,
    },
    {
      title: 'как ты устроил нам фотосессию и как мы смешно и долго устанавливали телефон?',
      image: nineth,
    },
    {
      title: 'как мило корчили лица и пили свой джек?',
      image: tenth,
    },
    {
      title: 'как много целовались, меняли образы, и ты говорил, что это затем, чтобы казались разные фотосессии',
      image: eleventh,
    },
    {
      title: 'а потом, глядя на эту фотку, смеялись и говорили, что выглядим как парочка в глубоком браке?',
      image: twelfth,
    },
    {
      title: 'как мы кайфонули от первого в нашей жизни дайвинга?',
      image: thirteenth,
    },
    {
      title: 'и сказали, что обязательно попробуем ещё',
      image: fourthteenth,
    },
    {
      title: 'а как поехали гулять и нашли это невероятно красивое место ?',
      image: fifteenth,
    },
    {
      title: 'как нас фотографировала женщина и сказала "прижмись к ней ближе, что вы как неженаты", мы посмеялись и ответила, что мы и так не женаты 🙃 "тогда точно поженитесь" ответила она',
      image: sixteenth,
    },
    {
      title: 'как ярко гуляли на день независимости, делали много милых фоточек, видео и ещё кое-что в парке...',
      image: seventeenth,
    },
    {
      title: 'как встречали вместе мои 21?',
      image: eighteenth,
    },
    {
      title: 'и много целовались...',
      image: nineteenth,
    },
    {
      title: 'как наконец-то встретились после стольких месяцев расстояния, переехали на долгожданную квартиру и встретили вдвоём наш первый новый год в новом городе?',
      image: twenty,
    },
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="section section--slider">
      <div className="slider">
        <h1 className="slider__title">
          А ты помнишь
          <em className="slider__title__span">
            {slides[currentSlide].title}
          </em>
        </h1>
        <Carousel
          selectedItem={currentSlide}
          onChange={handleSlideChange}
          showArrows={true}
          showStatus={false}
          showIndicators={true}
          showThumbs={false}
          infiniteLoop={true}
        >
          {slides.map((slide, index) => (
            <div key={index}>
              <img className="slider__photo" src={slide.image} alt={`Slide ${index}`} />
            </div>
          ))}
        </Carousel>
        <Star
          text="Я благодарна тебе за твою защиту, заботу и нежность, которую ты даришь мне в самое необходимые для меня время"
          classNamePart="4"
        />
        <Star
          text="Это такая мелочь, но я так благодарна тебе за этот кофе, который ты привозишь мне каждый раз, как едешь к пацанам"
          classNamePart="5"
        />
        <Star
          text="И конечно же я благодарна тебе за все наши воспоминания..."
          classNamePart="6"
        />
      </div>
    </section>
  );
};
