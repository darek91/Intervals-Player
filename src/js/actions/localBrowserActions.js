const fs = require('fs');
const path = require('path');

export function loadPath(path) {
  let files = [];
  console.info(fs);
  try {
    fs.readdirSync(path).filter(function(file) {
      var item = {};
      item.path = path.join(pathDir, file);
      item.name = file;
      item.isDir = fs.statSync(path.join(pathDir, file)).isDirectory();

      files.push(item);

      return;
    });

  } catch(e) {
    console.info(e);
    return {
      type: "LOAD_LOCAL_FILES_FAILED",
      payload: {
        message: `This feature is supported only on desktop app. ${e}`,
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
