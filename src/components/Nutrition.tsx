import type { Nutrition as NutritionData } from "../types/recipe.types";

type NutritionProps = {
  data: NutritionData;
};

function Nutrition({ data }: NutritionProps) {
  return (
    <section>
      <h2 className="font-serif text-2xl text-[#854632] mb-3">Nutrition</h2>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>

      <dl className="divide-y divide-[#E3DDD7]">
        <div className="grid grid-cols-3 text-center py-3">
          <dt className="text-stone-600">Calories</dt>
          <dd className="justify-self-end font-semibold text-[#854632]">
            {data.calories}
          </dd>
        </div>

        <div className="grid grid-cols-3 text-center py-3">
          <dt className="text-stone-600">Carbs</dt>
          <dd className="justify-self-end font-semibold text-[#854632]">
            {data.carbs}
          </dd>
        </div>

        <div className="grid grid-cols-3 text-center py-3">
          <dt className="text-stone-600">Protein</dt>
          <dd className="justify-self-end font-semibold text-[#854632]">
            {data.protein}
          </dd>
        </div>

        <div className="grid grid-cols-3 text-center py-3">
          <dt className="text-stone-600">Fat</dt>
          <dd className="justify-self-end font-semibold text-[#854632]">
            {data.fat}
          </dd>
        </div>
      </dl>
    </section>
  );
}

export default Nutrition;
