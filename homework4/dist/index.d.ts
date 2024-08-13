declare const num: number;
declare const firstname: string;
declare const isWeekend: boolean;
declare function squareNumber(num: number): number;
declare function isAdult(age: number): boolean;
declare function printGreeting(name: string): void;
declare function workStatus(isWeekend: boolean): string;
declare enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}
declare function describeColor(color: Color): string;
interface Car {
    make: string;
    model: string;
    year: number;
}
declare class PassengerCar implements Car {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number);
    displayDetails(): void;
}
declare const car: PassengerCar;
declare enum UserRole {
    Admin = "Admin",
    User = "User",
    Guest = "Guest"
}
declare function message(role: UserRole): string;
interface Student {
    id: number;
    name: string;
    age: number;
    gender: string;
    address: Address;
    email: string;
    phone: string;
    courses: string[];
    gpa: number;
    image: string;
}
interface Address {
    street: string;
    city: string;
    zip: number;
    country: string;
}
declare function studentsData(url: string): Promise<Student[]>;
