import { sum, add } from "./sum";

console.log("Sum=", sum(1, 2, 3, 4, 5, 5, 66, 3));

console.log("Sum=", add(4, 54, 54, 56, 78));

let arr = [1, 2, 3];

console.log(sum(arr));

console.log(sum(10, "20", 30));

console.log(sum(true,false,5))
