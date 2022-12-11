import { FC } from "react";
import { ApiMeal } from "../../types";
import MealItem from "./MealItem";

interface Props {
  meals: ApiMeal[];
}

const Meals: FC<Props> = ({ meals }) => {
  return (
    <>
      {meals.length ? (
        meals.map((meal) => <MealItem key={meal.id} meal={meal} />)
      ) : (
        <p>No meals added</p>
      )}
    </>
  );
};

export default Meals;