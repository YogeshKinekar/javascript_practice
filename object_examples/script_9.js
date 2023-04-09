// Write a program using this constructor to call 

function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
  }
  
  const mario = new Person("mario");
mario.name;
mario.introduceSelf();


const frankie = new Person("Frankie");
frankie.name;
frankie.introduceSelf();

