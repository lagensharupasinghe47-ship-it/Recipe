let recipe=document.getElementById("txtName").value;
// let search=document.getElementById("Search");

function getRecipe(){
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=a27be5aa="  + recipe.value)
    .then(res => res.json())
    .then(data => {
       let meal=data.meals[0];
    document.getElementById("result").innerHTML=`
        <h2>Name: ${meals[0].strMeal}</h2>
        <h3>Category: ${meals[0].strCategory}</h3>
        <h3>Area: ${meals[0].strArea}</h3>
        <h3>Instructions: ${meals[0].strInstructions}</h3>
        <img src="${meals[0].strMealThumb}" alt="Meal Image" width="300">
        <h3>Youtube Link: <a href="${meals.strYoutube}" target="_blank">${data.meals[0].strYoutube}</a></h3>
        ` ;     


})
}
