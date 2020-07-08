/* eslint-disable lines-between-class-members */
/* eslint-disable class-methods-use-this */
class MediaPlayer {
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this._initPlugins();
  }
  _initPlugins() {
    const player = {
      play: () => this.Play(),
      pause: () => this.Pause(),
      media: this.media,
      get muted() {
        return this.media.muted;
      },
      set muted(value) {
        this.media.muted = value;
      },
    };
    this.plugins.forEach((plugin) => {
      plugin.run(player);
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
