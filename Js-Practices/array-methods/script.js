let method = [];
let output;
alert(
  "Please type some elements and click on Add button to add them to the array, then manipulate it clicking on the buttons. Enjoy!"
);
add = () => {
  let input = document.querySelector("#input");
  let inputValue = input.value;
  method.push(inputValue);
  console.log(method);
  output = document.querySelector(".output");
  output.innerHTML = method;
  input.value = "";
};

sort = () => {
  output = document.querySelector(".output");
  output.innerHTML = method.sort();
  alert(
    "The sort() sorts the elements of an array in place and returns the reference to the same array."
  );
};
reverse = () => {
  output = document.querySelector(".output");
  output.innerHTML = method.reverse();
  alert(
    "The reverse() method reverses the order of the elements in an array. The reverse() method overwrites the original array."
  );
};

removeLast = () => {
  output = document.querySelector(".output");
  output.innerHTML = method.pop();
  alert(
    "The pop() method removes the last element from an array and returns that value to the caller. If you call pop() on an empty array, it returns undefined "
  );
};

removeFirst = () => {
  output = document.querySelector(".output");
  output.innerHTML = method.shift();
  alert(
    "The shift() method removes the element at the zeroth index and shifts the values at consecutive indexes down, then returns the removed value. If the length property is 0, undefined is returned"
  );
};

removeAll = () => {
  output = document.querySelector(".output");
  output.innerHTML = method = [];
  alert(
    "This button will remove all the elements in the array and set it to an empty array."
  );
};
mix = () => {
   

  for (let i = 0; i < method.length; i++) {
    let random = Math.floor(Math.random() * method.length);
    let temp = method[i];
    method[i] = method[random];
    method[random] = temp;
    output = document.querySelector(".output");
    output.innerHTML = method;
  }
   alert("This button will randomize the order of the elements in the array");
};
