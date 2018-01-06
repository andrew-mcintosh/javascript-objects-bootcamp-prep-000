function removeFromPlaylist(playlist, artistName) {
  delete ({ Kanye: "Gold Digger" }, "Kanye");
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}