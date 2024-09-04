


// carousel

let slideIndex = 0;
showSlides();

// Fonction pour afficher les diapositives et faire défiler automatiquement
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Cache toutes les diapositives
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;  // Réinitialise à la première diapositive si on dépasse le nombre total
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");  // Retire la classe active des points
    }

    slides[slideIndex - 1].style.display = "block";  // Affiche la diapositive courante
    dots[slideIndex - 1].className += " active";  // Active le point correspondant

    setTimeout(showSlides, 4000);  // Change d'image toutes les 4 secondes
}



//....modal...//


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens and closes the modal
var btn = document.getElementById('myBtn');
document.getElementById('modalTitle').textContent = 'My work at a glance';


// Get the <span> element that closes the modal (if you have one)
var span = document.getElementsByClassName('close')[0];

// Function to open the modal and change the button text
var openModal = function() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling on the body
    btn.textContent = 'Close'; // Change button text to "Close Modal"
    btn.onclick = closeModal; // Change the onclick event to the close function
};

// Function to close the modal and change the button text
var closeModal = function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling on the body
    btn.textContent = 'My work at a glance'; // Change button text to "Open Modal"
    btn.onclick = openModal; // Change the onclick event to the open function
};

// Initially set the button to open the modal
btn.onclick = openModal;

// If you have a <span> element to close the modal, wire up its click event
if (span) {
    span.onclick = closeModal;
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal.style.display = 'none';
    }
}


// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the About Me modal
    var aboutMeModal = document.getElementById('AboutMeModal');

    // Get the button that opens the modal
    var aboutMeBtn = document.getElementById('AboutMeBtn');

    // Set the modal title
    var aboutMeModalTitle = document.getElementById('AboutMeModalTitle');
    if (aboutMeModalTitle) {
        aboutMeModalTitle.textContent = "About Me";
    }

    // Function to open the modal
    function openAboutMeModal() {
        aboutMeModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling on the body
    }

    // Function to close the modal
    function closeAboutMeModal() {
        aboutMeModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling on the body
    }

    // Set the button to open the modal
    aboutMeBtn.onclick = openAboutMeModal;

    // Get all elements with the class 'closeAboutMe' and add a click event listener to each one
    var closeButtons = document.getElementsByClassName('closeAboutMe');
    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', closeAboutMeModal);
    }

    // Close the modal if the user clicks outside of it
    window.onclick = function(event) {
        if (event.target == aboutMeModal) {
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



    // AboutMe link

document.addEventListener('DOMContentLoaded', function() {
    var aboutModal = document.getElementById('AboutMeModal');
    var aboutModalLink = document.getElementById('AboutMeModalLink');

    aboutModalLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        aboutModal.style.display = 'block'; // Display the modal
    });

    // Add your existing modal close logic here
});
