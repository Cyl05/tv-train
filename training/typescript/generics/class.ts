class Box<T> {
    private data: T[] = [];

    add(value: T): void {
        this.data.push(value);
    }

    print(): T[] {
        return this.data;
    }
};

const foo = new Box<string>();
foo.add("hello");
foo.add("world");
const arr = foo.print();
console.log(arr);