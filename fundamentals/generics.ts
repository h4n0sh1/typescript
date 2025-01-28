class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// Without Type Inference
new ArrayOfAnything<string>(["a", "b", "c"]);

// With Type Inference
const arr = new ArrayOfAnything([1, "a", "@", 0x78]);

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Generic Function Without Type Inference
printAnything<string>(["a", "b", "c", "d"]);

// Generic Function With Type Inference
printAnything(["a", "b", "c", "d"]);

class House {
  print(): void {
    "This is a house";
  }
}

class Car {
  print(): void {
    "This is a car";
  }
}

interface Printable {
  print(): void;
}

// Generic Constraints
function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars([new Car(), new House(), new Car()]);
