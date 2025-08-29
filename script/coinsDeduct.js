// Coins Deduction

// get call button

const callButton = document.querySelectorAll('.call-btn');

// for every button

for (const button of callButton){
    button.addEventListener('click',function(e){

      e.preventDefault();

      // get the parent

      const child = button.parentElement; 
      const parent = child.parentElement; 
      const grandparent = parent.parentElement; 
      const greatGrandparent = grandparent.parentElement; 

      console.log("parentsss",greatGrandparent);

      // get service name and number

      const service = greatGrandparent.querySelector(".service-name").innerText;
      const number = greatGrandparent.querySelector(".service-hotline").innerText;

      // Alert

      alert(`📞 Calling ${service} at ${number}...`);
    })
}
