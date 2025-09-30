import { recipeData } from "./data/recipeData";
import PreparationTime from "./components/PreparationTime";
import Ingredients from "./components/Ingredients";
import Hero from "./components/Hero";
import Instructions from "./components/Instructions";
import Nutrition from "./components/Nutrition";

function App() {
  return (
    <div className="min-h-screen bg-stone-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <Hero
          image={recipeData.image}
          title={recipeData.title}
          description={recipeData.description}
        />
        <PreparationTime data={recipeData.preparationTime} />
        <Ingredients items={recipeData.ingredients} />
        <div className="my-8 h-px bg-[#E3DDD7]" aria-hidden="true" />
        <Instructions items={recipeData.instructions} />
        <div className="my-8 h-px bg-[#E3DDD7]" aria-hidden="true" />
        <Nutrition data={recipeData.nutrition} />
      </div>
    </div>
  );
}

export default App;
