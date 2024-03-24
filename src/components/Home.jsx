export default function Home() {
  return (
    <div className="m-5 grid grid-cols-3">
        {/* card  */}
      <div className="card w-96 bg-base-100 shadow-xl bg-gray-300 pt-2">
        <figure>
          <img className="w-56"
            src="https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      {/* card  */}
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-56"
            src="https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-56"
            src="https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
