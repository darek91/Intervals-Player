// const fs = require('fs');

export function loadPath(path) {
  let files = [];
  try {
    fs.readDir(path, function(dir) {
      // es6
      for(let filePath of dir) {
        files.push(filePath);
      }
    });
  } catch(e) {

    return {
      type: "LOAD_LOCAL_FILES_FAILED",
      payload: {
        message: "This feature is supported only on desktop app.",
        path,
        tracks: []
      }
    }
  }

  return {
    type: "LOAD_LOCAL_FILES",
    payload: {
      message: "",
      path,
      tracks: files
    }
  }
}
