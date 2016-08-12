import Dexie from 'dexie';

const DB = new Dexie("Player");

DB.version(1).stores({ history: "++id, played, *track_id, trackName, total, cover, artistName, albumName, stream_url, plays" });

DB.open().catch(function (e) {
    console.error("Open failed: " + e);
});

export default DB;
