
// function add() {
//     let x = 4;
//     let y = 10;
//     console.log(x + y);
// }

// try {
//     console.log(add(undefined, 6));
// } catch (err) {
//     console.log('Error:', err);
// }

// function main() {
//     let x = 4;
//     let y = 10;
//     if ((x != "number" || y != "number")) {
//         console.log("Not a number")
//     }
// }
// main("7", 9)
// // 

// const divide = (x, y) => {
//     console.log(x / y);
// }
// let a = 5;
// let b = 0;

// divide(a,b);

// const arr = [5, 7, 3, 8, 2, 3, 8, 6];

// if (arr.length) {
//     let filtered = arr.filter(item => item % 2 == 0);
//     console.log(filtered);
// }

// console.log(arr.reverse())

// // const arr2 = ["eye", "legal", "ili", "abc", "reer"];

// const str2 = "eye";

// function palidrom() {
//     // const newArr = [...str2];
//     if(str2.split("").reverse().join("") ===str2){
//         console.log("String is palidrom")
//     }
//     else{
//         console.log("String is not palidrome");
//     }
// }

// palidrom(str2)


const arr = [0, 2, 6, 0, 9, 4, 5, 4, 5, 5, 2, 5, 2, 2, 9];
let count = 1;
let val=[];
const output = [];
for (let i = 0; i < arr.length - 1; i++) {
    if (!val.includes(arr[i])) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            count++;
        }
    }
    let prop= arr[i];
    val.push(arr[i]);
    output.push({[prop]: count});
    }
    count=1;
}
console.log(output);








