import DB from '../data/DB';

export function loadHistory() {
  return {
    type: "LOAD_HISTORY",
    payload: DB.history.orderBy("played")
      .reverse()
      .limit(15)
      .toArray()
  }
}

export function updateHistory(track) {
  return {
    type: 'UPDATE_HISTORY',
    payload: track,
  }
}

export function getMostPlayed() {
  return {
    type: "GET_MOST_PLAYED",
    payload: DB.history
      .toArray()
      .then(result => {
        let occurances = [];

        const tracks = result.filter(track => {
          let inArray = occurances.indexOf(track.track_id) > -1;

          if(!inArray) occurances.push(track.track_id);

          return !inArray;
        });

        return tracks;
      })
  }
}
