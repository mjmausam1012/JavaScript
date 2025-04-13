const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];

readline.question("What is Your Name: ", name => {
    arr.push(name)
    readline.close
    arr.map((val) => {
        console.log("Your Name is:", val)
    })
})

