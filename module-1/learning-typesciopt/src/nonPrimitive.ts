// array , object

// ts - tuple



let bazarList: string[] = ["eggs", "milk", "sugar"];

// bazarList.push("12");

let mixedArr: (string | number)[] = ["eggs", 12, "milk", 1, "sugar", 2];

// mixedArr.push(12);

// tuple : fixed length array , fixed type

let coordinates: [number, number] = [12, 45];

let couple: [string, string] = ["Husband", "wife"];

let destination: [string, string, number] = ["Dhaka", "Chattogram", 3];


// reference type : object

// const person: {
//   organization: "Programming Hero";// value => type : literal types
//   firstName: string;
//   middleName?: string; // optional type
//   lastName: string;
//   isMarried: boolean;
// } = {
//   organization: "Programming Hero",
//   firstName: "Jhankar",
//   lastName: "Mahbub",
//   isMarried: true,
// };


// person.organization = "Programming Hero Fire";


// const person2: {
//   readonly organization: string; // access modifier
//   firstName: string;
//   middleName?: string; // optional type
//   lastName: string;
//   isMarried: boolean;
// } = {
//   organization: "Programming Hero",
//   firstName: "Jhankar",
//   lastName: "Mahbub",
//   isMarried: true,
// };

// person2.organization = "Programming Hero Fire";

// console.log(person2);