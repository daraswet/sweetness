import React from 'react';
import './ThoughtsSection.scss';
import { ThoughtItem } from '../ThoughtItem';
import photoDahaVar from '../../img/dasha_var.png';
import dahaPhoto from '../../img/dasha_photo.png';

import ManStickerOne from '../../img/man_sticker--1.png';
import ManStickerTwo from '../../img/man_sticker--2.png';
import ManStickerThree from '../../img/man_sticker--3.png';
import ManStickerFour from '../../img/man_sticker--4.png';
import ManStickerFive from '../../img/man_sticker--5.png';
import ManStickerSix from '../../img/man_sticker--6.png';

import WomanStickerOne from '../../img/women_sticker--1.png';
import WomanStickerTwo from '../../img/women_sticker--2.png';
import WomanStickerThree from '../../img/women_sticker--3.png';
import WomanStickerFour from '../../img/women_sticker--4.png';
import WomanStickerFive from '../../img/women_sticker--5.png';
import WomanStickerSix from '../../img/women_sticker--6.png';

const Man = [
  {
    stickerSource: ManStickerOne,
    text: 'я вкусно готовлю',
  },
  {
    stickerSource: ManStickerTwo,
    text: 'я очень выросла с нашего знакомства',
  },
  {
    stickerSource: ManStickerThree,
    text: 'я странненькая 🙂 (немножко)',
  },
  {
    stickerSource: ManStickerFour,
    text: 'наш быт тебе нравится',
  },
  {
    stickerSource: ManStickerFive,
    text: 'я касивая ( фигура и зёпка прям очень)',
  },
  {
    stickerSource: ManStickerSix,
    text: 'твой ненаписанный факт 😅',
  },
];
const Woman = [
  {
    stickerSource: WomanStickerOne,
    text: 'ты очень целеустремлённый',
  },
  {
    stickerSource: WomanStickerTwo,
    text: 'ты тоже вкусно готовишь...😏',
  },
  {
    stickerSource: WomanStickerThree,
    text: 'наш секс ахуенен во всех проявлениях',
  },
  {
    stickerSource: WomanStickerFour,
    text: 'ты очень заботливый',
  },
  {
    stickerSource: WomanStickerFive,
    text: 'твой запах идеален...🤤',
  },
  {
    stickerSource: WomanStickerSix,
    text: 'ты красивый и сексуальный',
  },
];

export const ThoughtsSection: React.FC = () => {
  return (
    <section className="section section--thoughts">
      <div className="thoughts">
        <div className="thoughts__photo">
          <img src={photoDahaVar} />
        </div>
        <div className="thoughts__text">
          <h3 className="thoughts__text__title">
            Ты думаешь, что ...
          </h3>
          <div className="thoughts__items">
            {Man.map((manItem, index) => (
              <ThoughtItem itemInfo={manItem} key={`${index}-${manItem.text}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="thoughts thoughts--second">
        <div className="thoughts__photo">
          <img src={dahaPhoto} alt="" />
        </div>
        <div className="thoughts__text">
          <h3 className="thoughts__text__title">
            Я думаю, что ...
          </h3>
          <div className="thoughts__items">
            {Woman.map((manItem, index) => (
              <ThoughtItem itemInfo={manItem} key={`${index}-${manItem.text}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
