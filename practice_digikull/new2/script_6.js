// Given an expression string x. Examine whether the pairs and the orders of {,},(,),[,] are correct in exp.
// For example, the function should return 'true' for exp = [()]{}{[()()]()} and 'false' for exp = [(]).

// Note: The drive code prints "balanced" if the function returns true, otherwise it prints "not balanced".

// Example 1:

// Input:{([])}

// Output: true

const exp = '{([])}';
function balanced (exp) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i = 0; i < exp.length; i++) {
        if (exp[i] === '(' || exp[i] === '[' || exp[i] === '{') {
            stack.push(exp[i]);
        } else {
            let last = stack.pop();
            if (exp[i] !== map[last]) {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
}

console.log(balanced(exp));