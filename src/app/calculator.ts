export class Calculator{
    multiply(n1:number, n2: number){
       return n1*n2;
    }
    divide(n1: number, n2: number){
        if (n2===0){
            return null;
        }
        return n1/n2;
    }

}