//your JS code here. If required.
const buttons = document.querySelectorAll('#buttons .btn');
const stopBtn = document.querySelector('.stop');

const audioMap = new Map();

buttons.forEach((btn) => {
  const src = btn.getAttribute('data-sound');
  const audio = new Audio(src);
  audioMap.set(btn, audio);

  btn.addEventListener('click', () => playSound(btn));
});

stopBtn.addEventListener('click', stopAllSounds);

function playSound(btn) {
  const audio = audioMap.get(btn);
  audio.currentTime = 0;
  audio.play().catch(() => {
    console.warn(`Could not play: ${audio.src}`);
  });

  btn.classList.add('is-active');
  audio.onended = () => btn.classList.remove('is-active');
}

function stopAllSounds() {
  audioMap.forEach((audio, btn) => {
    audio.pause();
    audio.currentTime = 0;
    btn.classList.remove('is-active');
  });
}