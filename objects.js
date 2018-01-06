function removeFromPlaylist(playlist, artistName) {
  delete artistName.playlist;
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}