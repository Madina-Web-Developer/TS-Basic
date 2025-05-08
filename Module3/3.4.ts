

// =================== Type guard /Type Narowwing
//  using instance of
{
 
class Animal {

    name:string;
    species: string;

    constructor(name:string, species:string){
       this.name = name;
       this.species = species;
    }

    makeSound (){
        console.log('I am making sound')
    }
}

class Dog extends Animal{

    constructor(name:string, species:string){
        super(name, species);
    }

    makeBark(){
        console.log('ame kori gau gau')
    }
}
class Cat extends Animal{

    constructor(name:string, species:string){
        super(name, species);
    }

    makeMaw(){
        console.log('ame kori gau Maw Maw')
    }
}

const dog = new Dog('Dog Vi', 'dog');
const cat = new Cat('Cat vi', 'cat');

// Smart way ta babohar korar jonno amra Function babohar korta pari atar poribortee

// const getAnimal = (animal: Animal) =>{

//     if( animal instanceof Dog){
//         animal.makeBark();
//     }else if( animal instanceof Cat){
//         animal.makeMaw();
//     }else{
//         animal.makeSound();
//     }
// }


const isDog = (animal: Animal): animal is Dog=>{

    return animal instanceof Dog
}
const isCat = (animal: Animal): animal is Cat=>{

    return animal instanceof Cat
}


const getAnimal = (animal: Animal) =>{

    if(isDog(animal)){
        animal.makeBark();
    }else if(isCat(animal)){
        animal.makeMaw();
    }else{
        animal.makeSound();
    }
}



}