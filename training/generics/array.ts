function returnFirst<T>(arr: T[]): T {
    return arr[0];
}

console.log(returnFirst(["hello", "hi"]));
console.log(returnFirst([1, 2]));
console.log(returnFirst([]));