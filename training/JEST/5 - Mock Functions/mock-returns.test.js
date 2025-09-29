// return value setting for mock functions
const mockFn = jest.fn();

mockFn.mockReturnValueOnce(10).mockReturnValueOnce('Hello, world!').mockReturnValue(true);

test('check mock function return value', () => {
    const result1 = mockFn();
    const result2 = mockFn();
    const result3 = mockFn();
    const result4 = mockFn();

    expect(result1).toBe(10);
    expect(result2).toBe('Hello, world!');
    expect(result3).toBe(true);
    expect(result4).not.toBe(false);
});