// let sound;
let play = false; //music is playing or not playing
let songs = []; //i chose like the first ten "one minute songs" that came up on youtube and it's all like weird music im sorry
let currentSong = 1;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

//load songs 1-10
function preload() {
  for (let i = 1; i < 11; i++) {
    songs[i] = loadSound("SONG_" + i + ".mp3");
  }
}

function draw() {
  background(220);
  rectMode(CENTER);

  //pause button
  rect(125, 200, 100);
  rect(115, 200, 10, 50);
  rect(135, 200, 10, 50);

  //play button
  rect(275, 200, 100);
  triangle(265, 175, 265, 225, 290, 200);

  //next song button
  rect(200, 300, 250, 80);
  textAlign(CENTER);
  textSize(40);
  text("NEXT SONG", 200, 310);

  //console to show which song is currently playing!
  console.log("Now playing: SONG_" + currentSong);

  //show current song on top of canvas
  textSize(20);
  text("NOW PLAYING: SONG_" + currentSong, 200, 100);
}

//PART 2
// function mouseClicked() {
//   if (mouseX > 75 && mouseX < 175 && mouseY > 150 && mouseY < 250) {
//     sound.pause();
//   } else if (mouseX > 225 && mouseX < 325 && mouseY > 150 && mouseY < 250) {
//     sound.play();
//   }
// }

//PART 3
function mouseClicked() {
  // Pause button area
  if (mouseX > 75 && mouseX < 175 && mouseY > 150 && mouseY < 250) {
    songs[currentSong].pause();
    play = false;
  }
  // Play button area
  else if (mouseX > 225 && mouseX < 325 && mouseY > 150 && mouseY < 250) {
    if (!play) {
      songs[currentSong].play(); // play current song
      songs[currentSong].loop(); //loop current song if finished
      play = true;
    }
    //NEXT BUTTON area
  } else if (mouseX > 75 && mouseX < 325 && mouseY > 260 && mouseY < 340) {
    songs[currentSong].stop();
    play = false;

    //move on to the next song in array
    currentSong++;

    //reset array if all songs are skipped
    if (currentSong >= 11) {
      currentSong = 1;
    }

    //playing next song & loop upon finish
    songs[currentSong].play();
    songs[currentSong].loop();
    play = true;
  }
}

// PART 2
// function mouseClicked() {
//   if (play) {
//     sound.pause(); // stop playing
//     play = false;
//   } else {
//     sound.play(); // start playing
//     play = true;
//   }
// }

// Part 2:

// Comment out the code to play and pause by clicking anywhere on the canvas.
// Create two rectangles on the screen for play and pause.
// You can design these any way you want, as long as there is a distinction between the two buttons
//  It should be clear which one is play and which is pause.
// Add functionality to only play and pause when the mouse clicks the respective button.
// Hint: how do we detect if a the mouse is hovering over a rectangle?

// Part 3:

// Create an array to hold all your sound files.
// Create a global variable called currentSong this will be the variable that keeps track of which song index is actively playing.
// Add at least 10 different sound files to your array.
// Add a third rectangle button that says "next song".
// Add functionality that detects when the "next song" button is pressed.
// Add functionality that changes the song to the next in the array when the "next song" button is pressed. You should only be using the song array and the currentSong index to play the song. Your code will look something like allsongs[currentSong].play()
// Once it gets to the end of the array, it should play the first song again. You should not be using % here.
// Hint: you need to stop the song that is currently playing, increment the currentSong index, and play the next song.
