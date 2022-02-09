/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log("Array two = ", arr2);
arr2.push(4);
console.log("Array one = ", arr1);
console.log("Array two = ", arr2);


// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3];
arr4.push(7);

console.log("Array three = ", arr3);
console.log("Array four = ", arr4);


// Copying an object
let obj1 = {
    a: 1,
    b: 2,
    c: 3
};
let obj2 = {
    ...obj1,
    d: 4
};
let obj3 = {
    ...obj1,
    b: 5
};
console.log("object one = ", obj1);
console.log("object two = ", obj2);
console.log("object three = ", obj3);


// Copying only part of an array/object
let arr5 = [...arr1, {
    ...obj1
}, ...arr3, "x", "y", "z"];
console.log("array five = ", arr5);

let students = [{
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {
            maths: 'Harry',
            english: 'Joan',
            cad: 'Paul'
        },
        results: {
            maths: 90,
            english: 75,
            cad: 87
        },
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {
            science: 'Iris',
            english: 'Joan',
            art: 'Simon'
        },
        results: {
            science: 93,
            english: 80,
            art: 95
        },
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {
            science: 'Iris',
            maths: 'Harry',
            art: 'Simon'
        },
        results: {
            science: 63,
            maths: 87,
            art: 95
        },
    }
];

let subjects = [...students[0].subjects];
const update = (item, val) => [...item, val];
let updatedSubjects = update(subjects, "Electronics");
console.log("-----------------challenge--------------")
console.log(updatedSubjects);
console.log(students[0]);