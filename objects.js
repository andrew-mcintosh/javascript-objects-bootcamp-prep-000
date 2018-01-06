function removeFromPlaylist(playlist, artistName, songTitle) {
  delete playlist.songTitle;
return playlist;
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}