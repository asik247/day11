console.log('hi');

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers.reverse());
// array and loop connected
const fruits = ['apple', 'banana', 'painaple', 'carrote', 'angur'];
let i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++
}

// sorted
const ages = [12, 32, 334, 3, 3, 2, 2,];
let agesAcd = ages.sort((a, b) => a - b)
console.log(agesAcd);
// console.log(ages.sort());
let decending = ages.sort((a, b) => b - a);
console.log(decending);
// Assending of number:
const myMarks = [12, 13, 32, 31, 55, 66, 54, 56, 78, 87];
const assendingMark = myMarks.sort(function (a, b) {
    return a - b
})
console.log(assendingMark);
// String decending:
const friendsNames = ['khan', 'jaman', 'kamal', 'motin', 'kaddus', 'salam'];
const decendingFriendsName = friendsNames.sort().reverse();
console.log(decendingFriendsName);
// assending code
console.log(friendsNames.sort());

// object thake proverty niya assending
const myDetails = [
    { name: 'ar', age: 20 },
    { name: 'rimon', age: 21 },
    { name: 'khan', age: 25 },
    {name:'jamal',age:19}
]
const result = myDetails.sort((a,b)=>a.age - b.age);
console.log(result);
/*
1.negative linke 20 - 21 = -1 so a age asbe
2.positive hole b age asbe
3.0 hole 2 jon same
*/

// Array of object:
let studens = [
    {name:'Rimon',age:22,dept:'cse'},
    {name:'Asik',age:20,dept:'eee'},
    {name:'Hasan',age:23,dept:'bba'}
]
console.log(studens[2].age);
let changeAge = studens[0].age = 55
console.log(changeAge);
// Last object access:
let lastObj = studens[studens.length - 1].name;
console.log(lastObj);
// specific daa find using filter meethod
let spc = studens.filter(s=>s.age >21);
console.log(spc);
// for of loop 
for (let stud of studens){
    console.log(stud.name,stud.age);
}

// 2D Array Code Start Here:
const martix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
for (let row of martix){
    console.log(row);
    for(let value of row){
        console.log(value);
    }
}
for (let i = 0; i < martix.length; i++){
    for (let j = 0; j < martix[i].length; j++){
        console.log(martix[i][j]);
    }
}

// Multiple way to array copy:
const array1 = [12,333,222,2,2,2,3];
const array2 = array1;
console.log(array2);
const changeaArray2Value = array2[0]=1111111111112;
console.log(changeaArray2Value);
console.log(array1);

// Right way spred operator 
let array3 = [...array1];
console.log(array3);
let c = array3[0]=20000111222
console.log(array3);
console.log(array1);