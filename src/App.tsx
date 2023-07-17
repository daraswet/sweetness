import React from 'react';
import './App.scss';

import { GreetingSection } from './components/GreetingSection';
import { CongratulationSection } from './components/CongratulationSection';
import { ThoughtsSection } from './components/ThoughtsSection';
import { SliderSection } from './components/SliderSection';
import { InfoButton } from './components/InfoButton';

export const App: React.FC = () => {
  return (
    <div className="container">
      <GreetingSection />
      <CongratulationSection />
      <ThoughtsSection />
      <SliderSection />
      <InfoButton />
    </div>
  );
};
