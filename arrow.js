/*function doubleIt(num){
    return num * 2;
}

*/

const doubleIt = num => num * 2;

const result = doubleIt(50);
console.log(result);

const add = (x,y) => x+y;
console.log(add(4,7))

const give5 = () => 5;
console.log(give5())


const doMath = (x, y) =>{
    const sum = x+y;
    const diff = x-y;
    const result = sum * diff
    return result;
}

console.log(doMath(5,3))
