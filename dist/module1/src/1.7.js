"use strict";
{
    // Spread Operator / Rest Operator & Destructureing 
    // Spread Operator using process in TypeScript------ For Array
    const Names = ['Madina', 'Tara', 'Mina'];
    const Names2 = ['mala', 'sala', 'jala'];
    Names.push(...Names2);
    //   Spread Operator using for Object
    const mentores1 = {
        Bangla: 'Akas',
        English: 'Batas',
        Math: 'Pani'
    };
    const mentores2 = {
        Bangla: 'Akkas',
        English: 'Jakkas',
        Math: 'Mokless'
    };
    const MentoreList = Object.assign(Object.assign({}, mentores1), mentores2);
    // ------------------------------ Rest Operator for Ts
    const greetFriends = (...Friends) => {
        Friends.forEach((Friends) => {
            console.log(`hi ${Friends}`);
        });
    };
    greetFriends('mala', 'gita', 'samiya');
}
