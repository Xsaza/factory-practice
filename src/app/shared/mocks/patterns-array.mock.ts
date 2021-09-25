interface InitPatternInterface {
  name: string,
  type: 'creational' | 'structural' | 'behavioral',
}

export const patternsArray: InitPatternInterface[] = [
  {
    name: 'factory method',
    type: 'creational'
  },
  {
    name: 'abstract factory',
    type: 'creational'
  },
  {
    name: 'builder',
    type: 'creational'
  },
  {
    name: 'prototype',
    type: 'creational'
  },
  {
    name: 'singleton',
    type: 'creational'
  },
  {
    name: 'adapter',
    type: 'structural'
  },
  {
    name: 'bridge',
    type: 'structural'
  },
  {
    name: 'composite',
    type: 'structural'
  },
  {
    name: 'decorator',
    type: 'structural'
  },
  {
    name: 'facade',
    type: 'structural'
  },
  {
    name: 'flyweight',
    type: 'structural'
  },
  {
    name: 'proxy',
    type: 'structural'
  },
  {
    name: 'chain of responsibility',
    type: 'behavioral'
  },
  {
    name: 'chain of responsibility',
    type: 'behavioral'
  },
  {
    name: 'command',
    type: 'behavioral'
  },
  {
    name: 'iterator',
    type: 'behavioral'
  },
  {
    name: 'mediator',
    type: 'behavioral'
  },
  {
    name: 'memento',
    type: 'behavioral'
  },
  {
    name: 'observer',
    type: 'behavioral'
  },
  {
    name: 'state',
    type: 'behavioral'
  },
  {
    name: 'strategy',
    type: 'behavioral'
  },
  {
    name: 'template method',
    type: 'behavioral'
  },
  {
    name: 'visitor',
    type: 'behavioral'
  },
];
