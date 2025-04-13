let arr1 = [
    {Name: "Mausam Kumar", DOB: "10/12/2003", FavPlace: "Motihari"},
    {Name: "Jitesh Kumar", DOB: "18/06/2008", FavPlace: "Lakhaura"},
    {Name: "Sachin Kumar", DOB: "22/08/2009", FavPlace: "Lakhaura"},
    {Name: "Aman Kumar", DOB: "22/02/2007", FavPlace: "Sahebganj"},
    {Name: "Aditya Kumar", DOB: "15/09/2011", FavPlace: "Lakhaura"},
    {Name: "Abhishek Kumar", DOB: "14/09/2004", FavPlace: "Barabanki"},
    {Name: "Khushi Kumari", DOB: "01/02/2012", FavPlace: "Motihari"},
    {Name: "Nisha Kumari", DOB: "17/05/2002", FavPlace: "Motihari"},
    {Name: "Puja Kumari", DOB: "24/08/2000", FavPlace: "Motihari"},
    {Name: "Ribha Kumari", DOB: "12/12/2002", FavPlace: "Motihari"},
]

console.log("Using For Loop...")
for (let i=0; i<arr1.length; i++){
    console.log(arr1[i].Name)
}

console.log("\nUsing Do-While Loop...")
let k=0;
do {
    console.log(arr1[k].DOB);
    k++;
}while(k<arr1.length)

console.log("\nUsing While Loop...")
let l=0;
while(l<arr1.length) {
    console.log(arr1[l].FavPlace);
    l++;
}

console.log("\nUsing Map...")
arr1.map((val) => {
    console.log(val.Name)
})

console.log("\nUsing forEach Loop...")
arr1.forEach((val) => {
    console.log(val.DOB)
})

let arr = [
    "Mausam Kumar", "Jitesh Kumar", "Sachin Kumar", "Puja Kumari", "Ribha Kumari", "Khushi Kumari", "Jitendra Sahni", 
    "Maina Devi", "Mukhlal Sahni", "Shanti Devi", "Sanjana Kumari", "Aman Kumar", "Aditya Kumar", "Kundan Kumar",
    "Chandan Kumar", "Suresh Sahni", "Chhotelal Sahni", "Jaylal Sahni"
]

console.log("\nUsing For Loop...")
for (let i=0; i<arr.length; i++){
    console.log(arr[i])
}

console.log("\nUsing Do-While Loop...")
let j=0;
do {
    console.log(arr[j]);
    j++;
}while(j<arr.length)

console.log("\nUsing While Loop...")
let i=0;
while(i<arr.length) {
    console.log(arr[i]);
    i++;
}

console.log("\nUsing Map...")
arr.map((val) => {
    console.log(val)
})

console.log("\nUsing forEach Loop...")
arr.forEach((val) => {
    console.log(val)
})