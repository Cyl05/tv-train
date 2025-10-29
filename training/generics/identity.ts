function identity<T>(arg: T): T {
    return arg;
}

const hello = identity("hello");
const num = identity(2);

console.log(hello);
console.log(num);