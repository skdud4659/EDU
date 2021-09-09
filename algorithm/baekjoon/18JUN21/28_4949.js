const fs = require("fs");
let stdin = (
process.platform === "linux"
? fs.readFileSync("/dev/stdin").toString()
:`So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( ))] )) ]).
 .
.`  
).trim() 
.split("\n");

// const fs = require('fs');
// const stdin = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function stack(str) {
    let stack = [];
    let wz = null;

    for (let s of str) {
        if (s==='(' || s==='[') {
            stack.push(s)
        } else if (s===')') {
            wz = stack.pop();
            if ((wz === null) || (wz !== '('))
                return false;
        } else if (s===']') {
            wz = stack.pop();
            if ((wz === null) || (wz !== '[')) 
                return false;
        }
    } 
        return stack.length == 0 ? true : false;
}


for (let i=0; i<stdin.length; i++) {
    if(stdin[i]==='.') {
        break
    }
    let answer = stack(stdin[i]);
    answer == true ? console.log('yes') : console.log('no')
}


// let stack = [];

// for (let i=0; i<stdin.length; i++) {
//     let input = stdin[i];
//     let result = 'yes';
//     let wz = null;

//     for (let j=0; j<input.length; j++) {
//         if (input[j]=='(' || input[j]=='[') {
//             stack.push(input[j])
//         } else if (input[j]==')') {
//             wz = stack.pop()
//             if (wz == null || wz !== '(') {
//                 result = 'no'
//             }
//         } else if (input[j]==']') {
//             wz = stack.pop()
//             if (wz == null || wz !== '[') {
//                 result = 'no'
//             }
//         } 
    
//     }
//     if (stdin[i] =='.') {
//         break
//     }
//     console.log(result)
// }
