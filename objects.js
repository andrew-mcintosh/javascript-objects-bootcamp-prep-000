function removeFromPlaylist(playlist, artistName, songTitle) {
  delete playlist.artistName;
playlist;
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}