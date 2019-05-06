//In the end, if we are left with a stack still having elements, then this implies an invalid expression.

var s = []; //Initialize a stack S.
var input = "{[)(";
var pairs = {
    ")": "(",
    "]": "[",
    "}": "{"
}


function validParenthesis(input) {
    for (var i =  0; i < input.length; i++) { //Process each bracket of the expression one at a time.
        var c = input.charAt(i); // Current character we are iterating through from our string

        if (pairs.hasOwnProperty(c)) { // If the character is a closing bracket 
            var topElement = s.length == 0 ? "" : s.pop();

            if (pairs[c] === topElement) {  // If top element matches what we found pop it off the stack
                s.pop();
            }
        } else { // If its an open bracket
            s.push(input.charAt(i))
        }

    }
    if (s.length === 0) { //If we are left with a stack still having elements, then this implies an invalid expression.
        return true;
    } else {
        return false;
    }
}




validParenthesis(input);