export function loadHistory() {
  return {
    type: "LOAD_HISTORY",
    payload: []
  }
}

export function updateHistory(track) {
  return {
    type: 'UPDATE_HISTORY',
    payload: track
  }
}

export function getMostPlayed() {
  return {
    type: "GET_MOST_PLAYED",
    payload: []
  }
}
