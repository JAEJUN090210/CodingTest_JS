// function solution(my_string, is_prefix) {
//     my_string = my_string.split('');
//     is_prefix = is_prefix.split('');
//     for(let i = 0; i < is_prefix.length; i ++) {
//         if (my_string[i] !== is_prefix[i]){
//             return 0;
//         }
//     }
//     return 1;
// }

const solution = (my_string, is_prefix) => my_string.startsWith(is_prefix) ? 1 : 0;