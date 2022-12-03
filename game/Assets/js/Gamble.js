
let balance = localStorage.getItem("balance");
if (balance === null) {
  balance = 10000;
}
document.getElementById("balance").innerHTML += balance.toLocaleString();
function gamble() {
  let amount = parseInt(document.getElementById("gamble").value);
  if (amount > 5e5) {
    document.getElementById("response").innerHTML = "Max gamble is 500,000";
  }
  if (balance < amount) {
    document.getElementById("response").innerHTML = "Insuffiecent Funds";
  }
  if (amount < 1000) {
    document.getElementById("response").innerHTML = "Min gamble is 1,000";
  }

  const userlostandwin = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const botlostandwin = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  var useroutcome = userlostandwin.sort((a, b) => 0.5 - Math.random());
  var botoutcome = botlostandwin.sort((a, b) => 0.5 - Math.random());
  useroutcome = useroutcome[0]
  botoutcome = botoutcome[0]
  var userstatus = "";

  if (useroutcome < botoutcome) {
    userstatus = "Lost";
  } else if (useroutcome > botoutcome) {
    userstatus = "Won";
  } else if (useroutcome === botoutcome) {
    userstatus = "Tie";
  }

  if (userstatus === "Won") {
    balance += amount;
    const won = amount;
    document.getElementById("response").innerHTML = `You <b>won</b> $${won.toLocaleString()} Money`;
  } else if (userstatus === "Lost") {
    balance -= amount;
    document.getElementById("response").innerHTML = `You <b>lost</b> $${amount.toLocaleString()} Money\n`;
  } else {
    document.getElementById("response").innerHTML = `Tie!`;
  }
  document.getElementById("balance").innerHTML = `Current Balance: ${balance.toLocaleString()}`;

  
}
