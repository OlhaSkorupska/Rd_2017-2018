function showCalculateMessage(calculateMessage) {
    let msgElem = document.getElementById('error');
    msgElem.style = 'color: #d8339c';
    msgElem.innerHTML = calculateMessage;
}

function cakes(recipe, available) {
    let arrayOfIngredients = [];
    for (let ingridients in recipe) {
        if (recipe.hasOwnProperty(ingridients)) {
            let recipeIngridient = recipe[ingridients] || 0;
            let availableIngridient = available[ingridients] || 0;
            if (recipeIngridient > 0) {
                arrayOfIngredients.push(Math.floor(availableIngridient / recipeIngridient));
            }
        }
    }
    let countOfCookies = Math.min.apply(Math, arrayOfIngredients);
    showCalculateMessage(countOfCookies);
    return countOfCookies;
}

function start() {
    // cakes({sugar: 30, eggs: 1, oil: 200}, {sugar: 1200, eggs: 5, milk: 200}); // return 0
    cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); // must return 2
    // cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); // must return 0
}
