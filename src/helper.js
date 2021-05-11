
//This function eill take a number and check if it is a prime number
//It will return a boolean value
function checkingPrime(n){
    for(let i = 2; i <= n / 2; i++){
       if(n % i === 0){
          return false;
       }
    };
    return true;
};

 
export function genPrime(num){
    const result = [];
    let counter = 2;
    //Due to complexity of the task.
    //I wanted the loop to end once the set length is attained based on the user request
    while(result.length < num){
       if(checkingPrime(counter)){
          result.push(counter);
       };

       if(counter === 2) {
           counter = counter + 1
       }else{
           counter = counter + 2
       }
    };
    return result; //Array is returned
 };