function removeFromPlaylist(playlist, artistName, songTitle) {
  delete artistName;
return playlist;
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}