import { addition, subtraction, multiplication, division} from "./math"

// filmnamn + describe + 
describe('math', () => {
    describe('addition', () => {
        // it() och test() är samma sak
        it('should add two numbers togehter', () =>{
            const result = addition(2,2);
            expect(result).toBe(4);
        })
        it('should add two numbers togehter', () =>{
            const result = addition(2,2);
            expect(result).not.toBe(3);
        })
    })
    describe('subtraction', () => {
        // it() och test() är samma sak
        it('should subtract second number with the first', () =>{
            const result = subtraction(2,2);
            expect(result).toBe(0);
        })
    })
    describe('multiplication', () => {
        // it() och test() är samma sak
        it('should multiply two numbers', () =>{
            const result = multiplication(2,2);
            expect(result).toBe(4);
        })
    })
    describe('division', () => {
        // it() och test() är samma sak
        it('should divid second number with the first', () =>{
            const result = division(2,2);
            expect(result).toBe(1);
        })
    })
})