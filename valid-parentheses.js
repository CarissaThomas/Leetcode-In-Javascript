//In the end, if we are left with a stack still having elements, then this implies an invalid expression.

var s = []; //Initialize a stack S.
var input = "{[]}";
var pairs

function validParenthesis(input) {
    for (var i = 0; i < input.length; i++) { //Process each bracket of the expression one at a time.
        if (input.charAt(i) == '(' || input.charAt(i) == '{' || input.charAt(i) == '[') { //If we encounter an opening bracket, we simply push it onto the stack.
            s.push(input.charAt(i));
        }

        switch (input.charAt(i)) { //If we encounter a closing bracket, then we check the element on top of the stack. 
            case ')':
                if (s.indexOf('(') != 1) {
                    s.slice(i, i);
                }
                break;
            case '}':
                if (s.indexOf('{') != 1) {
                    s.slice(i, i);
                }
                break;
            case ']':
                if (s.indexOf('[') != 1) {
                    s.slice(i, i);
                }
                break;
            default:
            // code block
        }

    }

    if (s.length > 0) { //If we are left with a stack still having elements, then this implies an invalid expression.
        return false;
    } else {
        return true;
    }
}

validParenthesis(input);