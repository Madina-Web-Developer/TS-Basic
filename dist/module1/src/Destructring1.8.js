"use strict";
// Destructring Data in TS--------
// Destructring in Object Data
{
    const user = {
        id: 100,
        name: {
            firstname: 'madina',
            middlename: 'akter',
            lastname: 'Mina',
        },
        contno: '0170000000',
        address: 'uganda'
    };
    // Now if i want to Ds then the process will be
    const { contno } = user;
    const { name: firstname } = user;
}
// ------------------ Array Destructring
const myFds = ['asa', 'nasa', 'baul', 'gaul', 'faul'];
const [, , a, b, ...rest] = myFds;
"aykhana prothom 2 ta name neta na chayla arokom koma ,, deta hobe and baki gula last porjonto nita chayla ...rest dela hoye jabe";
