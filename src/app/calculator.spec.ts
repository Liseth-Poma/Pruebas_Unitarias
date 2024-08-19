import { Calculator } from './calculator';

describe('test for Calculator', ()=>{
    let calculator: any;
    //Arrange
    beforeEach(()=>{
        calculator = new Calculator();
    });


    describe('Test for multiply', ()=>{

        it('Should return four', ()=>{
            //Arrange
           // let calculator= new Calculator();
            let n1= 2
            let n2= 2;
            let expectedResult=4
            //Act
            let currentResult = calculator.multiply(n1, n2);
            //Assert
            expect(currentResult).toEqual(expectedResult);

        });

        it('Should return nine', ()=>{
            //Arrange
            //let calculator= new Calculator();
            let n1= 3
            let n2= 3;
            let expectedResult=9
            //Act
            let currentResult = calculator.multiply(n1, n2);
            //Assert
            expect(currentResult).toEqual(expectedResult);

        });

    });

    describe('Test for divide', ()=>{

        it('divide for a number', ()=>{
            //Arrange
            //let calculator= new Calculator();
            //Act & Assert
            expect (calculator.divide(6, 3)).toEqual(2);
            expect (calculator.divide(5, 2)).toEqual(2.5);

        });

        it('divide for zero', ()=>{
            //Arrange
            //let calculator= new Calculator();
            //Act & Assert
            expect (calculator.divide(6, 0)).toBeNull;
            expect (calculator.divide(5, 0)).toBeNull;

        });
       

    });

    
    describe('Test for Jazmin matchers', ()=>{

        it('matchers', ()=>{
            
            let name= 'Liss';
            let name2;
            //Act & Assert
            expect (name).toBeDefined();
            expect(name2).toBeUndefined();

            expect(1+3==4).toBeTruthy();
            expect(1+4==3).toBeFalse();

            expect(5).toBeLessThan(10);
            expect(20).toBeGreaterThanOrEqual(15);

            expect('Liseth Poma').toMatch(/set/);

            expect(["perro", "gato", "loro", "vaca"]).toContain("vaca");

        });

    });
});