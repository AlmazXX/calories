export interface Meal {
  mealtime: string;
  description: string;
  calories: number;
}

export interface ApiMealsList {
  [key: string]: Meal;
}

export interface ApiMeal extends Meal {
  id: string;
}