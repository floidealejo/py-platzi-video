/* eslint-disable lines-between-class-members */
/* eslint-disable class-methods-use-this */
class MediaPlayer {
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this._initPlugins();
  }
  _initPlugins() {
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }
  Play() {
    this.media.play();
  }
  Pause() {
    this.media.pause();
  }
  Mute() {
    this.media.muted = true;
  }
  UnMute() {
    this.media.muted = false;
  }
}
export default MediaPlayer;
