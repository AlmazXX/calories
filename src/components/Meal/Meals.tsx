import { FC } from "react";
import { ApiMeal } from "../../types";
import MealItem from "./MealItem";

interface Props {
  meals: ApiMeal[];
  idForDelete: string | null;
  onDelete: (id: string) => void;
}

const Meals: FC<Props> = ({ meals, idForDelete, onDelete }) => {
  return (
    <>
      {meals.length ? (
        meals.map((meal) => (
          <MealItem
            key={meal.id}
            meal={meal}
            isDeleting={idForDelete === meal.id}
            onClick={() => onDelete(meal.id)}
          />
        ))
      ) : (
        <p>No meals added</p>
      )}
    </>
  );
};

export default Meals;