function Ninja(name){
  this.name = name;
  this.health = 100;
  var speed = 3;
  var strength = 3;


  this.sayName = function(){
    console.log(this.name)
  }

  this.drinkSake= function(){
    this.health += 10
  }
  
  this.showStats = function(){
    console.log('name: ', this.name)
    console.log('health: ', this.health)
    console.log('speed: ', speed)
    console.log('strength: ', strength)
  }
}


var myNinja = new Ninja('raza')
myNinja.sayName();
myNinja.showStats();
console.log('---------');
myNinja.drinkSake();
myNinja.showStats();
