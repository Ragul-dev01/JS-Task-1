//Section 1: Variables(1-8)
//1
var a = 10; 
a = 15;
console.log("variable redeclaration",15);

//2
let b = 20
//  let b = 30 
console.log("Uncaught SyntaxError: Identifier 'b' has already been declared") 

//3
const c =  50;
console.log(c)

//4
const x = 10;
// x = 20;
console.log("Uncaught SyntaxError: Identifier 'x' has already been declared")

//5
var p = 5;
var p = 10;
console.log("variable declared with p and can also be redeclared",p);

//6
let q = 25;
q = q + 10;
console.log("the value of q is ", q);

//7
const r = 7;
console.log(r + 3);

//8
console.log("let,var, const will be the correct keyword")

//Section:2 Console methods
//9
console.log("console method will print normal method");

//10
console.warn("warning method will show the warning message")

//11
console.error("error method will show the error ")
//12

console.log("clear method will be clear all the statements printed in the console")

//Section 3: Data types

//13

let abc="hello";
console.log("the type of abc will be ", typeof(abc))

//14

console.log("the type of b will be", typeof(b));

//15
 let ccc=false;
 console.log("the type of ccc will be ", typeof(ccc))

 //16
 let d;
 console.log("the type of d will be ", typeof(d))

 //17
 console.log("the type pf null will  be ",typeof(null))

//18
let stringnumber="25"
console.log(typeof(Number(stringnumber)))

//19

let fruitarray = ["apple","mango","mango"]
console.log("array of 3 fruits", fruitarray)

//20

let arr = ["a","b","c"];
console.log(arr[1]);

//21

let arr2 = ["x","y","z"];
console.log(arr2[arr2.length-1]);
//22
console.log("accessing first element", arr2[0])
//23
console.log("accessing array length", arr2.length)

//24
fruitarray.push("banana")
console.log("after adding new elememts into the array",fruitarray)

//25
let objrahul={
name: "rahul",
age:25
}
console.log(objrahul.name);

//26
let obj = {name:"Naveen"};
console.log(obj.name);


//27

let objFruit = {
  fruits: ["apple","banana"]
};
console.log(objFruit.fruits[1]);
//28
console.log(objFruit.fruits[objFruit.fruits.length - 1]);

//29
console.log(5+3);
//30
console.log(10 % 3);
//31
console.log(2 ** 3);
//32
console.log(10 / 2);

//33
let aa = 5;
aa++;
console.log(aa);

//34
let bb = 5;
let cc = bb++;
console.log(bb, cc);

//35
let xx = 5;
let yy = ++xx;
console.log(xx, yy);

//36
let m = 3;
let n = m--;
console.log(m, n);

//37

console.log(5 == "5");

//38
console.log(5 === "5");

//39

console.log(true && false || true);

//40

5 > 3 ? console.log("Yes") : console.log("No");
