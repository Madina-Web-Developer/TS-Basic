// ------------------ Ternary Operator /  Optional Chaining / Nullish Coalesing Operator

{

const age:number = 18

if(age>12){

    console.log('adult')
}else{

    console.log('not adlt')
}


// --------- Others way 

const isAdult = age<18 ? 'Adult':'NotAdult'

console.log({isAdult})


// ----------------------------- Nullish Coalesing Operator
                                                            //    Null / Undefine ====> Decisition Making

    const isAuthenticated = null;
    
    const result = isAuthenticated?? 'Guest'
    
    console.log(result)

    const Authenticated = undefined;
    
    const result2 = isAuthenticated?? 'Anonimas'

    console.log(result2)









}