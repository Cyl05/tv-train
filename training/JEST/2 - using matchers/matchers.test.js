test('null checks', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero checks', () => {
    const n = 0;
    expect(n).not.toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
    expect(n).toEqual(0);
});

test('floating point check', () => {
    const sum = 0.1 + 0.2;
    expect(sum).toBeCloseTo(0.3);
});

test('string match', () => {
    const string = "Hello, world!";
    expect(string).toMatch(/Hello, world!/);
});

test('email checker', () => {
    const password = "rs.chiraag11@talview.com";
    expect(password).toMatch(/\D*@[a-zA-Z]*.com/);
});

function throwError() {
    throw new Error('Type Error :(');
}

test('checks for error', () => {
    expect(throwError).toThrow();
    expect(throwError).toThrow(Error);

    expect(throwError).toThrow('Type Error :(');
    expect(throwError).toThrow(/Type/);
});

const fruits = ['apple', 'banana', 'cherry', 'pomegranate', 'mango'];

test('array checker', () => {
    expect(fruits).toContain('banana');
    expect(new Set(fruits)).toContain('pomegranate');
    expect(fruits).not.toContain('Carrot');
});
