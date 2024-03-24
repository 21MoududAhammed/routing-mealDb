import { useLoaderData, useNavigate } from "react-router-dom";

export default function MealDetails() {
  const mealDetails = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="flex justify-center mt-5">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={mealDetails?.strMealThumb} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{mealDetails?.strMeal}</h2>
          <p>{mealDetails?.strInstructions}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>navigate(-1)} className="btn btn-primary">Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}
