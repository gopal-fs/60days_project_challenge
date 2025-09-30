const quotes = [
    "Success is not final, failure is not fatal. It is the courage to continue that counts.",
    "The best way to predict the future is to invent it.",
    "Do not wait to strike till the iron is hot, but make it hot by striking.",
    "Stay hungry, stay foolish.",
    "Happiness depends upon ourselves."
  ];

  const quoteEl = document.getElementById("quote");
  const inputEl = document.getElementById("input");
  const timeEl = document.getElementById("time");
  const wpmEl = document.getElementById("wpm");
  const accuracyEl = document.getElementById("accuracy");
  const startBtn = document.getElementById("startBtn");

  let currentQuote = "";
  let timer = 0;
  let interval = null;
  let correctChars = 0;

  function startTest() {
    // Pick random quote
    currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteEl.innerHTML = currentQuote.split("").map(char => `<span>${char}</span>`).join("");
    inputEl.value = "";
    inputEl.disabled = false;
    inputEl.focus();
    timer = 0;
    correctChars = 0;
    timeEl.textContent = "0";
    wpmEl.textContent = "0";
    accuracyEl.textContent = "0";
    clearInterval(interval);
    interval = setInterval(() => {
      timer++;
      timeEl.textContent = timer;
    }, 1000);
  }

  function endTest() {
    clearInterval(interval);
    inputEl.disabled = true;
    const wordsTyped = inputEl.value.trim().split(" ").length;
    const wpm = Math.round((wordsTyped / timer) * 60) || 0;
    wpmEl.textContent = wpm;
    const accuracy = Math.round((correctChars / currentQuote.length) * 100) || 0;
    accuracyEl.textContent = accuracy;
  }

  inputEl.addEventListener("input", () => {
    const quoteSpans = quoteEl.querySelectorAll("span");
    const value = inputEl.value.split("");
    correctChars = 0;

    quoteSpans.forEach((charSpan, index) => {
      const char = value[index];
      if (char == null) {
        charSpan.classList.remove("correct", "wrong");
      } else if (char === charSpan.innerText) {
        charSpan.classList.add("correct");
        charSpan.classList.remove("wrong");
        correctChars++;
      } else {
        charSpan.classList.add("wrong");
        charSpan.classList.remove("correct");
      }
    });

    if (value.length === currentQuote.length) {
      endTest();
    }
  });

  startBtn.addEventListener("click", startTest);