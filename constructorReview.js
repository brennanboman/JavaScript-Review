//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  function Animal(species, name, legs, color, food) {
    this.species = species;
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.food = food;
  }//code here


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  function person(name, age, height, gender) {
    var personObj = {
    name: 'name',
    age: 'age',
    height: 'height',
    gender: 'gender'
   }
   return personObj
  }

  //code here


//Create a animal array and a person array.

  var theAnimals = []
  var thePersons = []//code here


//Create two instances of Animal and push those into your animal array

  var dog = new Animal('boston terrier', 'sadie', 4, 'black/white', 'dog food')
  var cat = new Animal('burmese', 'the kisser', 4, 'white', 'cat food')//code here

theAnimals.push(dog, cat)

console.log(theAnimals)

//Create two instances of person and push those into your person array.

  var person1 = {
    name: 'Brett Beck',
    age: 28,
    height: '6 feet',
    gender: 'male'
  };

  var person2 = {
    name: 'Colton Anderson',
    age: 24,
    height: '6 feet',
    gender: 'male'
  };//code here

thePersons.push(person1, person2)

console.log(thePersons)

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  Animal.prototype.eat = function() {
    alert(this.name + ' ate ' this.food)
  }
  dog.eat()//code here


//At this point, if we wanted to add something to every istance of person could we?

  //Yes or no? and why or why not? No



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/
