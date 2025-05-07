// ============== Function with Generics

const createArray = <T>(para: T):T[]=>{

    return [para]
}

const amm = createArray(123)