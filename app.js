let recipe=document.getElementById("txtName").value;
// let search=document.getElementById("Search");

function getRecipe(){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`)
    .then(res => res.json())
    .then(data => {
       
    document.getElementById("result").innerHTML=`
        <h2>Name: ${data.meals[0].strMeal}</h2>
        <h3>Category: ${data.meals[0].strCategory}</h3>
        <h3>Area: ${data.meals[0].strArea}</h3>
        <img src="${data.meals[0].strMealThumb}" alt="Meal Image" width="300">
        <h3>Instructions: ${data.meals[0].strInstructions}</h3>
        <h3>Youtube Link: <a href="${data.meals.strYoutube}" target="_blank">${data.meals[0].strYoutube}</a></h3>
        ` ;     

        // document.getElementById("name").innerHTML=`${data.meals[0].strMeal}`;
        

     
})
}
