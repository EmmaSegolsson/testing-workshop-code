/**
 * Filters out odd numbers and return only even number of incoming numbers array
 * @param numberArray number[]
 * @returns number[]
 */
export const even = (numberArray: number[]) => {
  const list = numberArray.filter(number => { return number % 2 === 0})
  return list;
};

/**
 * Filters out even numbers and return only odd number of incoming numbers array
 * @param numberArray number[]
 * @returns number[]
 */
export const odd = (numberArray: number[]) => {
  const list = numberArray.filter(number => { return number % 2 !== 0})
  return list;
};

/**
 * Filter and sort an array or numbers
 *
 * If not options are passed then the a copy of the original array should be returned.
 * The function should handle if only on or the other of the options are passed.
 *
 * @param arrayOfNumbers number[]
 * @param options { sortBy: "even" | "odd", sortDirection: "asc" | "desc"}
 * @returns number[]
 */
export const multiFunctional = (
  arrayOfNumbers: number[],
  options?: { sortBy?: "even" | "odd"; sortDirection?: "asc" | "desc" }
) => {

  if(!options) return [...arrayOfNumbers];

  if(options.sortDirection === "asc"){
    arrayOfNumbers.sort();
  }else{
    arrayOfNumbers.sort();
    arrayOfNumbers.reverse();
  }

  if(options.sortBy === "even"){
    arrayOfNumbers = even(arrayOfNumbers);
  }else {
    arrayOfNumbers = odd(arrayOfNumbers);
  }

  return arrayOfNumbers;
};
