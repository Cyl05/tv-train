interface Box<T> {
    value: T
}

const numBox: Box<number> = { value: 10 };
const strBox: Box<string> = { value: "hello" };