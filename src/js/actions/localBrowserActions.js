export function loadGoogleDrive() {
  try {
    gapi.auth.authorize({
      'client_id': CLIENT_ID,
      'scope': SCOPES.join(' '),
      'immediate': true
    }, function (authResult) {

        var authorizeDiv = document.getElementById('authorize-div');
        if (authResult && !authResult.error) {
          // Hide auth UI, then load client library.
          authorizeDiv.style.display = 'none';
          loadDriveApi();
        } else {
          // Show auth UI, allowing the user to initiate authorization by
          // clicking authorize button.
          authorizeDiv.style.display = 'inline';
        }
      });

  } catch(e) {
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
