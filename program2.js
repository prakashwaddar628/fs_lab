const operations = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) => a * b,
    div: (a, b) => {
        if (b === 0) throw new Error("Division by zero");
        return a / b;
    },
};

function* calSteps(steps) {
    for (let step of steps) {
        const { op, a, b } = step;
        if (!operations[op]) {
            yield `Invalid operation: ${op}`;
            continue;
        }
        try {
            const res = operations[op](a, b);
            yield `${a} ${op} ${b} = ${res}`;
        } catch (error) {
            yield `Error in operation ${op}: ${error.message}`;
        }
    }
}

const calcSteps = [
    { op: 'add', a: 10, b: 5 },
    { op: 'sub', a: 10, b: 5 },
    { op: 'mul', a: 10, b: 5 },
    { op: 'div', a: 15, b: 3 },
    { op: 'div', a: 10, b: 0 },
    { op: 'mod', a: 10, b: 2 },
];

const calc = calSteps(calcSteps);

let step = calc.next();
while (!step.done) {
    console.log(step.value);
    step = calc.next();
}