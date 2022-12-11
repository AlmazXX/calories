import { FC } from "react";
import { ApiMeal } from "../../types";
import MealItem from "./MealItem";

interface Props {
  meals: ApiMeal[];
}

const Meals: FC<Props> = ({meals}) => {
  return <>{meals.map(meal => <MealItem key={meal.id} meal={meal}/>)}</>;
};

export default Meals;