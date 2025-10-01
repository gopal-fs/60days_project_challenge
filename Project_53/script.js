const images = [
    './d1.png',
    './d2.png',
    './d3.png',
    './d4.png',
    './d5.png',
    './d6.png'
  ];

  function rollDice() {
    let diceImg = document.getElementById("dice");
    let resultText = document.getElementById("result");

    let i = 0;
    let rollInterval = setInterval(() => {
        let num=Math.floor(Math.random() * 6)
      diceImg.src = images[num];
      resultText.textContent=`You rolled a ${num+1}`
      i++;
      if (i > 15) {  
        clearInterval(rollInterval);
        let final = Math.floor(Math.random() * 6) + 1;
        diceImg.src = images[final - 1];
        resultText.textContent = "You rolled a " + final;
      }
    }, 100); 
  }
