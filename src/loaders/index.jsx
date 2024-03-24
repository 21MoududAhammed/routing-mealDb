const fetchMeals = () => {
  return fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
    .then((res) => res.json())
    .then((data) => data.meals);
};

const fetchMealDetails = ({ params }) => {
  return fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`
  )
    .then((res) => res.json())
    .then((data) => data.meals[0]);
};

export { fetchMeals, fetchMealDetails };
