import forEach from "./forEach";

// callback mock function
const mockCallbackFunction = jest.fn(n => n + 42);

test("test callback calling", () => {
    forEach([1, 2, 3, 4], mockCallbackFunction);

    expect(mockCallbackFunction.mock.calls).toHaveLength(4);

    expect(mockCallbackFunction.mock.calls[0][0]).toBe(1);
    expect(mockCallbackFunction.mock.calls[0][0]).not.toBe(0);
});

const myMock1 = jest.fn();
const a = new myMock1();
const b = new myMock1();
console.log(myMock1.mock.instances);

const myMock2 = jest.fn();
const c = {};
const bound = myMock2.bind(c);
bound();
console.log(myMock2.mock.contexts);