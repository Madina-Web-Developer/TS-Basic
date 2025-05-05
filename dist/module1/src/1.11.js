"use strict";
// ------------------ Ternary Operator /  Optional Chaining / Nullish Coalesing Operator
var _a, _b;
{
    const age = 18;
    if (age > 12) {
        console.log('adult');
    }
    else {
        console.log('not adlt');
    }
    // --------- Others way 
    const isAdult = age < 18 ? 'Adult' : 'NotAdult';
    console.log({ isAdult });
    // ----------------------------- Nullish Coalesing Operator
    //    Null / Undefine ====> Decisition Making
    const isAuthenticated = null;
    const result = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'Guest';
    console.log(result);
    const Authenticated = undefined;
    const result2 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'Anonimas';
    console.log(result2);
    const user = {
        name: 'Madina',
        Address: {
            city: 'Dhaka',
            Presentaddress: 'Dhaka',
            Prmanentaddress: 'bshadshj'
        }
    };
    const userpermanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.Address) === null || _a === void 0 ? void 0 : _a.Prmanentaddress) !== null && _b !== void 0 ? _b : 'No Permanentaddress is given by the user';
    console.log({ userpermanentAddress });
}
