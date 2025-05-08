"use strict";
{
    const add = (para1, para2) => {
        if (para1 === 'number' && para2 === 'number') {
            return para1 + para2;
        }
        else {
            return para1.toString() + para2.toString; //'toString number type er data k string a convert kore day'
        }
        ;
    };
    const result1 = add(1, 2);
    const result2 = add('1', '2');
    const normalUser = {
        name: 'madina'
    };
    const adminUser = {
        name: 'Mina',
        role: 'admin'
    };
    const getUser = (user) => {
        if ('role' in user) {
            console.log(`My name is ${user.name} and my roll is ${user.role}`);
        }
        else {
            console.log(`My name is ${user.name}`);
        }
        ;
    };
}
