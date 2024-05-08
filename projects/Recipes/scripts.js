const apiKey = '70ff26f189f54239b375b16245a82618';
let currentPage = 1;

function searchRecipes() {
    const query = document.getElementById('searchInput').value;
    const cuisine = document.getElementById('cuisineSelect').value;
    const url = `https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${query}&cuisine=${cuisine}&number=9&offset=${(currentPage - 1) * 9}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayRecipes(data.results);
            displayPagination(data.totalResults);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayRecipes(recipes) {
    const recipesContainer = document.getElementById('recipesContainer');
    recipesContainer.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <div class="recipe-image" style="background-image: url(${recipe.image});"></div>
            <div class="recipe-info">
                <h2>${recipe.title}</h2>
                <p>Ready in ${recipe.readyInMinutes} minutes</p>
                <button class="view-details-button" onclick="showRecipeDetails('${recipe.id}')">View Details</button>
            </div>
        `;
        recipesContainer.appendChild(recipeCard);
    });
}

function displayPagination(totalResults) {
    const totalPages = Math.ceil(totalResults / 9);
    const paginationContainer = document.getElementById('paginationContainer');
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.addEventListener('click', () => {
            currentPage = i;
            searchRecipes();
            updateActiveButton();
        });
        if (i === currentPage) {
            button.classList.add('active');
        }
        paginationContainer.appendChild(button);
    }
}

function updateActiveButton() {
    const buttons = document.querySelectorAll('.pagination button');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (parseInt(button.innerText) === currentPage) {
            button.classList.add('active');
        }
    });
}

function showRecipeDetails(recipeId) {
    const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const recipeDetails = document.getElementById('recipeDetails');
            recipeDetails.innerHTML = `
                <h2>${data.title}</h2>
                <img src="${data.image}" alt="${data.title}">
                <p>Ready in ${data.readyInMinutes} minutes</p>
                <h3>Ingredients</h3>
                <ul>
                    ${data.extendedIngredients.map(ingredient => `<li>${ingredient.original}</li>`).join('')}
                </ul>
                <h3>Instructions</h3>
                <p>${data.instructions || 'Instructions not available.'}</p>
            `;
            openModal();
        })
        .catch(error => {
            console.error('Error fetching recipe details:', error);
        });
}

function openModal() {
    document.getElementById('recipeModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('recipeModal').style.display = 'none';
}
