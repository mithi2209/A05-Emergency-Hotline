// Heart Count

let heartCountNumber = 0;
 
const totalCountDisplay = document.getElementById("heart-count");
const heartBtn = document.querySelectorAll(".heart-icon-btn");

        for (const number of heartBtn){
            number.addEventListener('click', function(e){
                e.preventDefault();

                   heartCountNumber++;

                   totalCountDisplay.innerText = heartCountNumber;

            });
         
        }
    