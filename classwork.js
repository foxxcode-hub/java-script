const colors =[ "Red","Green","blue"];
colors[0] ="yellow";

console.log(colors[colors.length - 1]);
console.log(colors[0]);
console.log(colors[5]);


// 1. push() - adds to the end

const numbers =[10,20,30];

numbers.push(40);

console.log(numbers);


// 2. pop() -deletes the last element

const number =[10,20,30,40];

const removedItem = number.pop();

console.log("Remove:", removedItem);
console.log("Remaining array :", number);


// 3. unshift() - add to the begining 

const nummbers = [10,20,30];

nummbers.unshift(5);

console.log(nummbers);

// 4. shift() - Remove from the begining 

const numbber =[5,10,20,30];

const removeFirst = numbber.shift();

console.log("Remove:",removeFirst);
console.log("Remainig array:",numbber);