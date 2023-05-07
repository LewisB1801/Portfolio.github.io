document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");
    var hero = document.querySelector(".hero");
    var heroHeight = hero.offsetHeight;
  
    if (window.scrollY === 0) {
      header.classList.add("transparent");
    }
  
    window.addEventListener("scroll", function() {
      if (window.scrollY > 0) {
        header.classList.remove("transparent");
        document.querySelectorAll("header a").forEach(function(link) {
          link.style.color = "#1d1d1d";
        });
      } else {
        header.classList.add("transparent");
        document.querySelectorAll("header a").forEach(function(link) {
          link.style.color = "#f1f1f1";
        });
      }
    });
  });

  // Get all the links in the navigation menu
const navLinks = document.querySelectorAll('.site-nav a');

// Add an event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove the "active" class from all the links
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Add the "active" class only to the clicked link
    this.classList.add('active');
  });
});

const heroImage = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  const imagePosition = heroImage.getBoundingClientRect().top;
  const offset = imagePosition - scrollPosition;
  heroImage.style.backgroundPositionY = `${offset * 0.7}px`;
});

$(document).ready(function() {
    var $slider = $(".slider");
    var $slides = $slider.find(".slide");
    var slideCount = $slides.length;
    var currentIndex = 0;
    var dragStart, dragEnd, dragDistance;
  
    // Clone the first slide and append it to the end for infinite looping
    $slides.eq(0).clone().appendTo($slider);
  
    // Handle mouse drag events
    $slider.on("mousedown touchstart", function(event) {
      event.preventDefault();
      if (event.type === "mousedown") {
        dragStart = event.pageX;
        $(document).on("mousemove", handleDrag);
      } else {
        dragStart = event.originalEvent.touches[0].pageX;
        $(document).on("touchmove", handleDrag);
      }
      $slider.css("cursor", "grabbing");
    });
  
    $(document).on("mouseup touchend", function(event) {
      $slider.css("cursor", "grab");
      $(document).off("mousemove touchmove", handleDrag);
      handleSwipe();
    });
  
    function handleDrag(event) {
      event.preventDefault();
      if (event.type === "mousemove") {
        dragEnd = event.pageX;
      } else {
        dragEnd = event.originalEvent.touches[0].pageX;
      }
      dragDistance = dragEnd - dragStart;
      $slider.css("transform", "translateX(" + (-currentIndex * 100 - dragDistance) + "px)");
    }
  
    function handleSwipe() {
      if (dragDistance > 50 && currentIndex > 0) {
        currentIndex--;
      } else if (dragDistance < -50 && currentIndex < slideCount - 1) {
        currentIndex++;
      }
      $slider.css("transition", "transform 0.3s ease-in-out");
      $slider.css("transform", "translateX(" + (-currentIndex * 100) + "%)");
      setTimeout(function() {
        $slider.css("transition", "");
      }, 300);
    }
  
    // Auto scroll to the next slide every 5 seconds
    setInterval(function() {
      currentIndex++;
      $slider.css("transition", "transform 0.3s ease-in-out");
      $slider.css("transform", "translateX(" + (-currentIndex * 100) + "%)");
      setTimeout(function() {
        if (currentIndex === slideCount) {
          currentIndex = 0;
          $slider.css("transform", "translateX(" + (-currentIndex * 100) + "%)");
        }
        $slider.css("transition", "");
      }, 300);
    }, 5000);
  });
  
  
  
  




  
  