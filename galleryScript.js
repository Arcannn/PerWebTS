// Lightbox functionality
// Get the modal
var modal = document.getElementById("image-modal");

// Get the image and insert it inside the modal
var images = document.querySelectorAll('.masonry-item img');
var modalImg = document.getElementById("modal-image");

// Add click event to each image
images.forEach(function(image) {
    image.onclick = function() {
        modal.classList.add("show"); // Add the show class for fade-in effect
        modalImg.src = this.src; // Set the source of the modal image
        modal.style.display = "block"; // Ensure the modal is displayed
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.classList.remove("show"); // Remove the show class to fade out
    setTimeout(function() {
        modal.style.display = "none"; // Hide the modal after fading out
    }, 500); // Match with the fade-out duration
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove("show"); // Remove the show class to fade out
        setTimeout(function() {
            modal.style.display = "none"; // Hide the modal after fading out
        }, 500); // Match with the fade-out duration
    }
}

