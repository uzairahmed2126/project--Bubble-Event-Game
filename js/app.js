document.addEventListener("DOMContentLoaded", () => {
  let timer = 60;
  let hit = 0;
  let score = 0;
  const timerClass = document.querySelector(".timer");
  const hitClass = document.querySelector(".hit");
  const scoreClass = document.querySelector(".score");
  const boxContainer = document.getElementById("box-bottom-container");
  function handleClick(e) {
    e.preventDefault();
    let target = e.target;
    let num = +target.textContent;
    if (+hit === num) {
      scoreClass.style.background = "";
      hitClass.classList.remove("anim");
      increaseScore();
      makeBubble();
      getNewHit();
    } else {
      hitClass.classList.add("anim");
      // console.log(e.target.textContent);
      scoreClass.style.background = "red";
      decreaseScore();
    }
  }

  function decreaseScore() {
    if (score > 0) {
      score -= 10;
      scoreClass.textContent = score;
    }
  }
  function increaseScore() {
    score += 10;
    scoreClass.textContent = score;
  }
  function getNewHit() {
    let rn = Math.floor(Math.random() * 10);
    hitClass.textContent = rn;
    hit = rn;
  }

  function makeBubble() {
    let store = "";
    for (let i = 1; i <= 90; i++) {
      let random = Math.floor(Math.random(i) * 10);
      store += `<div class="bubble">${random}</div>`;
      boxContainer.innerHTML = store;
    }
  }

  const runTimer = setInterval(() => {
    if (timer > 0) {
      timerClass.textContent = timer--;
    } else {
      timerClass.textContent = "Time up!";
      timerClass.style.background = "red";
      timerClass.style.fontSize = "20px";
      timerClass.style.textAlign = "center";
      boxContainer.innerHTML = `<div id="game-over"><h1>Game Over</h1><h2 style="text-align: center;">Your Score is : ${score}</h2></div>`;
      clearInterval(runTimer);
    }
    if (timer < 3) {
      // timerClass.style.color = "red";
      timerClass.classList.add("timer-anim");
      // timerClass.classList.add("timer");
      // timerClass.style.fontSize = "40px";
    }
    if (timerClass.textContent === "Time up!") {
      timerClass.style.fontSize = "20px";
      timerClass.style.color = "";
      timerClass.classList.remove("timer-anim");
    }
  }, 1000);
  makeBubble();
  getNewHit();
  runTimer;
  boxContainer.addEventListener("click", handleClick);
});
