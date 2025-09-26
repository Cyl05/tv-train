let str;

function initialiseString() {
    str = "Hello, world!";
}

beforeEach(() => {
    initialiseString();
});

afterEach(() => {
    str = "";
})

test("check string", () => {
    expect(str).toMatch(/world/);
});

let username;
describe("fixed set of before a", () => {
    beforeEach(() => {
        username = "chiraag";
    });

    afterEach(() => {
        username = undefined;
    });

    test("check describe setup function", () => {
        expect(username).toMatch(/chiraag/);
    })
});

test("check describe setup function outside scope", () => {
    expect(username).toBeUndefined();
});