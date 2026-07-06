const buttons = document.querySelectorAll('#buttons .btn');
const stopBtn = document.querySelector('.stop');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => playSound(btn));
});

stopBtn.addEventListener('click', stopAllSounds);

function playSound(btn) {
  const audio = btn.querySelector('audio');
  if (!audio) return;

  audio.currentTime = 0;
  audio.play().catch(() => {
    console.warn(`Could not play: ${audio.src}`);
  });

  btn.classList.add('is-active');
  audio.onended = () => btn.classList.remove('is-active');
}

function stopAllSounds() {
  document.querySelectorAll('#buttons audio').forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
  buttons.forEach((btn) => btn.classList.remove('is-active'));
}