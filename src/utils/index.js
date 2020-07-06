/* eslint-disable class-methods-use-this */
/* eslint-disable new-cap */
const video = document.querySelector('video');
const button = document.querySelector('button');
class mediaPlayer {
  Play() {
    video.play();
  }

  Pause() {
    video.pause();
  }
}
const player = new mediaPlayer();

button.onclick = () => (video.paused ? player.Play() : player.Pause());
