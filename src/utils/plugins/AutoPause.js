class AutoPause {
  constructor() {
    this.threshold = 0.5;
    this.handleInterserction = this.handleInterserction.bind(this);
  }

  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleInterserction, {
      threshold: this.threshold,
    });
    observer.observe(this.player.media);
  }

  handleInterserction(entries) {
    const entry = entries[0];
    const isVisible = entry.intersectionRatio >= this.threshold;
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}
export default AutoPause;
