import { FC, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { capitalize, convertDate, convertTime } from "../../helpers";
import { ApiMeal } from "../../types";
import BtnSpinner from "../Spinner/BtnSpinner";

interface Props {
  meal: ApiMeal;
  isDeleting: boolean;
  onClick: MouseEventHandler;
}

const MealItem: FC<Props> = ({meal, isDeleting, onClick}) => {
  return (
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <p className="small float-sm-end m-0 text-muted">{capitalize(meal.mealtime)}: <span>{convertTime(meal.date)}, {convertDate(meal.date)}</span></p>
          <p className="card-title">{meal.description}</p>
          <p className="card-text"><strong>{meal.calories}</strong> kcal</p>
          <div className="d-flex gap-3 px-0 mb-3">
            <Link to={`/meal/${meal.id}/edit`} className="btn btn-primary">
              Edit
            </Link>
            <button className="btn btn-danger" disabled={isDeleting} onClick={onClick}>{isDeleting && <BtnSpinner/>}Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealItem;