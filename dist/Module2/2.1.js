"use strict";
{
    // -------- Type Assertion------------->
    let anything;
    anything = 'This is a massage';
    anything = 222;
    anything;
    const KgtoGrm = (value) => {
        if (typeof value === 'string') {
            const convertedvalue = parseFloat(value) * 1000;
            return `The converted value is ${convertedvalue}`;
        }
        if (typeof value === 'number') {
            return value * 1000;
        }
    };
    const result1 = KgtoGrm(1000);
    const result2 = KgtoGrm("1000");
}
