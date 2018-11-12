function sayHello(){
  console.log("Hello, World!");
}

function sayHello2(){
  alert("Hello, World!")
}

function sayHello3(){
  var p=document.getElementById("hello");
  p.innerHTML="Hello, World!"
}

function sayHello4(){
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  alert("Hello, " + myName + "!");
}
