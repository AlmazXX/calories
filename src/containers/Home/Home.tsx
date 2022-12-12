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
  const [deleting, setDeleting] = useState(false);

  const getMeals = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axiosApi.get<ApiMealsList | null>("/meals.json");
      const newMeals = data
        ? Object.keys(data).map((id) => ({ ...data[id], calories: parseInt(data[id].calories), id }))
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
    setTotal(meals.reduce((acc, meal) => acc + meal.calories, 0))
  }, [meals]);

  const deleteMeal = async (id: string) => {
    try {
      setDeleting(true);
      await axiosApi.delete(`/meals/${id}.json`);
      getMeals();
    } finally {
      setDeleting(false);
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
          <Meals meals={meals} isDeleting={deleting} onDelete={deleteMeal} />
        )}
      </div>
    </>
  );
};

export default Home;