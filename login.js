


let slideIndex = 1;
showSlides(slideIndex);

// Function to move to the next/previous slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to set the current slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to display slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Automatic slideshow
function autoSlide() {
  plusSlides(1);
  setTimeout(autoSlide, 4000); // Change slide every 4 seconds
}

// Start the automatic slideshow
autoSlide();


//....modal...//


// Get the modal
var modal2 = document.getElementById('myModal');

// Get the button that opens and closes the modal
var btn = document.getElementById('myBtn');
document.getElementById('modalTitle').textContent = 'My work at a glance';


// Get the <span> element that closes the modal (if you have one)
var span = document.getElementsByClassName('close')[0];

// Function to open the modal and change the button text
var openModal = function() {
    modal2.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling on the body
    btn.textContent = 'Close'; // Change button text to "Close Modal"
    btn.onclick = closeModal; // Change the onclick event to the close function
};

// Function to close the modal and change the button text
var closeModal = function() {
    modal2.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling on the body
    btn.textContent = 'My work at a glance'; // Change button text to "Open Modal"
    btn.onclick = openModal; // Change the onclick event to the open function
};

// Initially set the button to open the modal
btn.onclick = openModal;

// If the <span> element exists, add an event listener to close the modal
if (span) {
    span.onclick = function() {
        closeModal(); // Close the modal when the <span> (X) is clicked
    };
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal.style.display = 'none';
    }
}


// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le modal et les boutons de fermeture
    var aboutMeModal = document.getElementById('AboutMeModal');
    var closeButtons = document.getElementsByClassName('closeAboutMe');

    // Fonction pour ouvrir le modal
    function openAboutMeModal() {
        aboutMeModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Empêcher le défilement du corps
    }

    // Fonction pour fermer le modal
    function closeAboutMeModal() {
        aboutMeModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Réactiver le défilement du corps
    }

    // Ouvrir le modal quand on clique sur le bouton
    var aboutMeBtn = document.getElementById('AboutMeBtn');
    aboutMeBtn.addEventListener('click', function() {
        openAboutMeModal();
    });

    // Ouvrir le modal depuis la navigation (quand l'URL contient "?modal=aboutme")
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('modal') === 'aboutme') {
        openAboutMeModal(); // Ouvrir automatiquement le modal si l'URL contient le bon paramètre
    }

    // Ajouter les événements pour fermer le modal
    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', closeAboutMeModal);
    }

    // Fermer le modal si l'utilisateur clique à l'extérieur
    window.onclick = function(event) {
        if (event.target === aboutMeModal) {
            closeAboutMeModal();
        }
    }
});


// AboutMe Modal

document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Pas de preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    console.log('Name:', name, 'Email:', email, 'Message:', message);
});



 

// Variables pour gérer le zoom et le défilement
let zooming = false; // Pour savoir si le zoom est en cours
let scrollBlocked = false; // Pour savoir si le défilement est bloqué

// Fonction pour commencer le zoom
function startZooming(image) {
    const maxZoom = 1.5; // Valeur maximale du zoom
    let zoomLevel = 1; // Niveau de zoom de départ

    zooming = true; // Indiquer que le zoom est en cours
    scrollBlocked = true; // Bloquer le défilement

    // Fonction pour augmenter progressivement le zoom
    const zoomInterval = setInterval(() => {
        if (zoomLevel < maxZoom) {
            zoomLevel += 0.02; // Augmenter le niveau de zoom progressivement
            image.style.transform = `scale(${zoomLevel})`;
        } else {
            clearInterval(zoomInterval); // Arrêter le zoom quand le maximum est atteint
            zooming = false; // Le zoom est terminé
            scrollBlocked = false; // Autoriser le défilement à nouveau
        }
    }, 100); // Ajustez la vitesse du zoom
}

// Fonction pour gérer le défilement
function handleScroll(event) {
    if (scrollBlocked) {
        event.preventDefault(); // Empêcher le défilement tant que le zoom n'est pas terminé
    }
}

// Ajout d'un écouteur pour empêcher le défilement
window.addEventListener('wheel', handleScroll, { passive: false });

// Utilisation de l'Intersection Observer pour détecter quand l'image entre dans le viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !zooming) {
            const image = entry.target;
            startZooming(image); // Démarrer le zoom lorsque l'image est visible
        }
    });
}, { threshold: 1 }); // Déclenchement à 50% de visibilité

// Ciblez l'image pour l'observation
const img = document.querySelector('.img-fluid');
observer.observe(img);

document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'hidden') {
    document.body.style.filter = 'blur(10px)';
  } else {
    document.body.style.filter = 'none';
  }
});



