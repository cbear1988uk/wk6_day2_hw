const Park = function(name, price){
  this.name = name
  this.price = price
  this.dinosaurs = []
  this.visitors = []
};

Park.prototype.countDinosaurs = function(){
    return this.dinosaurs.length;
};

Park.prototype.addDinosaurs = function(dinosaur){
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
  this.dinosaurs = this.dinosaurs.filter(currentDinosaurs => currentDinosaurs != dinosaur)
};

Park.prototype.removeAllDinosaurs = function(){
  this.dinosaurs.splice(0, this.countDinosaurs())
};

module.exports = Park
