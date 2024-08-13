// Exercise 1: Basic Types and Functions
// 1. Task: Define variables of different basic types (number, string, boolean)
// and write functions that take these types as parameters and return a value.

const num: number = 20;
const firstname: string = 'Narek';
const isWeekend: boolean = true;

function squareNumber(num: number): number {
    return num * 2;
}

function isAdult(age: number): boolean {
    return age >= 18;
}

function printGreeting(name: string): void {
    console.log(`Greetings, ${name}!`);
}

function workStatus(isWeekend: boolean): string {
    if (isWeekend) return 'Closed';
    else return 'Open';
}

console.log(squareNumber(num));
console.log(isAdult(num));
printGreeting(firstname);
console.log(workStatus(isWeekend));


// Exercise 2: Enums and Interfaces
// 2. Task: Create an enum Color with values Red, Green, and Blue.
// Write a function that takes a Color and returns a string describing the color.

enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}

function describeColor(color: Color): string {
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

// 3. Task: Define an interface Car with properties make, model, and year.
// Then create a class that implements this interface and includes a method to display the car's details.

interface Car {
    make: string,
    model: string,
    year: number
}

class PassengerCar implements Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayDetails(): void {
        console.log(`Car Details: make: ${this.make}, model: ${this.model}, year: ${this.year}`);
    }
}

const car = new PassengerCar('Toyota', 'Camry', 2020);
car.displayDetails();

// Exercise 3: Enums and Type Assertions
// Task: Create an enum for different user roles (Admin, User, Guest).
// Write a function that takes a role and returns a message based on the role.
// Use type assertions where appropriate.

enum UserRole {
    Admin = 'Admin',
    User = 'User',
    Guest = 'Guest',
}

function message(role: UserRole): string {
    if (role === UserRole.Admin) return 'You have administrative privileges.';
    else if (role === UserRole.User) return 'You are a regular user.';
    else if (role === UserRole.Guest) return 'You have limited access.';
    else {
        const unknownRole: never = role as never;
        return `Unknown role: ${unknownRole}`;
    }
}

// Exercise 4: Asynchronous Functions and Promises
// Task: Write an asynchronous function that fetches data from a mock API and returns the data.
// Use Promise and async/await.

interface Student {
    id: number,
    name: string,
    age: number,
    gender: string,
    address: Address,
    email: string,
    phone: string,
    courses: string[],
    gpa: number,
    image: string
}

interface Address {
    street: string,
    city: string,
    zip: number,
    country: string
}

async function studentsData(url: string): Promise<Student[]> {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error while fetching data', error);
        throw error;
    }
}

studentsData('https://freetestapi.com/api/v1/students')
    .then((students: Student[]) => {
        console.log(students);
    })
    .catch((error: Error) => {
        console.error(error.message);
    });