
var playlist = { Blue: "Mean"};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist (obj, key){
  delete obj.[key];
  return obj;
}
