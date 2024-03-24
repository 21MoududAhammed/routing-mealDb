const fetchMeals = () =>{
   return fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
    .then(res => res.json())
    .then(data => data.meals);
}

export {fetchMeals};