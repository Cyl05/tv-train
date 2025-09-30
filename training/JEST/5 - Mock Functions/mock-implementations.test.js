const mockFn = jest.fn(cb => cb(null, true));

mockFn((err, val) => console.log(val));

// mock implementation of defined function

jest.mock('./forEach');
import forEach from "./forEach";

forEach.mockImplementation(() => (42));
test("check mock implementation", () => {
    const result = forEach();
    expect(result).toBe(42);
});