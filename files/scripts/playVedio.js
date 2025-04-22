const video = document.querySelector('.vedio-section-vedio');
const playButton = document.getElementById('playButton');

video.addEventListener('pause', () => {
  playButton.style.display = 'block';
});

video.addEventListener('play', () => {
  playButton.style.display = 'none';
});

playButton.addEventListener('click', () => {
  video.play();
});

video.addEventListener('click', () => {
  if (!video.paused) {
    video.pause();
  }
});

window.addEventListener('load', () => {
  if (video.paused) {
    playButton.style.display = 'block';
  }
});
