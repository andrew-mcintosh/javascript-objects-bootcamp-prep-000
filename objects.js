function removeFromPlaylist(playlist, artistName) {
  delete artistName.playlist;
  return playlist;
}
