const bars = document.querySelector(".bar"),
close = document.querySelector(".close"),
menu = document.querySelector(".menu");

bars.addEventListener("click", () => {
    menu.classList.add("active");
    gsap.from(".menu", {
        opacity: 0,
        duration: .3
    })

    gsap.from(".menu ul", {
        opacity: 0,
        x: -300
    })
});

close.addEventListener("click", () => {
    menu.classList.remove("active")
});

function animateContent(selector) {
    selector.forEach((selector) => {
        gsap.to(selector, {
            y: 30,
            duration: 0.1,
            opacity: 1,
            delay: 0.2,
            stagger: 0.2,
            ease: "power2.out",
        });
    });
}

function scrollTirggerAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 80%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            y: 0,
            duration: 1,
            opacity: 1,
        });
    })
}

function swipeAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 100%",
            scrub: 3,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            x: 0,
            duration: 1,
            opacity:1,
        });
    });
}

function galleryAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 100%",
            end: "bottom 100%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            y: 0,
            opacity: 1,
            duration: 1,
        });
    });
}




animateContent([".home .content h5, .home .content h1, .home .content p, .home .content .search"]);

scrollTirggerAnimation(".travel", [".travel .box1", ".travel .box2", ".travel .box3"]);

scrollTirggerAnimation(".feedback .container", [".feedback .label", ".feedback .heading", ".feedback .paragraph"]);

scrollTirggerAnimation(".article", [".article .label", ".article .heading"]);

swipeAnimation(".destinations", [".destinations .heading", ".destinations .content"])

swipeAnimation(".article", [".article .latest-article", ".article .box1", ".article .box2", ".article .box3", ".article .box4"])

galleryAnimation(".destinations .gallery", [".destinations .gallery .box1",".destinations .gallery .box2",".destinations .gallery .box3",".destinations .gallery .box4",".destinations .gallery .box5"])

galleryAnimation(".featured .gallery", [".featured .gallery .box1",".featured .gallery .box2",".featured .gallery .box3",".featured .gallery .box4"])

galleryAnimation(".feedback .voices", [".feedback .voices .box1",".feedback .voices .box2",".feedback .voices .box3",".feedback .voices .box4",".feedback .voices .box5",".feedback .voices .box6"])


function getUserLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
      alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Pass these coordinates to the map function to center the map
  initializeMap(latitude, longitude);
}

function showError(error) {
  switch (error.code) {
      case error.PERMISSION_DENIED:
          alert("User denied the request for Geolocation.");
          break;
      case error.POSITION_UNAVAILABLE:
          alert("Location information is unavailable.");
          break;
      case error.TIMEOUT:
          alert("The request to get user location timed out.");
          break;
      case error.UNKNOWN_ERROR:
          alert("An unknown error occurred.");
          break;
  }
}

// Call this function when the page loads or when the user clicks a button to get their location
getUserLocation();
 
function initializeMap(lat, lon) {
  // Create a map centered on the user's location
  const map = L.map('map').setView([lat, lon], 13);

  // Set up the OpenStreetMap layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Add a marker for the user's location
  const userMarker = L.marker([lat, lon]).addTo(map)
      .bindPopup("<b>You are here!</b>").openPopup();

  // Call a function to add other markers
  addMarkers(map);
}

function addMarkers(map) {
  // Example of adding other markers
  const locations = [
      {
          name: "Location 1",
          lat: 40.7128,
          lon: -74.0060,
          guide: "Detailed guide for Location 1",
          photos: "Photos for Location 1",
          reviews: "User reviews for Location 1"
      },
      {
          name: "Location 2",
          lat: 34.0522,
          lon: -118.2437,
          guide: "Detailed guide for Location 2",
          photos: "Photos for Location 2",
          reviews: "User reviews for Location 2"
      }
  ];

  locations.forEach(location => {
      const marker = L.marker([location.lat, location.lon]).addTo(map);
      const popupContent = `
          <h3>${location.name}</h3>
          <p>${location.guide}</p>
          <p>${location.photos}</p>
          <p>${location.reviews}</p>
      `;
      marker.bindPopup(popupContent);
  });
}

document.querySelector('.menu-toggle').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.menu').classList.toggle('active');
});


function openModal() {
    document.getElementById("jaipurModal").style.display = "block";
}

function closeModal() {
    document.getElementById("jaipurModal").style.display = "none";
}



function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}