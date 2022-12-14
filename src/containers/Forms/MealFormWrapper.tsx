import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosApi from "../../axiosApi";
import MealForm from "../../components/MealForm/MealForm";
import Spinner from "../../components/Spinner/Spinner";
import { Meal } from "../../types";

const MealFormWrapper = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [meal, setMeal] = useState<Meal | null>(null);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(false);

  const addMeal = async (meal: Meal) => {
    try {
      setSaving(true);
      await axiosApi.post("/meals.json", meal);
      navigate("/");
    } finally {
      setSaving(false);
    }
  };

  const editMeal = async (meal: Meal) => {
    try {
      setSaving(true);
      await axiosApi.put(`/meals/${id}.json`, meal);
    } finally {
      setSaving(false);
    }
  };

  const getOneMeal = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axiosApi.get<Meal | null>(`/meals/${id}.json`);
      const existingMeal = data ? {...data, date: new Date(data.date)} : null;
      setMeal(existingMeal);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      void getOneMeal();
    }
  }, [id, getOneMeal]);

  return (
    <>
      <div className="row mt-3">
        <h4>{!id ? "Add meal" : "Edit Meal"}</h4>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          {loading ? (
            <Spinner />
          ) : meal ? (
            <MealForm
              existingMeal={meal}
              isSaving={saving}
              onSubmit={editMeal}
            />
          ) : (
            <MealForm isSaving={saving} onSubmit={addMeal} />
          )}
        </div>
      </div>
    </>
  );
};

export default MealFormWrapper;