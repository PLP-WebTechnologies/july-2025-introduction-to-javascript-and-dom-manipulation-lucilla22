// 🚀 JavaScript Fundamentals & DOM Manipulation Assignment
// Part 1: Basics
// ====================
let age = 20; // variable declaration
let ageMessage = document.getElementById("ageMessage");

if (age >= 18) {
  ageMessage.innerText = "You are an adult ✅";
} else {
  ageMessage.innerText = "You are a minor ❌";
}

// ====================
// Part 2: Functions
// ====================

// Function 1: Calculate sum of two numbers
function calculateSum(a, b) {
  return a + b;
}

// Function 2: Greet user
function greetUser(name) {
  return "Hello, " + name + "! Welcome 🎉";
}

// Event listener for sum calculation
document.getElementById("sumBtn").addEventListener("click", function() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  
  let result = calculateSum(num1, num2);
  document.getElementById("sumResult").innerText = "Sum = " + result;
});

// Example of greetUser function usage
console.log(greetUser("Lucilla"));

// ====================
// Part 3: Loops
// ====================

// For loop example: countdown
document.getElementById("countdownBtn").addEventListener("click", function() {
  let countdownList = document.getElementById("countdownList");
  countdownList.innerHTML = ""; // clear previous list

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.innerText = "Countdown: " + i;
    countdownList.appendChild(li);
  }
});

// While loop example
let i = 1;
while (i <= 3) {
  console.log("Looping... step " + i);
  i++;
}

// ====================
// Part 4: DOM Manipulation
// ====================

// Change text on button click
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("dynamicText").innerText = "🎉 Text has been changed dynamically!";
});

// Toggle dark mode
document.getElementById("toggleThemeBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});
    
