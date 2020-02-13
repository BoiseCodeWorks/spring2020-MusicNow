export default class Song {
  constructor(data) {
    this.artist = data.artist || data.artistName;
    this.album = data.album || data.collectionName;
    this.title = data.title || data.trackName;
    this.preview = data.preview || data.previewUrl;
    this.price = data.price || data.trackPrice;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.albumArtSmall = this.albumArt.replace(/300x300/g, "90x90");
    this.albumArtLarge = this.albumArt.replace(/300x300/g, "500x500");
  }

  get Template() {
    return this.title;
  }
}
