function myFunc() {
    var yesButton = document.getElementById('yesbutton');
    var noButton = document.getElementById('actualbutton');

    // Get the bounding rectangles of both buttons
    var yesRect = yesButton.getBoundingClientRect();
    var noRect = noButton.getBoundingClientRect();

    // Calculate safe boundaries for the NO button
    var maxX = window.innerWidth - noRect.width;
    var maxY = window.innerHeight - noRect.height;

    var newX, newY;
    var overlap = true;

    while (overlap) {
        // Generate random new positions
        newX = Math.floor(Math.random() * maxX);
        newY = Math.floor(Math.random() * maxY);

        // Check if new position overlaps with YES button
        overlap = !(newX > yesRect.right || newX + noRect.width < yesRect.left || 
                    newY > yesRect.bottom || newY + noRect.height < yesRect.top);
    }

    // Set new position for NO button
    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';
}

function fadeOut() {
    // Select all divs with the class 'centered-container'
    var divs = document.querySelectorAll('.centered-container');

    // Apply a fade-out effect to each div
    divs.forEach(function(div) {
        div.style.transition = 'opacity 1s';
        div.style.opacity = '0';
        setTimeout(function() {
            div.style.display = 'none';
        }, 1000); // This matches the duration of the fade effect
    });

    // Select the image with the id 'fadeInImage'
    var image = document.getElementById('fadeInImage');
    var text = document.getElementById('fadeInText')

    // Apply a fade-in effect to the image
    image.style.transition = 'opacity 2s';
    image.style.opacity = '1';
    image.style.zIndex = '1'; // Ensure the image is visible above other elements

    text.style.transition = 'opacity 2s';
    text.style.opacity = '1';
    text.style.zIndex = '1'; // Ensure the image is visible above other elements
}




window.onload = function() {

    var divs = document.querySelectorAll('.centered-container');





    setTimeout(function() {
        document.getElementById('fullscreenImage').style.display = 'none';
    }, 2500); // 2000 milliseconds = 2 seconds

    setTimeout(function() {
        document.getElementById('whitePlane').style.display = 'none';
    }, 2500);
};