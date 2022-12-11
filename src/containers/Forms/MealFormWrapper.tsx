import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosApi from "../../axiosApi";
import MealForm from "../../components/MealForm/MealForm";
import { Meal } from "../../types";

const MealFormWrapper = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const addMeal = async (meal: Meal) => {
    try {
      setLoading(true);
      await axiosApi.post("/meals.json", meal);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row mt-3">
      <div className="col-6">
        <MealForm onSubmit={addMeal} isLoading={loading} />
      </div>
    </div>
  );
};

export default MealFormWrapper;