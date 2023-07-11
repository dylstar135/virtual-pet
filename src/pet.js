function Pet(name) {
    this.name = name;
    this.age = 0;
    };
    Pet.prototype.growUp = function() {
        this.age += 1;
        rex.growUp = function(){
            this.age += 5;
        };
};


module.exports = Pet;