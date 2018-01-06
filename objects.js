function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName;
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}