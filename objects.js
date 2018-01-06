function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}

// var playlist = {'artistName': 'songTitle'};
 var playlist = {
   'taylor': 'good song',
   'Kanye': 'Gold Digger'
 }

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
