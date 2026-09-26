# ESLint Quick-Start Demo
JavaScript project demonstrating static code analysis with **ESLint** and automatic code formatting with **Prettier**.
The project was created as a Quick-Start Workshop for the first semester of the IPI course.

Our group:
- Nekhviadovich Anastasiya
- Lesovnikov Semyon
- Cherepkov Ilya
- Shiryaeva Daria
- Hegazy Abdelrhman

## Project Goal
The main goal of the project is to demonstrate how static code analysis can be integrated into a JavaScript project from scratch. 
ESLint is used to detect common code-quality problems before the application is executed.
Prettier is used as an additional formatting tool to keep the source code consistent and readable.

The project demonstrates:
- ESLint installation and configuration;
- custom linting rules;
- Node.js environment configuration;
- automatic detection of code-quality problems;
- automatic fixing of supported ESLint issues;
- automatic code formatting with Prettier;
- formatting validation;
- simulation of an intentional linting failure.

## Technologies
- JavaScript
- npm
- ESLint
- Prettier

## Project Structure
```text
ipi/
├── src/
│   ├── app.js
│   └── calculator.js
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslint.config.js
├── package.json
├── package-lock.json
└── README.md
```

### Source Files
`src/app.js`
Main application file. It imports calculator functions and demonstrates their execution.

`src/calculator.js`
Contains simple calculator functions used as demonstration source code for static analysis.

`eslint.config.js`
Contains ESLint configuration, JavaScript recommended rules, Node.js globals and additional project-specific rules.

`.prettierrc`
Contains code formatting rules used by Prettier.


## ESLint
ESLint performs static analysis of JavaScript source files.

Run ESLint:
```bash
npm run lint
```
If the source code follows all configured rules, ESLint finishes without errors.

### Automatic Fix
Some ESLint violations can be corrected automatically:
```bash
npm run lint:fix
```

## Prettier
Check source-code formatting:
```bash
npm run format:check
```

Format the source code automatically:
```bash
npm run format
```

## Complete Quality Check
Run both ESLint and Prettier validation:

```bash
npm run check
```

This command performs:
```text
ESLint static analysis
        ↓
Prettier formatting check
        ↓
Successful quality check
```


## ESlint Configured Rules
`no-var`
Disallows the use of `var`.

Bad:
```js
var value = 10;
```

Better:
```js
const value = 10;
```

`prefer-const`
Requires `const` when a variable is never reassigned.

Bad:
```js
let value = 10;
console.log(value);
```

Better:
```js
const value = 10;
console.log(value);
```

`no-unused-vars`
Detects declared variables that are never used.

Example:
```js
const unusedValue = 42;
```

`eqeqeq`
Requires strict equality operators.

Bad:
```js
value == '10';
```

Better:
```js
value === '10';
```

## Prettier Configuration
Prettier is used to ensure consistent source-code formatting.
The configuration controls:
- semicolon usage;
- quotation marks;
- indentation;
- trailing commas;
- maximum line width.

## Edge Case Demonstration
Demonstration of how ESLint reacts to incorrect source code.
For example, the following code can be added to `src/app.js`:

```js
var demo = 10;

if (demo == '10') {
  console.log('Lint demo');
}

const unused = 42;
```

Run:
```bash
npm run lint
```

ESLint should detect several problems, including:
- usage of `var`;
- non-strict equality with `==`;
- unused variable declaration.

Some problems can then be automatically fixed:
```bash
npm run lint:fix
```
Remaining violations can be corrected manually.

After fixing the source code, run again:
```bash
npm run lint
```
to verify that the project passes static analysis.

## Prettier Failure Demonstration
Formatting can also be intentionally changed to demonstrate Prettier validation.

Run:
```bash
npm run format:check
```
If formatting does not match the configuration, Prettier reports the affected files.

The code can then be formatted automatically:
```bash
npm run format
```

After that:
```bash
npm run format:check
```
should complete successfully.

## Live Demo Scenario
1. Run the application:
```bash
npm start
```

2. Run all quality checks:
```bash
npm run check
```

3. Run:
```bash
npm run lint
```

4. Run:
```bash
npm run lint:fix
```

5. Run ESLint again:
```bash
npm run lint
```

6. Demonstrate Prettier:
```bash
npm run format:check
npm run format
npm run format:check
```

## Problem Solved by the Tool
Without static analysis, many JavaScript problems are detected only during manual code review or application execution.
ESLint automates this process and provides immediate feedback during development.
It helps developers:

- detect common programming mistakes;
- enforce project coding conventions;
- reduce manual code-review work;
- maintain consistent code quality;
- detect problems before committing or deploying code.
Prettier complements ESLint by automatically maintaining consistent formatting.

## Conclusion
This project demonstrates a basic but practical integration of ESLint into a JavaScript application.
ESLint provides automated static analysis and detects violations according to configured rules.
Prettier provides deterministic source-code formatting.
Together, these tools reduce manual code-quality checks and make the development process more consistent and reproducible.