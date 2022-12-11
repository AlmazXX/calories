import { FC } from "react";
import { ApiMeal } from "../../types";
import MealItem from "./MealItem";

interface Props {
  meals: ApiMeal[];
  isDeleting: boolean;
  onDelete: (id: string) => void;
}

const Meals: FC<Props> = ({ meals, isDeleting, onDelete }) => {
  return (
    <>
      {meals.length ? (
        meals.map((meal) => <MealItem key={meal.id} meal={meal} isDeleting={isDeleting} onClick={() => {onDelete(meal.id)}} />)
      ) : (
        <p>No meals added</p>
      )}
    </>
  );
};

export default Meals;