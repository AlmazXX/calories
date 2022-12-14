import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosApi from "../../axiosApi";
import Meals from "../../components/Meal/Meals";
import Spinner from "../../components/Spinner/Spinner";
import { ApiMeal, ApiMealsList } from "../../types";

const Home = () => {
  const [meals, setMeals] = useState<ApiMeal[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [idForDelete, setIdForDelete] = useState<string | null>(null);

  const getMeals = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axiosApi.get<ApiMealsList | null>("/meals.json");
      const newMeals = data
        ? Object.keys(data)
            .map((id) => ({
              ...data[id],
              calories: parseInt(data[id].calories),
              id,
            }))
            .sort((a, b) => (b.date > a.date ? 1 : -1))
        : [];
      setMeals(newMeals);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void getMeals();
  }, [getMeals]);

  useEffect(() => {
    setTotal(
      meals.reduce(
        (acc, meal) =>
          new Date(meal.date).toDateString() === new Date().toDateString()
            ? acc + meal.calories
            : acc,
        0
      )
    );
  }, [meals]);

  const deleteMeal = async (mealId: string) => {
    try {
      setIdForDelete(mealId);
      await axiosApi.delete(`/meals/${mealId}.json`);
      getMeals();
    } finally {
      setIdForDelete(null);
    }
  };

  return (
    <>
      <div className="row mt-3">
        <h4>Meals list</h4>
      </div>
      <div className="row mt-3">
        <div className="col-8">
          Total calories today: <strong>{total}</strong>
        </div>
        <div className="col-4 text-end">
          <Link to="meal/add" className="btn btn-primary">
            Add new meal
          </Link>
        </div>
      </div>
      <div className="row mt-3 gap-3">
        {loading ? (
          <Spinner />
        ) : (
          <Meals
            meals={meals}
            idForDelete={idForDelete}
            onDelete={deleteMeal}
          />
        )}
      </div>
    </>
  );
};

export default Home;