import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosApi from "../../axiosApi";
import Meals from "../../components/Meal/Meals";
import { ApiMeal, ApiMealsList } from "../../types";

const Home = () => {
  const [meals, setMeals] = useState<ApiMeal[]>([]);

  const getMeals = useCallback( async() => {
    const {data} = await axiosApi.get<ApiMealsList>('/meals.json');
    const newMeals = data ? Object.keys(data).map(id => ({...data[id], id})) : [];
    setMeals(newMeals);
  }, [])

  useEffect(() => {
    void getMeals();
  }, [getMeals])

  return (
    <>
      <div className="row mt-3">
        <div className="col-8">Total calories today: <strong></strong></div>
        <div className="col-4 text-end">
          <Link to="meal/add" className="btn btn-primary">Add new meal</Link>
        </div>
      </div>
      <div className="row mt-3"><Meals meals={meals}/></div>
    </>
  );
};

export default Home;