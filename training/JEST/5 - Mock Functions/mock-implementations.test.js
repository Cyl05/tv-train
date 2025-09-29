const mockFn = jest.fn(cb => cb(null, true));

mockFn((err, val) => console.log(val));

test("test to avoid fail", () => {
    expect(2 + 2).toBe(4);
});

jest.mock('./forEach');
import forEach from "./forEach";

forEach.mockImplementation(() => 42);
console.log(forEach());