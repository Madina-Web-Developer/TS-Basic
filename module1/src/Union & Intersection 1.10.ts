// --------Union & Intersection in TypeScript 

{

// ----------- Union Types 

type FrontendDev = 'good'| 'bad';

type BackendDev = 'expert' | 'normal'

type FullstackDev = FrontendDev | BackendDev

// another way 


type User ={

    name:string;
    age:number;
    email?:string;
    gender:'male'|'female'
    bloodgroup:'A+'| 'B+' | 'AB+'
}

const user1:User ={

    name:'madina',
    age:22,
    gender:'female',
    bloodgroup:'A+'
}


// --------------------------- Intersection for TypeScript


type FrontendDeveloper = {

    Skills :string[],
    Deg1:'FD',
}
type BackendDeveloper = {

    Skills :string[],
    Deg2:'BD',
}

type Developer = FrontendDeveloper & BackendDeveloper

const FullstackDeveloper : Developer = {

    Skills :['HTML', 'Express', 'CSS'],
    Deg1:'FD',
    Deg2:'BD',
}

}