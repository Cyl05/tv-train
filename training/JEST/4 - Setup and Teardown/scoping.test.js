beforeAll(() => {
    console.log("1 - beforeAll");
});

beforeEach(() => {
    console.log("1 - beforeEach");
});

afterAll(() => {
    console.log("1 - afterAll");
});

afterEach(() => {
    console.log("1 - afterEach");
});

test('1 - test', () => {
    console.log('1 - test');
});

describe('block execution testing', () => {
    beforeAll(() => {
        console.log("2 - beforeAll");
    });

    beforeEach(() => {
        console.log("2 - beforeEach");
    });

    afterAll(() => {
        console.log("2 - afterAll");
    });

    afterEach(() => {
        console.log("2 - afterEach");
    });

    test('2 - test', () => {
        console.log('2 - test');
    });
});

/*
ORDER OF EXECUTION AS FOLLOWS:
1 - beforeAll
1 - beforeEach
1 - test
1 - afterEach
2 - beforeAll
1 - beforeEach
2 - beforeEach
2 - test
2 - afterEach
1 - afterEach
2 - afterAll
1 - afterAll
*/