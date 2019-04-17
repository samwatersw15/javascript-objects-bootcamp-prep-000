var playlist = new Object ( {FrankSinatra:'My Way'} )
function updatePlaylist(playlist, artistName, songTitle) {
 return Object.assign(playlist, {artistName:songTitle})
}