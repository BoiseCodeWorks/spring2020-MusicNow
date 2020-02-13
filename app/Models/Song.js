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

  get previewTemplate() {
    return `
    <div class="col-12">
    <div class="media">
    <img src="${this.albumArtSmall}" class="mr-3" alt="...">
    <div class="media-body">
        <h5 class="mt-0">${this.artist} - ${this.title}</h5>
    </div>
    </div>
    </div>
    `;
  }
}
