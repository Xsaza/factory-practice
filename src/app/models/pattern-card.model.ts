export interface PatternCard {
  height: number,
  width: number,
  name: string,
  returnType(): 'creational' | 'structural' | 'behavioral',
  returnColor(): 'pink' | 'green' | 'blue',
}

export class CreationalPatternCard implements PatternCard {
  height = 150;
  width = 150;

  constructor(public name: string) {}

  returnColor(): 'green' {
    return 'green';
  }

  returnType(): 'creational' {
    return 'creational';
  }
}

export class StructuralPatternCard implements PatternCard {
  height = 100;
  width = 200;

  constructor(public name: string) {}

  returnColor(): 'blue' {
    return 'blue';
  }

  returnType(): 'structural' {
    return 'structural';
  }
}

export class BehavioralPatternCard implements PatternCard {
  height = 200;
  width = 100;

  constructor(public name: string) {}

  returnColor(): 'pink' {
    return 'pink';
  }

  returnType(): 'behavioral' {
    return 'behavioral';
  }
}
