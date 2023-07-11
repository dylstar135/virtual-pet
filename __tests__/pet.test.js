const Pet = require('../src/pet');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);
  });
});

describe('constructor', () => {

  it('sets the name property', () => {
    const pet = new Pet('Fido');

    expect(pet.name).toEqual('Fido');
  });
});

describe('constructor', () => {

  it('has a initial age of 0', () => {
    const pet = new Pet('Fido');

    expect(pet.age).toEqual(0);
  });
});

describe('growUp', () => {
  it('increments the age by 1', () => {
    const pet = new Pet('Fido');

    pet.growUp();

    expect(pet.age).toEqual(1);
  });
});
describe ('growUp', () => {
  it('increases hunger by 5 and decreases fitness by 3', () =>{
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.hunger).toEqual(5),
    expect(pet.fitness).toEqual(7);
  });
});



describe('walk', () => {

  it('increases fitness by to a maximum of 10', () => {
    const pet = new Pet('fido');

    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });
});

describe('feed', () =>{
  it('decreases hunger by 3 to a minimum of 0',() => {
    const pet = new Pet ('fido');
    pet.hunger = 3;
    pet.feed();
    expect(pet.hunger).toBe(0);
  });
});