var osascript = require('node-osascript');

var script = 'tell application "Spotify" to (get artist of current track) & " - " & (get name of current track)';

osascript.execute(script, function(err, result, raw){
  if (err) return console.error(err)
  console.log(result)
});
