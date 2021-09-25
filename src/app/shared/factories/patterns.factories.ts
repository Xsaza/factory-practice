import {
  PatternCard,
  CreationalPatternCard,
  StructuralPatternCard,
  BehavioralPatternCard,
} from '../../models/pattern-card.model';

export interface PatternsFactory {
  createPatternCard(cardName: string): PatternCard,
}

export class CreationalPatternCardFactory implements PatternsFactory {
  createPatternCard(cardName: string): CreationalPatternCard {
    return new CreationalPatternCard(cardName);
  }
}

export class StructuralPatternCardFactory implements PatternsFactory {
  createPatternCard(cardName: string): StructuralPatternCard {
    return new StructuralPatternCard(cardName);
  }
}

export class BehavioralPatternCardFactory implements PatternsFactory {
  createPatternCard(cardName: string): BehavioralPatternCard {
    return new BehavioralPatternCard(cardName);
  }
}
