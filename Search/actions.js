import Axios from "axios";

// TODO Move to API
const client_id = "3c56d20ccfabaa5f003c458ee78dffb7";

export function search(query) {
  return {
      type: "SEARCH_CHANGE",
      payload: Axios
        .get(`https://api.soundcloud.com/tracks?client_id=${client_id}&q=${query}`)
        .then(response => {
          let { data } = response;
          // TODO Adjust data

          data = data.map((track, i) => {
            const cover = track.artwork_url ? track.artwork_url.replace(/large/, 't500x500') : track.user.avatar_url;
            const artistName = track.user.username ? track.user.username : "Unknown";
            const stream_url = track.stream_url + `?client_id=${client_id}`;

            return {
              track_id: track.id,
              trackName: track.title,
              total: track.duration,
              cover,
              artistName,
              albumName: '',
              stream_url
            };
          })

          return data;
        })
    }
}
