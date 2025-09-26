import { add } from './add.js'

test('checks to see if 2 and 2 add up to 4', () => {
    expect(add(2, 2)).toBe(4);
});