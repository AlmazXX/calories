import { useNavigate } from "react-router-dom";
import axiosApi from "../../axiosApi";
import MealForm from "../../components/MealForm/MealForm";
import { Meal } from "../../types";

const MealFormWrapper = () => {
  const navigate = useNavigate();
  const addMeal = async (meal: Meal) => {
    await axiosApi.post("/meals.json", meal);
    navigate('/')
  };

  return (
    <div className="row mt-3">
      <div className="col-6">
        <MealForm onSubmit={addMeal} />
      </div>
    </div>
  );
};

export default MealFormWrapper;