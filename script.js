let videoContainers = document.querySelectorAll('.video-container');
let currentVideoIndex = 0;

// function to play the next video
function playNextVideo() {
  // pause the current video
  videoContainers[currentVideoIndex].querySelector('video').pause();
  videoContainers[currentVideoIndex].classList.remove('active');
  
  // move to the next video
  currentVideoIndex = (currentVideoIndex + 1) % videoContainers.length;
  
  // play the next video
  videoContainers[currentVideoIndex].classList.add('active');
  videoContainers[currentVideoIndex].querySelector('video').play();
}

// play the first video initially
videoContainers[currentVideoIndex].classList.add('active');
videoContainers[currentVideoIndex].querySelector('video').play();

// set an interval to play the next video after a certain duration
setInterval(playNextVideo, 10000); // play next video every 10 seconds