import type { PreparationTime as PreparationTimeData } from "../types/recipe.types";

interface PreparationTimeProps {
  data: PreparationTimeData;
}

function PreparationTime({ data }: PreparationTimeProps) {
  return (
    <div className="bg-rose-50 p-6 mb-6 rounded-xl space-y-3">
      <h3 className="font-sans font-semibold text-rose-800 text-lg">
        Preparation time
      </h3>
      <ul className="list-disc list-inside space-y-1 text-stone-600">
        <li>
          <span className="font-semibold">Total:</span> {data.total}
        </li>
        <li>
          <span className="font-semibold">Preparation:</span> {data.preparation}
        </li>
        <li>
          <span className="font-semibold">Cooking:</span> {data.cooking}
        </li>
      </ul>
    </div>
  );
}

export default PreparationTime;
