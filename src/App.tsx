import React from 'react';
import './App.scss';

import { GreetingSection } from './components/GreetingSection';
import { CongratulationSection } from './components/CongratulationSection';

export const App: React.FC = () => {
  return (
    <div className="container">
      <GreetingSection />
      <CongratulationSection />
    </div>
  );
};
