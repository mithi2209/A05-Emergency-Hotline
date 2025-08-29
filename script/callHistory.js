// get history div and clear button

const callHistory = document.getElementById("call-history");
const clearBtn = document.getElementById("historyClear-btn");

// add call history

function addCallHistory(service, number) {
  const historyItem = document.createElement("div");
  historyItem.classList.add("history-item", "rounded-lg", "my-4","p-4","flex", "justify-between", "items-center","bg-[#FAFAFA]");

  // styles
  // historyItem.style.display = "flex";
  // historyItem.style. justifyContent = "space-between";
  // historyItem.style.alignItems = "center";
  // historyItem.style.backgroundColor = "#FAFAFA";
  // historyItem.style.padding = "10px";
  



  // time

  const time = new Date().toLocaleTimeString();

  historyItem.innerHTML = `
    <div>
        <h3 class="font-inter , text-lg , font-semibold " >${service}</h3>
        <h4 class="text-[#5C5C5C] , text-lg , font-medium">${number}</h4>
    </div>
    
    <div>
        <p class="text-[#111] , text-lg , font-medium">${time}</p>
    </div>

    
    `;

  callHistory.appendChild(historyItem);
}


// clear history

clearBtn.addEventListener('click', function(){
  callHistory.innerHTML = "";
})