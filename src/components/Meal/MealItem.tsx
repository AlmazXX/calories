import { FC } from "react";
import { Link } from "react-router-dom";
import { capitalize } from "../../helpers";
import { ApiMeal } from "../../types";

interface Props {
  meal: ApiMeal;
}

const MealItem: FC<Props> = ({meal}) => {
  return (
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <p className="small float-sm-end m-0 text-muted">{capitalize(meal.mealtime)}</p>
          <p className="card-title">{meal.description}</p>
          <p className="card-text"><strong>{meal.calories}</strong> kcal</p>
          <div className="d-flex gap-3 px-0 mb-3">
            <Link to={`/meal/${meal.id}/edit`} className="btn btn-primary">
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