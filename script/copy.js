// get copy btn
const copyButtons = document.querySelectorAll(".copy-btn");




for (const copyBtn of copyButtons){
    copyBtn.addEventListener('click',function(e){
      e.preventDefault();

      // get the parent

      const child = copyBtn.parentElement;
      const parent = child.parentElement;
      const grandparent = parent.parentElement;
      const greatGrandparent = grandparent.parentElement;
      //   console.log(greatestGrandparent);

      //   get hotline number
      const hotlineNumber =
        grandparent.querySelector(".service-hotline").innerText;

      // temporary textarea
      const tempInput = document.createElement("textarea");
      tempInput.value = hotlineNumber;
      document.body.appendChild(tempInput);

      // text select
      tempInput.select();

      // text copy
      const success = document.execCommand("copy");

      // remove temp text area
      document.body.removeChild(tempInput);

      if (success) {
        alert(`Number ${hotlineNumber} Copied`);
        const countText = document.body.querySelector(".copy-count ");
        countText.innerText = parseInt(countText.innerText) + 1;

        const countText2 = document.body.querySelector(".copy-count2");
        countText2.innerText = parseInt(countText2.innerText) + 1;
      } else {
        alert("Failed to Copy!");
      }

      //   adding to history

      // get time
      const time = new Date().toLocaleTimeString();
    //   get history div
    const historyDiv = document.getElementById("call-history");

    const historyItems = document.createElement("div");
    historyItems.classList.add(
      "history-item",
      "rounded-lg",
      "my-4",
      "p-4",
      "flex",
      "justify-between",
      "items-center",
      "bg-[#FAFAFA]"
    );
    historyItems.innerHTML =`<strong>${hotlineNumber}</strong> Called at : ${time}`;
    historyDiv.appendChild(historyItems);
    });
}