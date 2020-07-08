/* eslint-disable import/extensions */
/* eslint-disable new-cap */
import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');
const button = document.querySelector('button[id="play"]');
const button2 = document.querySelector('button[id="mute"]');

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

button.onclick = () => (video.paused ? player.Play() : player.Pause());
button2.onclick = () => (video.muted ? player.UnMute() : player.Mute());
