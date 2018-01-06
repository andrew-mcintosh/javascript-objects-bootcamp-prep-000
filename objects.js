function removeFromPlaylist(playlist, artistName, songTitle) {
  delete playlist.artistName.songTitle;
return playlist;
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}