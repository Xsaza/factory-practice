import { PatternCard } from '../models/pattern-card.model';
import { PatternsFactory } from '../shared/factories/patterns.factories';

export const createPatternCard = (patternsFactory: PatternsFactory, cardName: string): PatternCard => {
  return patternsFactory.createPatternCard(cardName);
}
