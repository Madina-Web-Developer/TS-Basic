

// =================== Type guard using instance of
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


}