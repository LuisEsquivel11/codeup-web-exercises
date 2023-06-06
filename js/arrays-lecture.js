"use strict"
/*************************** Arrays ******************************************/
 const names = ["Luis", "Mac Miller", "Method Man", "Ghostface-Killa"]
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// console.log(names[names.length - 1])
//
//
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i])
// }
//
// names.forEach((name, i, array) => {
//     console.log(arr);
//     console.log()
// })

/************for of loop ************/
for (const name of names) {
    console.log(name);
}