/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
class AutoPlay {
  run(player) {
    if (!player.muted) {
      player.muted = true;
    }
    player.play();
  }
}
export default AutoPlay;
