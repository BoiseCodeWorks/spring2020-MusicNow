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

    MusicService.getMusicByQuery("ccr");
  }
}
