import MusicService from "../Services/MusicService.js";
import store from "../store.js";

//Private
function _draw() {
  let songs = store.State.songs;
  console.log(songs);
}

//Public
export default class MusicController {
  constructor() {
    store.subscribe("songs", _draw);
  }
  getMusicByQuery(event) {
    event.preventDefault();
    let formData = event.target;
    MusicService.getMusicByQuery(formData.query.value);

    formData.reset();
  }
}
