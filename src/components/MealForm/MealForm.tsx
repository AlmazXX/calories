import { ChangeEvent, useState } from "react";

const MealForm = () => {
  const [meal, setMeal] = useState({});

  const onMealChange = (e: ChangeEvent<HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement>) => {
    const {name, value} = e.target;
    setMeal(prev => ({...prev, [name]: value}))
  }
  
  return (
    <form>
      <div className="form-group mb-2">
        <label htmlFor="mealTime">Meal Time</label>
        <select name="mealTime" id="mealTime" className="form-select" required>
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
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="calories">Calories</label>
        <input
          type="number"
          name="calories"
          id="calories"
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default MealForm;