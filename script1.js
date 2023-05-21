const quoteText = document.querySelector(".quote"),
  quoteBtn = document.querySelector(".features button"),
  authorName = document.querySelector(".author .name"),
  soundBtn = document.querySelector(".sound"),
  copyBtn = document.querySelector(".copy");

function randomQuote() {
  quoteBtn.classList.add("Loading");
  quoteBtn.innerText = "Loading Quote...";
  fetch("https://api.quotable.io/random").then(response => response.json()).then(result => {  
  quoteText.innerText = result.content,
    authorName.innerText = result.author,
    quoteBtn.innerText = "New Quote",
    quoteBtn.classList.remove("Loading");
    
  });
}
soundBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
  });
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteText.innerText);
});
quoteBtn.addEventListener("click", randomQuote);