//dynamically generalize: Generic

type GenericArray<T> = Array<T>;


// const friends: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
const friends: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

//const rollNumbers: number[] = [4, 7, 11];
const rollNumbers: GenericArray<number> = [4, 7, 11];

// const isEligibleList: boolean[] = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];




type User = { name: string; age: number };

const userList: GenericArray<User> = [
  {
    name: "Mr. X",
    age: 22,
  },
  {
    name: "Mr. Y",
    age: 25,
  },
];

const sqrFunc = (value: number) => {
  return value * value;
};

sqrFunc(4);

// generic function

function getArrayLength<T>(arr: GenericArray<T>): number {
  return arr.length;
}

const lengthOfStringArray = getArrayLength<string>(["A", "B", "C", "D"]);
const lengthOfNumArray = getArrayLength<number>([1, 2, 3, 4, 5, 6]);

// console.log(lengthOfStringArray);
// console.log(lengthOfNumArray);

// multiple generic types

type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ["20", "30"];