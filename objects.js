function removeFromPlaylist(playlist, artistName) {
  delete playlist.({ Kanye: "Gold Digger" }, "Kanye");
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}