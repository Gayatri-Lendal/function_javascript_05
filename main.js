console.log("Functions");

console.log("Hello !!");
console.log("how are you?");
//code x

console.log("Hello !!");
console.log("how are you?");

//code x

console.log("Hello !!");
console.log("how are you?");

console.log("----------");

//FUNCTION
//we want to update anything inour common code
//we will define a function

//it makes sense to put code this thing only once
//but use it wherever we want

function use_it_here(){
  //function kya kaam karta hain
  ////function logic
  
console.log("Hello !!!");
console.log("how are you?");
}


//function call
use_it_here();
//code y
use_it_here();
//code y
use_it_here();

function modified_use_it_here(name){
  console.log("Hello " + name + "!!");
  console.log("how are you " + name + "?");
}

var website_user = "Gayatri";
modified_use_it_here(website_user);

website_user = "Radha";
modified_use_it_here(website_user);

function greet(){
  console.log("hey whatsup");
  console.log("good morning");
}

greet();
//code xx
greet();
//code xx

function modified_greet(name){
  console.log(name + " hey whatsup !");
  console.log("good morning " + name);
}

var website_visiter = "Radha Rani";
modified_greet(website_visiter);
website_visiter= "KRISHNA";
modified_greet(website_visiter); 

function sum(a,b){
  console.log("Addition of a & b is: ",a+b);
}
sum(3,4);
sum(5,8);

function subtract(c,d){
  console.log("Subtraction of c & d is: ",c - d);
}
subtract(8,6);
subtract(5-7); 

//default parameters 
function multiply(a=0 ,b=0){
  console.log("Multiplication of a & b is: ",a*b);
}

multiply();
multiply(3,8);

//return type
function return_sum(a=0,b=0){
  var c=a+b;
  return c;
}

var output= return_sum(4,8);
console.log(output);


//example
function return_multiply(a = 0, b = 0) {
  var c = a*b;
  return c;
}

var output = return_multiply(4,9);
console.log(output);
var output2 = return_multiply(70,10);
console.log(output2);

//no return type
var no_return_output = sum(3,4);
console.log("no return output: ",no_return_output);
