'use babel';
import {Enum} from 'enumify';

class Spotify extends Enum {}

// Thieved 😎 and adapted slightly from https://github.com/jaebradley/atomify/blob/826ee23b841b75bd74b06eae0b7264fb91310a43/lib/data/SpotifyCommands.js
Spotify.initEnum({
  getSong: {
    value: 'tell application "Spotify" to name of current track as string'
  },
  getAlbum: {
    value: 'tell application "Spotify" to album of current track as string'
  },
  getArtist: {
    value: 'tell application "Spotify" to artist of current track as string'
  },
  getState: {
    value: 'tell application "Spotify" to player state as string'
  },
  getPosition: {
    value: `tell application "Spotify"
          set pos to player position
          set nM to (round (pos / 60) rounding down) as text
          if length of ((round (pos mod 60) rounding down) as text) is greater than 1 then
              set nS to (round (pos mod 60) rounding down) as text
          else
              set nS to ("0" & (round (pos mod 60) rounding down)) as text
          end if
          set nowAt to nM as text & ":" & nS as text
          end tell
          return nowAt`
  },
  getDuration: {
    value: `tell application "Spotify"
          set durSec to (duration of current track / 1000) as text
          set tM to (round (durSec / 60) rounding down) as text
          if length of ((durSec mod 60 div 1) as text) is greater than 1 then
              set tS to (durSec mod 60 div 1) as text
          else
              set tS to ("0" & (durSec mod 60 div 1)) as text
          end if
          set myTime to tM as text & ":" & tS as text
          end tell
          return myTime`
  }
});

module.exports = Spotify;
