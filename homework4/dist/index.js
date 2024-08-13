"use strict";
// Exercise 1: Basic Types and Functions
// 1. Task: Define variables of different basic types (number, string, boolean)
// and write functions that take these types as parameters and return a value.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const num = 20;
const firstname = 'Narek';
const isWeekend = true;
function squareNumber(num) {
    return num * 2;
}
function isAdult(age) {
    return age >= 18;
}
function printGreeting(name) {
    console.log(`Greetings, ${name}!`);
}
function workStatus(isWeekend) {
    if (isWeekend)
        return 'Closed';
    else
        return 'Open';
}
console.log(squareNumber(num));
console.log(isAdult(num));
printGreeting(firstname);
console.log(workStatus(isWeekend));
// Exercise 2: Enums and Interfaces
// 2. Task: Create an enum Color with values Red, Green, and Blue.
// Write a function that takes a Color and returns a string describing the color.
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
function describeColor(color) {
    switch (color) {
        case Color.Red:
            return 'The color is Red';
        case Color.Green:
            return 'The color is Green';
        case Color.Blue:
            return 'The color is Blue';
        default:
            return 'Unknown color';
    }
}
console.log(describeColor(Color.Blue));
class PassengerCar {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    displayDetails() {
        console.log(`Car Details: make: ${this.make}, model: ${this.model}, year: ${this.year}`);
    }
}
const car = new PassengerCar('Toyota', 'Camry', 2020);
car.displayDetails();
// Exercise 3: Enums and Type Assertions
// Task: Create an enum for different user roles (Admin, User, Guest).
// Write a function that takes a role and returns a message based on the role.
// Use type assertions where appropriate.
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "Admin";
    UserRole["User"] = "User";
    UserRole["Guest"] = "Guest";
})(UserRole || (UserRole = {}));
function message(role) {
    if (role === UserRole.Admin)
        return 'You have administrative privileges.';
    else if (role === UserRole.User)
        return 'You are a regular user.';
    else if (role === UserRole.Guest)
        return 'You have limited access.';
    else {
        const unknownRole = role;
        return `Unknown role: ${unknownRole}`;
    }
}
function studentsData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            return yield response.json();
        }
        catch (error) {
            console.error('Error while fetching data', error);
            throw error;
        }
    });
}
studentsData('https://freetestapi.com/api/v1/students')
    .then((students) => {
    console.log(students);
})
    .catch((error) => {
    console.error(error.message);
});
//# sourceMappingURL=index.js.map