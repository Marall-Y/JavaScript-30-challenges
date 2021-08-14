window.addEventListener("keydown", function (event) {
  const audio = document.querySelector(`audio[data-key = '${event.keyCode}' ]`);
  const key = document.querySelector(`.key[data-key = '${event.keyCode}' ]`);
  const keys = document.querySelectorAll(".key");

  function removeTransition(event) {
    if (event.propertyName !== "transform") {
      return;
    }
    console.log(event.propertyName);
    this.classList.remove("playing");
  }

  if (!audio) {
    return;
  }

  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");

  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );
});
