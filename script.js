// Get references to HTML elements
const submitButton = document.getElementById('submitButton');

// Add event listeners to the submit button
submitButton.addEventListener('click', function() {
    // Gather the selected information
    const selectedFurniture = document.querySelector('.furniture:checked');
    const selectedColor = document.querySelector('#color1').value;
    const selectedMaterial = document.querySelector('#material1').value;
    const selectedSize = document.querySelector('#size1').value;

    // Process the purchase (you can implement this part later using a backend server)
    console.log('Selected furniture:', selectedFurniture.value);
    console.log('Selected color:', selectedColor);
    console.log('Selected material:', selectedMaterial);
    console.log('Selected size:', selectedSize);
});
