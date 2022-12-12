import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Meal } from "../../types";
import BtnSpinner from "../Spinner/BtnSpinner";

interface Props {
  existingMeal?: Meal;
  isSaving: boolean;
  onSubmit: (meal: Meal) => void;
}

const initialState = {
  mealtime: "",
  description: "",
  calories: '',
};

const MealForm: FC<Props> = ({
  existingMeal = initialState,
  isSaving = false,
  onSubmit,
}) => {
  const [meal, setMeal] = useState<Meal>(existingMeal);

  const onMealChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let { name, value } = e.target;
    setMeal((prev) => ({ ...prev, [name]: value }));
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(meal);
    !existingMeal && setMeal(initialState);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="form-group mb-2">
        <label htmlFor="mealtime">Meal Time</label>
        <select
          name="mealtime"
          id="mealtime"
          className="form-select"
          value={meal.mealtime}
          onChange={onMealChange}
          required
        >
          <option value="">Please select meal time</option>
          <option value="breakfast">BreakFast</option>
          <option value="snack">Snack</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </div>
      <div className="form-group mb-2">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          className="form-control"
          value={meal.description}
          onChange={onMealChange}
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="calories">Calories</label>
        <input
          type="number"
          name="calories"
          id="calories"
          className="form-control"
          value={meal.calories}
          onChange={onMealChange}
          required
        />
      </div>
      <div className="d-flex gap-3 px-0 mb-3">
        <button type="submit" className="btn btn-success" disabled={isSaving}>
          {isSaving && <BtnSpinner />}Save
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default MealForm;