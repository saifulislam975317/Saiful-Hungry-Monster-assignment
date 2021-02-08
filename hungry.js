fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=salad')
.then(res=>res.json())
.then(data=>displayMeals(data.meals))


const displayMeals=meals=>{
    console.log(meals)
    const mealsDiv=document.getElementById('mealDetails')

    meals.forEach(meal => {
        
        const mealDiv=document.createElement('div');
        mealDiv.className='meal'
        const mealInfo=`
        <img
        onclick="displayMealDetails('${meal.strMeal}')" src="${meal.strMealThumb} " <h2>${meal.strMeal}</h2> 
        
    
        `;
        mealDiv.innerHTML=mealInfo;
        mealsDiv.appendChild(mealDiv);

    });
}

const displayMealDetails=name=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
    .then(res => res.json())
    .then(data =>renderMealInfo(data.meals[0]))
    
}

const renderMealInfo=meal=>{
    console.log(meal);
    const mealDivision=document.getElementById('singleMealDetails');
    mealDivision.innerHTML=`
    <img src="${meal.strMealThumb}">
    <h2>${meal.strMeal}</h2>
    <li>${meal.strIngredient1}</li>
    <li>${meal.strIngredient2}</li>
    <li>${meal.strIngredient3}</li>
    <li>${meal.strIngredient4}</li>
    <li>${meal.strIngredient5}</li>
    <li>${meal.strIngredient6}</li>
    <li>${meal.strIngredient7}</li>
    <li>${meal.strIngredient8}</li>
    <li>${meal.strIngredient9}</li>
    
    
    `
}



// {/* <button onclick="displayMealDetails('${meal.strMeal}')">Details</button> */}

// {/* <h3>${meal.strMeal}</h3> */}