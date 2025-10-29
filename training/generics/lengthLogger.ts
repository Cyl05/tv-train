function lengthLogger<T extends { length: number }>(item: T): void {
    console.log(item.length);
}

lengthLogger("Hello");
lengthLogger([1, 2, 3]);