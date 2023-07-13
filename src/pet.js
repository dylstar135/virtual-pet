const MAXIMUM_FITNESS = 10;
function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
   this.children = [];
};
   
    Pet.prototype = {
        get isAlive() {
          return this.age < 30 && this.hunger < 10 && this.fitness > 0;
        }
      };
    Pet.prototype.growUp = function() {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
          }
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
};
Pet.prototype.walk = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
    if((this.fitness + 4)<= MAXIMUM_FITNESS){
        this.fitness+=4;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    };
};
    
Pet.prototype.feed = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
        if((this.hunger - 3) >=1){
            this.hunger -=3;
        } else {
            this.hunger = 0;
        };
    };
Pet.prototype.checkup = function(){
    if(this.fitness <=3 && this.hunger <=4){
        return 'i need a walk';
    };
    if(this.hunger >=5 && this.fitness >=4){
        return 'i am hungry';
    };
    if(this.fitness <=3 && this.hunger >=5){
        return 'i am hungry and i need a walk';
    } else {
        return 'i feel great';
    };
};
Pet.prototype.adoptChild = function(child) {
    this.children.push(child);
};



module.exports = Pet;