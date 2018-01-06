function removeFromPlaylist(artistName, songTitle) {
  delete artistName.songTitle;
return Object.assign({}, playlist, {[artistName]: songTitle});
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}