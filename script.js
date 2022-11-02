document.getElementById("btn-1").addEventListener("click", btn1Func);
function btn1Func() {
    let dividened = +prompt("Enter a dividened:");
    let divisor = +prompt("Enter a divisor:");
    let remainder = dividened % divisor;
    let msg = `${dividened} divided by ${divisor} gives a remainder of ${remainder}.`;
    alert(msg);
}

document.getElementById("btn-2").addEventListener("click", btn2Func);
function btn2Func() {
    let colorOfBanana = prompt("Enter a color:");
    let friendsName = prompt("Enter a friends name:");
    let msg = `My friend ${friendsName} likes ${colorOfBanana} bananas.`;
    alert(msg);
}

document.getElementById("btn-3").addEventListener("click", btn3Func);
function btn3Func() {
    let schoolSubject = prompt("Enter a school subject:");
    let colorOfNoun = prompt("Enter a color:");
    let teachersNoun = prompt("Enter a noun:");
    let msg = `In ${schoolSubject} class, our teacher was wearing a ${colorOfNoun} ${teachersNoun}.`;
    alert(msg);
}

document.getElementById("btn-4").addEventListener("click", btn4Func);
function btn4Func() {
    let fahrenheit = +prompt("Enter temperature in degrees Fahrenheit:");
    let msg = `${fahrenheit} degrees Fahrenheit is ${(fahrenheit - 32) * 5 / 9} Celsius`;
    alert(msg);
}

document.getElementById("btn-5").addEventListener("click", btn5Func);
function btn5Func() {
    let bill = +prompt("Enter starting bill amount($):");
    let tip = +prompt("Enter percentage to tip(%):");
    let tipOnly = bill/tip;
    let total = bill + bill/tip;
    let msg = `$${bill} bill plus a tip of $${tipOnly} = $${total}.`;
    alert(msg);
}

document.getElementById("btn-6").addEventListener("click", btn6Func);
function btn6Func() {
    let x1 = +prompt("Enter x-coordinate of 1st point:");
    let y1 = +prompt("Enter y-coordinate of 1st point:");
    let x2 = +prompt("Enter x-coordinate of 2nd point:");
    let y2 = +prompt("Enter y-coordinate of 2nd point:");
    let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    let msg = `Distance between the two points is ${distance}.`;
    alert(msg);
}

document.getElementById("btn-7").addEventListener("click", btn7Func);
function btn7Func() {
    let  = prompt(":");
    let  = prompt(":");
    let  = prompt(":");
    let msg = ``;
    alert(msg)
}

document.getElementById("btn-8").addEventListener("click", btn8Func);
function btn8Func() {
    let  = prompt(":");
    let  = prompt(":");
    let  = prompt(":");
    let msg = ``;
    alert(msg);
}