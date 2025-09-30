import type { Recipe } from "../types/recipe.types";

export const recipeData: Recipe = {
  title: "Simple Omelette Recipe",

  description:
    "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",

  image: "/omelette.jpg",

  preparationTime: {
    total: "Approximately 10 minutes",
    preparation: "5 minutes",
    cooking: "5 minutes",
  },

  ingredients: [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil",
    "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  ],

  instructions: [
    {
      step: 1,
      title: "Beat the eggs: ",
      text: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
    },
    {
      step: 2,
      title: "Beat the eggs: ",
      text: "Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.",
    },
    {
      step: 3,
      title: "Cook the omelette: ",
      text: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    },
    {
      step: 4,
      title: "Add fillings (optional): ",
      text: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
    },
    {
      step: 5,
      title: "Fold and serve: ",
      text: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
    },
    {
      step: 6,
      title: "Enjoy: ",
      text: "Serve hot, with additional salt and pepper if needed.",
    },
  ],

  nutrition: {
    calories: "277kcal",
    carbs: "0g",
    protein: "20g",
    fat: "22g",
  },
};
