import { Link } from "react-router-dom";

const MealItem = () => {
  return (
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <p className="small float-sm-end m-0 text-muted">Meal time</p>
          <p className="card-title">Description</p>
          <p className="card-text">Amount of kcal</p>
          <div className="d-flex gap-3 px-0 mb-3">
            <Link to={`/quotes/edit`} className="btn btn-primary">
              Edit
            </Link>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealItem;