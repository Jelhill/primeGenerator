import { genPrime } from "./helper"

test('A case where a non integer number is passed', () => {
    const result = genPrime(2);
    expect(result).toBeTruthy();
});
  
test('A case where 2 is passed', () => {
    const result = genPrime(2);
    expect(result).toEqual([2, 3]);
});
  
test('A case where 0 is passed', () => {
    const result = genPrime(0);
    expect(result).toEqual([]);
});

test('A case where 10 is passed', () => {
    const result = genPrime(10);
    expect(result).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
});




  