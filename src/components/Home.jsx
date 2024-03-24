import { useLoaderData } from "react-router-dom";

export default function Home() {
  const meals = useLoaderData();
  console.log(meals);
  return (
    <div className="m-5 grid grid-cols-3 gap-5">
      {meals.map((meal) => {
        return (
          <div
            key={meal.idMeal}
            className="card w-96 bg-base-100 shadow-xl bg-gray-300 pt-2"
          >
            <figure>
              <img
                className="w-56"
                src={meal.strMealThumb}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{meal.strMeal}</h2>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Show Details</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
