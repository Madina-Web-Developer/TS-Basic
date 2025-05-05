{

// -------- Type Assertion------------->

let anything : any;

anything = 'This is a massage';

anything =222;

(anything as string)


const KgtoGrm = (value: string | number) : string | number | undefined =>{

    if (typeof value === 'string'){

        const convertedvalue = parseFloat(value)*1000

        return `The converted value is ${convertedvalue}`
    }

    if( typeof value === 'number'){

        return value*1000
    }

    }

    const result1 = KgtoGrm(1000) as number;

    const result2 = KgtoGrm("1000") as number;




}







