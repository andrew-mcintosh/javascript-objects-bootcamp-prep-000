function removeFromPlaylist(playlist, artistName, songTitle) {
  delete playlist.artistName.songTitle;
return Object.assign({}, playlist, {[artistName]: songTitle});
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}