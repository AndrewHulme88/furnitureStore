// Get references to HTML elements
const submitButton = document.getElementById('submitButton');
const categorySelect = document.getElementById('category');

// Add event listeners to the category select element
categorySelect.addEventListener('change', function() {
    const selectedCategory = this.value;
    const furnitureCategories = document.querySelectorAll('.furniture-category');

    // Hide all furniture categories
    furnitureCategories.forEach(function(category) {
        category.style.display = 'none';
    });

    // Show the selected furniture category
    const selectedCategoryElement = document.getElementById(selectedCategory);
    selectedCategoryElement.style.display = 'block';
});

// Add event listeners to the submit button
submitButton.addEventListener('click', function() {
    // Gather the selected information for all the selected furniture pieces
    const selectedFurniture = [];
    const selectedColors = [];
    const selectedMaterials = [];
    const selectedSizes = [];

    const furniturePieces = document.querySelectorAll('.furniture:checked');
    furniturePieces.forEach(function(piece) {
        const furnitureCategory = piece.parentElement.parentElement.id;
        const furnitureName = piece.nextElementSibling.textContent;
        const selectedColor = piece.parentElement.querySelector('#color' + furnitureCategory).value;
        const selectedMaterial = piece.parentElement.querySelector('#material' + furnitureCategory).value;
        const selectedSize = piece.parentElement.querySelector('#size' + furnitureCategory).value;

        selectedFurniture.push(furnitureName);
        selectedColors.push(selectedColor);
        selectedMaterials.push(selectedMaterial);
        selectedSizes.push(selectedSize);
    });

    // Process the purchase (you can implement this part later using a backend server)
    console.log('Selected furniture:', selectedFurniture);
    console.log('Selected colors:', selectedColors);
    console.log('Selected materials:', selectedMaterials);
    console.log('Selected sizes:', selectedSizes);
});
