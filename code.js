/*function getRandomNumber(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}
  
function checkGuess(guess, target) 
{
    let correctPlace = 0;
    let correctNumber = 0;
  
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === target[i]) {
        correctPlace++;
      } else if (target.includes(guess[i])) {
        correctNumber++;
      }
    }
  
    return [correctPlace, correctNumber];
}
  
function playGame() 
{
    const target = [];
  
    for (let i = 0; i < 6; i++) {
      target.push(getRandomNumber(1, 9));
    }
  
    const guessInput = document.getElementById("guessInput");
    const userGuess = guessInput.value;
  
    if (userGuess.length !== 6 || isNaN(userGuess)) {
      document.getElementById("feedback").innerText = "Hibás formátum. Kérlek, add meg a 6 jegyű számot.";
      return;
    }
  
    const guessArray = userGuess.split("").map(num => parseInt(num));
  
    const result = checkGuess(guessArray, target);
  
    document.getElementById("feedback").innerText = `Tipp: ${guessArray.join(", ")}. Helyes helyen: ${result[0]}, Helyes számok: ${result[1]}`;
  
    if (result[0] === 6) {
      document.getElementById("feedback").innerText += "\nGratulálok, eltaláltad a számokat!";
    }
}*/
  
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkGuess(guess, target) {
  let correctPlace = 0;
  let correctNumber = 0;

  for (let i = 0; i < guess.length; i++) {
      const box = document.getElementById(`box${i}`);
      const numberSpan = box.querySelector('span'); // Keresd meg a span elemet a négyzetben
      if (guess[i] === target[i]) {
          correctPlace++;
          box.style.backgroundColor = "green"; // helyes helyen levő számok zöldre változnak
      } else if (target.includes(guess[i])) {
          correctNumber++;
          box.style.backgroundColor = "yellow"; // helyes számok, de nem helyes helyen sárgára változnak
      } else {
          box.style.backgroundColor = "red"; // helytelen számok pirosra változnak
      }
      numberSpan.textContent = guess[i]; // Állítsd be a szöveget a span elemen belül
  }

  return [correctPlace, correctNumber];
}

function createNumberBoxes() {
  const numberBoxes = document.getElementById("numberBoxes");
  numberBoxes.innerHTML = ""; // Ürítsük ki az esetleges előző dobozokat

  for (let i = 0; i < 6; i++) {
      const box = document.createElement("div");
      box.classList.add("numberBox");
      box.id = `box${i}`;
      const numberSpan = document.createElement("span");
      numberSpan.textContent = "-"; // Alapértelmezett érték, amíg a felhasználó nem tippel
      box.appendChild(numberSpan);
      numberBoxes.appendChild(box);
  }
}

function playGame() {
  createNumberBoxes(); // Új dobozokat hozunk létre minden játék kezdetén

  const target = [];

  for (let i = 0; i < 6; i++) {
      target.push(getRandomNumber(1, 9)); // 1 és 9 közötti számokat generálunk, hogy ne legyen 0 kezdetű szám
  }

  const guessInput = document.getElementById("guessInput");
  const userGuess = guessInput.value;

  if (userGuess.length !== 6 || isNaN(userGuess)) {
      document.getElementById("feedback").innerText = "Hibás formátum. Kérlek, add meg a 6 jegyű számot.";
      return;
  }

  const guessArray = userGuess.split("").map(num => parseInt(num));

  const result = checkGuess(guessArray, target);

  document.getElementById("feedback").innerText = `Tipp: ${guessArray.join(", ")}. Helyes helyen: ${result[0]}, Helyes számok: ${result[1]}`;

  if (result[0] === 6) {
      document.getElementById("feedback").innerText += "\nGratulálok, eltaláltad a számokat!";
  }
}

const guessInput = document.getElementById("guessInput");

guessInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    playGame(); // Ha az Enter gombot lenyomták, hívjuk meg a playGame függvényt
  }
});