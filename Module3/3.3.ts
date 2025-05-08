
{
// --------------- Type Guard Using

// ------ Typeof with---> Type Guard



type Alfanum = string|number;

const add = (para1:Alfanum, para2:Alfanum) :Alfanum =>{

    if (para1 === 'number' && para2 === 'number' ){

        return para1+para2
    }else{

        return para1.toString() + para2.toString  //'toString number type er data k string a convert kore day'
    };
}

const result1 = add(1,2)

const result2 = add('1','2')


// ------------- In Guard  - - -> In gurd always works for Object


type NormalUser ={

    name:string;
}

type AdminUser ={

    name:string;
    role:'admin';
}


const normalUser : NormalUser ={

    name:'madina'
}

const adminUser : AdminUser ={

    name:'Mina',
    role:'admin'
}




const getUser = (user: NormalUser | AdminUser) => {

    if('role' in user){
        console.log(`My name is ${user.name} and my roll is ${user.role}`);

    }else{
        console.log(`My name is ${user.name}`)
    };
}




}