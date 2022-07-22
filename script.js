const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 8500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = "Wdech!";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "wstrzymaj";

    setTimeout(() => {
      text.innerText = "Wydech!";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);
