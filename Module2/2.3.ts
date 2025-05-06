// ----------- Generic With  Type Alies

// ============ Normal types VS  Generic Types for Array With Type Diclear //

type GenericArray<T> = Array<T>

// const Roll : number[] = [1,2,3];

const Roll : Array<number> = [1,2,3];

const Roll2 : GenericArray<number> = [1,2,3];

// const Name: string[] = ['mina','tina'];

 const Name: Array<string> = ['mina','tina'];

 const Name2: GenericArray<string> = ['mina','tina'];

// const Maried: boolean[] = [false];

 const Maried: Array<boolean> = [false];

 const Maried2: GenericArray<boolean> = [true];



