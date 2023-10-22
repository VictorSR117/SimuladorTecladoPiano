const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];
let audio = new Audio("src/tunes/a.wav");

const playTune = key => {
  audio.src = `src/tunes/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => { clickedKey.classList.remove("active"); }, 150);
};

pianoKeys.forEach(key => {
  key.addEventListener("click", () => playTune(key.dataset.key));
  mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", element => (mapedKeys.includes(element.key)) ? playTune(element.key) : 0);

const handleVolume = element => audio.volume = element.target.value;
const showHideKeys = () => pianoKeys.forEach(key => key.classList.toggle("hide"));

volumeSlider.addEventListener("input", handleVolume);
keysCheck.addEventListener("click", showHideKeys);