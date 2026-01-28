console.log('hi');

const numbers = [1,2,3,4,5,6,7];
console.log(numbers.reverse());
// array and loop connected
const fruits = ['apple','banana','painaple','carrote','angur'];
let i = 0;
while(i < fruits.length){
    console.log(fruits[i]);
    i++
}

// sorted
const ages = [12,32,334,3,3,2,2,];
let agesAcd = ages.sort((a,b)=>a-b)
console.log(agesAcd);
// console.log(ages.sort());