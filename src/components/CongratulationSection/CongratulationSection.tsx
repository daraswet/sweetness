import React from 'react';
import './CongratulationSection.scss';
import photo from '../../img/congratulation.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { Star } from '../Star';

export const CongratulationSection: React.FC = () => {
  return (
    <section className="section section--congratulation">
      <div className="congratulation">
        <div className="congratulation__text">
          <p>
            Кот, я так горжусь, что мой мужчина - это ты. Счастлива, что судьба нас с тобой познакомила
            (ну или водка на балконе, тут как посмотреть... 🙈). Хочу, чтобы каждый раз, как ты будешь открывать
            этот подарок, наши светлые воспоминания оставляли улыбку на твоём лице, как это происходит сейчас со
            мной.
            <br />
            <br />
            В твой день рождения (как и в остальные 365 дней в году) я хочу пожелать тебе поддержки со
            всех сторон. Пусть каждый твой день будет наполнен позитивными эмоциями, счастьем и улыбками, а в
            сердце всегда горит огонь. Я очень в тебя верю и желаю достичь всех поставленных целей, а также
            исполнение всех желаний (а у нас их много..😏).
            <br />
            <br />
            Думаю, такой день для того и отмечают, чтобы благодарить наших близких за то, что они делают для нас.
            Но как выразить словами то, насколько ты дорог мне и как много каждый день совершаешь для меня? Пусть
            звёздочки немножко поведают, насколько же я тебе благодарна...
            <br />
            <br />
            Люблю тебя, мой мужчина❤️
          </p>
        </div>
        <div className="congratulation__decorator">
          <p className="congratulation__decorator__title">
            {`What's up?`}
          </p>
          <FontAwesomeIcon
            icon={faShare}
            rotation={180}
            size="2xl"
            className="congratulation__decorator__icon"
          />
        </div>
        <div className="congratulation__photo">
            <img src={photo} alt="You & me" className="congratulation__photo__main" />
        </div>
        <Star
          text="Я благодарна тебе за откровенные серьезные разговоры и за твоё умение дурачиться со мной.  Казалось бы такие 2 совершенно противоположные вещи помещаются в тебе, моём самом дорогом человеке"
          classNamePart="1"
        />
        <Star
          text="Я благодарна тебе за твоё терпение, неимоверную поддержку и веру в меня, как же это ценно"
          classNamePart="2"
        />
        <Star
          text="Я благодарна тебе за наше общение, фантазии, незабываемые эмоции и невероятное количество ярких моментов, которые мы с тобой пережили"
          classNamePart="3"
        />
      </div>
    </section>
  );
};
