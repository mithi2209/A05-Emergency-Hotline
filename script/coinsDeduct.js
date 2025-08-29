
// Coins Deduction

// get coin number
const coinDisplay = document.getElementById("total-coins");
const coinDisplay2 = document.getElementById("total-coins2");

// store coin and convert it to number
let availableCoin = Number(coinDisplay.innerText);
let availableCoin2 = Number(coinDisplay2.innerText);

// get call button

const callButton = document.querySelectorAll(".call-btn");

// for every button

for (const button of callButton) {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    // if coins less than 200
    if (availableCoin < 20) {
      alert("❌Insufficient coins to make a call ,at least need 20 coins!");
      return;
    }

    if (availableCoin2 < 20) {
      alert("❌Insufficient coins to make a call ,at least need 20 coins!");
      return;
    }

    // get the parent

    const child = button.parentElement;
    const parent = child.parentElement;
    const grandparent = parent.parentElement;
    const greatGrandparent = grandparent.parentElement;

    //   console.log("parentsss",greatGrandparent);

    // get service name and number

    const service = greatGrandparent.querySelector(".service-name").innerText;
    const number = greatGrandparent.querySelector(".service-hotline").innerText;

    // Alert

    alert(`📞 Calling ${service} at ${number}...`);

    addCallHistory(service, number);

    

    //  Deduct coins

    availableCoin = availableCoin - 20;
    coinDisplay.innerText = availableCoin;

    availableCoin2 = availableCoin2 - 20;
    coinDisplay2.innerText = availableCoin2;
  });
}




