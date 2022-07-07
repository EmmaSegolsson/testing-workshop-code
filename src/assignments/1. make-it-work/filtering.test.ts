import { even, odd, multiFunctional} from './filtering';
// filmnamn + describe + 
describe('filtering', () => {
    describe('Filter out odd numbers and returns even', () => {
        // it() och test() är samma sak
        it('should be able to filter out odd numbers from array with odd and even numbers', () =>{
            const numbers = [1,2,3];
            const result = even(numbers)
            expect(result).toStrictEqual([2]);
        })
    })
    describe('Filter out even numbers and returns odd', () => {
        // it() och test() är samma sak
        it('should be able to filter out odd numbers from array with odd and even numbers', () =>{
            const numbers = [1,2,3];
            const result = odd(numbers)
            expect(result).toStrictEqual([1,3]);
        })
    })
    describe('Filter and sort on "option"', () => {
        it('should return a copy if no speciefied options', () =>{
            const numbers = [1,2,3];
            const result = multiFunctional(numbers)
            expect(result).toStrictEqual(numbers);
        })

        it('should return a list with options = {even, asc}', () =>{
            const numbers = [1,4,2,3];

            const result = multiFunctional(numbers, {sortBy: "even", sortDirection: "asc"})
            expect(result).toStrictEqual([2,4]);
        })

        it('should return a list with options = {even, desc}', () =>{
            const numbers = [1,4,2,3];

            const result = multiFunctional(numbers, {sortBy: "even", sortDirection: "desc"})
            expect(result).toStrictEqual([4,2]);
        })

        it('should return a list with options = {odd, asc}', () =>{
            const numbers = [1,4,2,3];

            const result = multiFunctional(numbers, {sortBy: "odd", sortDirection: "asc"})
            expect(result).toStrictEqual([1,3]);
        })
    })
})