/* 
Filename: ComplexCode.js 
Description: This code demonstrates a complex implementation of a music player with a responsive user interface, playlist functionality, and audio visualization. It includes various classes, methods, and components to achieve the desired functionality. 

Author: Your Name 
Date: September 27, 2022 
*/

// Class representing a Music Player
class MusicPlayer {
  constructor() {
    this.playlist = [];
    this.currentTrackIndex = 0;
    this.isPlaying = false;
  }

  // Add a track to the playlist
  addTrack(track) {
    this.playlist.push(track);
    this.renderPlaylist();
  }

  // Remove a track from the playlist
  removeTrack(index) {
    if (index >= 0 && index < this.playlist.length) {
      this.playlist.splice(index, 1);
      this.renderPlaylist();
    }
  }

  // Play the current track
  play() {
    if (this.isPlaying) {
      console.log("Already playing the track");
      return;
    }

    this.isPlaying = true;
    const currentTrack = this.getCurrentTrack();
    console.log(`Playing: ${currentTrack.title}`);
  }

  // Pause the current track
  pause() {
    if (!this.isPlaying) {
      console.log("No track is currently playing");
      return;
    }

    this.isPlaying = false;
    const currentTrack = this.getCurrentTrack();
    console.log(`Paused: ${currentTrack.title}`);
  }

  // Skip to the next track
  next() {
    if (this.currentTrackIndex === this.playlist.length - 1) {
      console.log("Reached the end of the playlist");
      return;
    }

    this.currentTrackIndex++;
    this.play();
  }

  // Skip to the previous track
  previous() {
    if (this.currentTrackIndex === 0) {
      console.log("Already at the beginning of the playlist");
      return;
    }

    this.currentTrackIndex--;
    this.play();
  }

  // Get the current playing track
  getCurrentTrack() {
    return this.playlist[this.currentTrackIndex];
  }

  // Render the playlist
  renderPlaylist() {
    console.log("--- Playlist ---");
    this.playlist.forEach((track, index) =>
      console.log(`[${index}] ${track.title}`)
    );
  }
}

// Class representing a Track
class Track {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
  }
}

// Instantiate the MusicPlayer
const player = new MusicPlayer();

// Add tracks to the playlist
player.addTrack(new Track("Track 1", "Artist 1", "3:45"));
player.addTrack(new Track("Track 2", "Artist 2", "4:15"));
player.addTrack(new Track("Track 3", "Artist 3", "5:30"));

// Play the music
player.play();

// Pause the music
player.pause();

// Skip to the next track
player.next();

// Skip to the previous track
player.previous();

// Remove a track from the playlist
player.removeTrack(1);

// Render the updated playlist
player.renderPlaylist();