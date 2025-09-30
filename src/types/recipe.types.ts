// Tipo para o tempo de preparo
export interface PreparationTime {
  total: string;
  preparation: string;
  cooking: string;
}

// Tipo para UMA instrução
export interface Instruction {
  step: number;
  title: string;
  text: string;
}

// Tipo para informações nutricionais
export interface Nutrition {
  calories: string;
  carbs: string;
  protein: string;
  fat: string;
}

// Tipo PRINCIPAL - a receita completa
export interface Recipe {
  title: string;
  description: string;
  image: string;
  preparationTime: PreparationTime;
  ingredients: string[];
  instructions: Instruction[];
  nutrition: Nutrition;
}
