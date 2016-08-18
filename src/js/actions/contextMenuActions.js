import DB from '../data/DB';

export function toggleTrackContextMenu(open, track) {
  return {
    type: open ? "OPEN_TRACK_CONTEXT_MENU" : "CLOSE_TRACK_CONTEXT_MENU",
    payload: {
      open: !!open,
      context: track || null
    }
  }
}
