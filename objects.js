function removeFromPlaylist(playlist, artistName) {
  delete artistName;
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}