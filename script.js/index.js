// let std = {
//     id: 870,
//     name: "vivek",
// }
// console.log(std)


// std.id = 769,
//     console.log(std.id);


// let arr = ['hello', 'hii', 760, false]
// for (let i in arr) {
//     console.log(i);
// }



let arr = [1, 2, 3, 4, 5, 9, 8, 7, 5]


// let data = arr.forEach((a) => {
//         console.log(a);
//         console.log(a * 3);
//     }

// )
// console.log(data);


let data = arr.map((a, b, c) => {
        console.log(c);
        return a * 3;
    }

)
console.log(data);