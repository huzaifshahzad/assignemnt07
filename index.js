"use strict";
// 1 Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
let n = 10;
let sum = 0;
for (let i = 0; i <= 2 * n; i += 2) {
    sum = sum + i;
}
console.log(`sum of first ${n} even number is:`, sum);
// 2 Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray = [];
for (let i = 0; i < array1.length; i++) {
    if (i % 2 === 0) {
        newArray.push(i);
    }
}
console.log("even numbers from given aray are,", newArray);
// 3 Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array2.length; i++) {
    if (array2[i] % 2 === 0) {
        array2.splice(i, 1);
    }
}
console.log(`modified array after itritionis:`, array2);
// 4 Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
function areaOfCircle(r) {
    const p1 = 3.14;
    let area = p1 * r ** 2;
    return area;
}
console.log("area or circle of given redius is:", areaOfCircle(10));
// 5 Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
let listOfGrades = [70, 60, 80, 40, 96, 66];
for (let i = 0; i < listOfGrades.length; i++) {
    if (listOfGrades[i] < 50) {
        listOfGrades.splice(i, 1);
    }
}
console.log(`modified list after removing faling GeolocationCoordinates(below 50)is:`, listOfGrades);
// 6 Write a program that uses a function to find the largest element in an array of numbers.
let arrayElemant = [1, 45, 32, 77, 65];
function findLargestElemant(elemant) {
    let largestNum = elemant[0];
    for (let index = 1; index < arrayElemant.length; index++) {
        if (arrayElemant[index] > largestNum) {
            largestNum = elemant[index];
        }
    }
    return largestNum;
}
let largestelemant = findLargestElemant(arrayElemant);
console.log(largestelemant);
