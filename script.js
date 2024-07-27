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


document.addEventListener("DOMContentLoaded", function() {
  const dynamicGreeting = document.getElementById("dynamicGreeting");
  const hours = new Date().getHours();
  let greeting = "Welcome to Children In Chains";

  if (hours < 12) {
    greeting = "Good Morning! Welcome to Children In Chains";
  } else if (hours < 18) {
    greeting = "Good Afternoon! Welcome to Children In Chains";
  } else {
    greeting = "Good Evening! Welcome to Children In Chains";
  }

  dynamicGreeting.textContent = greeting;
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Intersection Observer for Animation
document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.id === "l1" || entry.target.id === "l3") {
          entry.target.classList.add("slide-in-left");
        } else {
          entry.target.classList.add("slide-in-right");
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const targets = document.querySelectorAll("#l1, #l2, #l3, #l4");
  targets.forEach(target => observer.observe(target));
});