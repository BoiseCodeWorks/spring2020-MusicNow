import store from "../store.js";
import Song from "../Models/Song.js";

class MusicService {
  setActive(id) {
    // debugger;
    let song = store.State.songs.find(s => s.id == id);
    store.commit("activeSong", song);
  }
  /**
   * Takes in a search query and retrieves the results that will be put in the store
   * @param {string} query
   */
  getMusicByQuery(query) {
    //NOTE You will not need to change this method
    let url = "https://itunes.apple.com/search?callback=?&term=" + query;
    // @ts-ignore
    $.getJSON(url)
      .then(res => {
        let results = res.results.map(rawData => new Song(rawData));
        store.commit("songs", results);
      })
      .catch(err => {
        throw new Error(err);
      });
  }
}

const service = new MusicService();
export default service;
