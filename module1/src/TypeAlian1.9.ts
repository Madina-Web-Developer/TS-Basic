{

// --------- Type Alies

type Student ={

    Name:string;
    age:number;
    contactno?:string;
    address:string;
    gender:string;
    status?:boolean;
}

const student1:Student ={

    
    Name: 'madina',
    age:22,
    contactno:'0171111111',
    address:'dhk',
    gender:'female',
    status:true,

}
const student2:Student ={

    
    Name: 'mina',
    age:28,
    address:'dhk',
    gender:'female',
    status:true,

}
const student3:Student ={  
    Name: 'Tina',
    age:25,
    address:'dhk',
    gender:'female',

}

//   Others way---------------

type Username = string;

const name:Username='parsian'

type Admin = boolean;

const isadmin:Admin=true;


// ----------------- Type Alies for Function 


type Add = (num1:number, num2:number)=>number;

const sum:Add = (num1,num2)=>num1+num2

}