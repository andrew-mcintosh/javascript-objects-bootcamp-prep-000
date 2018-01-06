function removeFromPlaylist(playlist, artistName) {
  delete {[artistName]: songTitle};
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}