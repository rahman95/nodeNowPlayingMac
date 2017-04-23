var osascript = require('node-osascript');
var spotify = require('./spotify.js');


exec_osap(spotify.getSong.value);


function exec_osap(script){
  osascript.execute(script, function(err, result, raw){
    if (err) return console.error(err)
    console.log(result)
  });
}
