// Function in Ts 

// ----- Normal Function 

function add (num1:number, num2:number):number{

    return num1+num2
}

// ----- Arrow Function

const addArrow = (num1:number, num2:number): number=>num1+num2

// Object --> function --> method

const poorUser = {

    name: 'Madina',
    balance: 0,
    addBalance (balance : number): string {
        return `My new balance is : ${this.balance + balance}`;
    }
};

const arr : number [] = [11,24,30];

const newArray : number[] = arr.map((elem:number):number => elem*elem);