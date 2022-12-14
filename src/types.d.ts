export interface Meal {
  mealtime: string;
  description: string;
  calories: string;
  date: Date;
}

export interface ApiMealsList {
  [key: string]: Meal;
}

export interface ApiMeal extends Meal {
  id: string;
  calories: number
}