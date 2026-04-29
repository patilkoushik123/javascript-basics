//let name ="koushik";
//console.log(name);

let age =20;
age = 21;
console.log(age);

const name="koushik";
//name ="puttu";
console.log(name);

function add(a,b){
    return a+b;
}

console.log(add(5,10));

const sub = (a,b) => {
    return a-b;
};

console.log(sub(101,5));

const mul = (a,b) => a*b;
console.log(mul(5,10));

var x=10;
x=20;
console.log(x);

const biodata ={
    name: "koushik",
    age:21,
    hobbies:["cricket","studying","sleeping"]
}
console.log(biodata.name);

console.log(biodata.hobbies[2]);

console.log(biodata.hobbies);

const numbers= [1,2,3];
console.log(numbers);
numbers[1]=20;
console.log(numbers);

var numbers2 =[4,5,6];
numbers2[1]=10;
console.log(numbers2);

numbers2.push(10);
console.log(numbers2);

numbers.pop(numbers2[0]);
console.log(numbers);


for(let i=0;i<5;i++){
    console.log(i);
}

for(let i=0;i<numbers2.length;i++){
    console.log(numbers2[i]);
}

const nums = [1,2,3];

const doubled = nums.map(n => n*2);
console.log(doubled);

const nums2 = [1,2,3,4,5];

const filterEven = nums2.filter(n => n%2==0);
console.log(filterEven);

let a =10;
let b=100;

console.log(a>b);
console.log(a<b);
console.log(a==b);
console.log(a!=b);
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a==10);
console.log(a=="10");
console.log(a===10);
console.log(a==="10");

let agee = 17;

if(agee>=18){
    console.log("your an adult");
}else{
    console.log("your a minor");
}
let agees = 20

//ternary operator

let result = agees>=18 ? "your an adult" : "your a minor";

console.log(result);

const users= [
    {name:"puttu",age:21},
    {name:"faf",age:41},
    {name: "rishi",age:15}

];

const adult = users.filter(user => user.age>=18);
console.log(adult);

const names  = adult.map(user => user.name);
console.log(names);


