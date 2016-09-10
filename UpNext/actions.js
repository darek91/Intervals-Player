export function fillNextUp(tracks) {
  return {
    type: "FILL_NEXT_UP",
    payload: tracks
  }
}

export function clearNextUp() {
  return {
    type: 'CLEAR_NEXT_UP',
    payload: [],
  }
}

export function trackPlayed(track) {
  return {
    type: "TRACK_PLAYED",
    payload: track
  }
}
