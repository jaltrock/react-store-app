import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar, Footer } from './components/layout';
import Container from './components/Container';
import ProductList from './pages/ProductList';

function App() {
  return (
    <>
      <Navbar />
      <ProductList />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




// arrays and objects

/************* arrays **************/

// create
let myArray1 = ["blue", "green", 152, 26, true]
console.log("myArray1: ", myArray1);

//read
let a = myArray1[2]
console.log("a = " + a);

//array destructuring
let [b, c, d] = myArray1;
console.log("b = " + b);
console.log("c = " + c);
console.log("d = " + d);

// spread operator
let myArray2 = ["one", ...myArray1, "two", "three"];
console.log(myArray2);

let myArray3 = [...myArray1, ...myArray2];
console.log(myArray3);

//for loop
for (let i = 0; i < myArray1.length; i++) {
  console.log("myArray1[" + i + "]=" + myArray1[i])
}

// map function
function fn1(x) {
  if (Number.isInteger(x)) {
    return x;
  }
  return 0;
}

let myArray4 = myArray1.map((x, idx) => {
  console.log("x=" + x + " - idx=" + idx)
  return x
});
console.log("myArray4:", myArray4);


let myArray5 = myArray1.map(fn1);
console.log("myArray5:", myArray5);

// delete array elements using splice and filter functions
let myArray6 = [...myArray1];
myArray6.splice(2, 1);
console.log("myArray6:", myArray6);


function filterFunction(x) {
  if (Number.isInteger(x)) {
    return x;
  }
}
let myArray7 = myArray1.filter(filterFunction);
console.log("myArray7:", myArray7);


/**************** JavaScript Objects *********************/
let myObject1 = {firstName: "John", lastName: "Smith", age: 30, address: "New York"}
console.log("myObject1: ", myObject1);

let l1 = "test1"
let l2 = "test2"
let l3 = "test3"

let myObject2 = {l1, l2, l3}
console.log("myObject2: ", myObject2);

//read
let f = myObject1.firstName;
console.log("first name = " + f);

// object destructuring
let {firstName, lastName} = myObject1;
console.log("first name = " + firstName + " - last name = " + lastName);

let {v, w} = myObject1;
console.log("v = " + v + " - w = " + w);

// spread operator
let myObject3 = {...myObject1, firstName: "Bill", email: "bill@gmail.com"}
console.log(myObject3)


