### Code Coverage:

Code coverage refers to how much of the code is executed when running the testing suite. They have a few main types:

- **Statement coverage** - Coverage of all the statements run
- **Branch coverage -** are all the branches (if/else) covered
- **Function coverage -** are all the defined functions called
- **Condition coverage** - are all boolean conditions tested for all states

### Test Quality:

This refers to the overall quality of the testing suite. They refer to:

- **Meaningful Testcases -** Meaningful data must be provided with the testcases and correctness must be validated.
- **Edge cases -** Edge cases must always be considered when testing
- **Negative cases -** Negative testcases must also be included to make sure errors are handled correctly
- **Readability** - The testcases must be named and should have descriptions which are self-explanatory.

### Best Practices:

- Tests must be written alongside code and must be maintained as code changes.
- Aim for high coverage of around 80%
- Cover both expected behavior and error cases.


### ALL MATCHERS

- toBe
- toEqual

#### Truthiness

- toBeDefined
- toBeUndefined
- toBeNull
- toBeTruthy
- toBeFalsy

#### Numbers

- toBeCloseTo
- toBeGreaterThan
- toBeGreaterThanOrEqual
- toBeLessThan
- toBeLessThanOrEqual

#### String

- toMatch

#### Errors:

- toThrow

#### Arrays:

- toContain