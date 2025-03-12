//* Questions for practice
// we will start from the very basics

// Question 1
// create a function that uses a interfaces as parameter and print all

interface User {
  email: string;
  name: string;
  password: string;
}

function Printuser(user: User) {
  console.log(
    `the user name is ${user.name} and his email is  ${user.email} lemme give you their password also ${user.password}`
  );
}

Printuser({
  email: "john.doe@example.com",
  name: "John Doe",
  password: "securepassword123",
});

// question 2
//  make a function that takes other hello function as parameter and call it

function Hello(Pharse: string) {
  console.log(`hy ${Pharse} i am hello`);
}

function main(fn: () => void) {
  fn();
}

main(() => Hello("Arpit"));

// Let's Begin from basic questions

// Question 1
//  Write a function add that takes two numbers as arguments and returns their sum. Ensure

// Solution -->

function Sum(a: number, b: number) {
  let res = a + b;
  return console.log(res);
}

Sum(1, 3);

// Question 2
// Write a function formatInput that accepts either a string or number and returns it as a string.

// Solution -->

function Converter(args: string | number): string {
  let res = String(args);
  return res;
}

//Question 3
// Define a tuple person that stores a string (name) and a number (age).

// Solution -->

type Person = [string, number, string];

const person: Person = ["Arpit", 11, "here"];
console.log(person[0]);

//Question 4
// Create an enum Status with values Pending, Approved, and Rejected. Write a function that takes the Status and returns a message.

// Expected o/t

// console.log(getStatusMessage(Status.Approved));
// Expected Output: "Your request is approved."

// Solution -->

enum Status {
  Pending,
  Approved,
  Rejected,
}

function Shipper(status: Status) {
  status === Status.Pending
    ? console.log("you order is Pending")
    : "we did not recieve any status";
  status === Status.Approved
    ? console.log("you order is approved")
    : "we did not recieve any status";
  status === Status.Rejected
    ? console.log("you order is Rejected")
    : "we did not recieve any status";
}

// !Question 5 [important ]

// Create a generic function filterArray<T> that filters elements from an array based on a condition.

function filterArray<T>(arg: T[], condition: (items: T) => boolean): T[] {
  return arg.filter(condition);
}

let res = filterArray([1, 2, 3, 4, 5], (num) => num > 2);
let res1 = filterArray(["snake", "cake", "make", "quick ", "lick"], (words) =>
  words.endsWith("e")
);

// Question 6
// Do the same thing but  this time make a interface of user having name and age , filter them using generic filtererr

function Filterer<T>(args: T[], condition: (items: T) => boolean) {
  return args.filter(condition);
}

interface AllUser {
  name: string;
  age: number;
}

const user: AllUser[] = [
  { name: "joseph", age: 43 },
  { name: "henry", age: 55 },
  { name: "Lamrk", age: 90 },
  { name: "chris", age: 59 },
];

let res3 = Filterer(user, (user) => user.age > 43);
console.log(res3);

// question  7
// Create a function getUserAddress that safely accesses user.address?.city and provides a default "Unknown City" if it's undefined or null.

//Expected outPut
// console.log(getUserAddress({ address: { city: "New York" } }));
// Expected Output: "New York"

// console.log(getUserAddress({}));
// Expected Output: "Unknown City"

function namgetUserAddresse(user: { address?: { city?: string } }): string {
  return user.address?.city ?? "Default city";
}
let result = namgetUserAddresse({ address: { city: "newyork" } });
let result1 = namgetUserAddresse({});


//question 8
let a:number