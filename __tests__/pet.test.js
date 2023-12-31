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

describe('checkup', () => {
  it ('returns i need a walk if pet fitness is <=3, i am hungry if pet hunger >=5, i am hungry and need a walk if both statementrs are true, and im great if neither are true',() => {
   const pet = new Pet('Fido');
   pet.fitness = 3;
    expect(pet.checkup()).toEqual('i need a walk');
  });
});

describe('checkup', () => {
  it ('returns i need a walk if pet fitness is <=3, i am hungry if pet hunger >=5, i am hungry and need a walk if both statementrs are true, and im great if neither are true',() => {
   const pet = new Pet('Fido');
   pet.hunger = 5;
   expect(pet.checkup()).toEqual('i am hungry');
  });
});

describe('checkup', () => {
  it ('returns i need a walk if pet fitness is <=3, i am hungry if pet hunger >=5, i am hungry and need a walk if both statementrs are true, and im great if neither are true',() => {
   const pet = new Pet('Fido');
   pet.hunger = 5;
   pet.fitness = 3;
   expect(pet.checkup()).toEqual('i am hungry and i need a walk');
  });
});


describe('checkup', () => {
  it ('returns i need a walk if pet fitness is <=3, i am hungry if pet hunger >=5, i am hungry and need a walk if both statementrs are true, and im great if neither are true',() => {
   const pet = new Pet('Fido');
   pet.hunger = 1;
   pet.fitness = 8;
   expect(pet.checkup()).toEqual('i feel great');
  });
});

describe('isAlive', () => {
  it('returns false if the pets fitness is 0 or less', () =>{
    const pet = new Pet('Fido');
    pet.fitness = 0;
  expect(pet.isAlive).toEqual(false)
  });
});

describe('isAlive', () => {
  it('returns false if the pets hunger is 10 or more', () =>{
    const pet = new Pet('Fido');
    pet.hunger = 10;
  expect(pet.isAlive).toEqual(false)
  });
});

describe('isAlive', () => {
  it('returns false if the pets age is 30 or more', () =>{
    const pet = new Pet('Fido');
    pet.age= 30;
  expect(pet.isAlive).toEqual(false)
  });
});

describe('isAlive', () => {
  it('returns true if the pets age <30,pet fitness > 0, pets hunger < 10', () =>{
    const pet = new Pet('Fido');
    pet.age= 29;
    pet.hunger = 2;
    pet.fitness = 10;
  expect(pet.isAlive).toEqual(true)
  });
});

describe('feed', () => {
   it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');

      pet.age = 30;

      expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
  });

  describe('walk', () => {
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
  
        pet.age = 30;
  
        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
      });
    });

    describe('growUp', () => {
    
      it('throws an error if the pet is not alive', () => {
          const pet = new Pet('Fido');
    
          pet.age = 30;
    
          expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
        });
      });

      describe('adoptChild', () => {
        it('returns a parent and child object', ()=> {
          const parent = new Pet('Mika');
          const child = new Pet ('BooBoo');
          expect (new Pet('Mika')).toBeInstanceOf(Pet);
          expect(new Pet ('BooBoo')).toBeInstanceOf(Pet);
        });
      });