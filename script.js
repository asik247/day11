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
let decending = ages.sort((a,b)=>b-a);
console.log(decending);
// Assending of number:
const myMarks = [12,13,32,31,55,66,54,56,78,87];
const assendingMark = myMarks.sort(function(a,b){
    return a-b
})
console.log(assendingMark);
// String decending:
const friendsNames = ['khan','jaman','kamal','motin','kaddus','salam'];
const decendingFriendsName = friendsNames.sort().reverse();
console.log(decendingFriendsName);
// assending code
console.log(friendsNames.sort());