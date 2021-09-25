import React, { useEffect, useState } from 'react';

import '../styles/pattern-card.css';

import { createPatternCard } from './helpers/create-pattern-cards.helper';
import { PatternCard } from './models/pattern-card.model';
import { CreationalPatternCardFactory, StructuralPatternCardFactory, BehavioralPatternCardFactory } from './shared/factories/patterns.factories';
import { patternsArray } from './shared/mocks/patterns-array.mock';

const creationalPatternCardFactory = new CreationalPatternCardFactory();
const structuralPatternCardFactory = new StructuralPatternCardFactory();
const behavioralPatternCardFactory = new BehavioralPatternCardFactory();

export const AppComponent: React.FC = () => {
  const [patternCards, setPatternCards] = useState<PatternCard[]>([]);

  useEffect(() => createPatternCards(), []);

  const createPatternCards = () => {
    const creationalPatternArray: PatternCard[] = [];
    const structuralPatternArray: PatternCard[] = [];
    const behavioralPatternArray: PatternCard[] = [];

    patternsArray.forEach(pattern => {
      if (pattern.type === 'creational') { creationalPatternArray.push(createPatternCard(creationalPatternCardFactory, pattern.name)); }
      if (pattern.type === 'structural') { structuralPatternArray.push(createPatternCard(structuralPatternCardFactory, pattern.name)); }
      if (pattern.type === 'structural') { behavioralPatternArray.push(createPatternCard(behavioralPatternCardFactory, pattern.name)); }
    });

    setPatternCards([...patternCards, ...creationalPatternArray, ...structuralPatternArray, ...behavioralPatternArray]);
  }

  const renderPatternCard = (patternCard: PatternCard, index: number): JSX.Element => {
    return (
      <div
        className="patternCard"
        style={{height: patternCard.height, width: patternCard.width, backgroundColor: patternCard.returnColor()}}
        key={index}
      >
        <p>{patternCard.name}</p>
        <p>{patternCard.returnType()}</p>
      </div>
    );
  }

  return (
    <div className="patternCardsWrapper">{patternCards.map((patternCard, index) => renderPatternCard(patternCard, index))}</div>
  )
};
