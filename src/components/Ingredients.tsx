interface IngredientsProps {
  items: string[];
}

function Igredients({ items }: IngredientsProps) {
  return (
    <div className="my=8">
      <h2 className="font-serif text-2xl text-[#854632] mb-3">Ingredients</h2>
      <ul className="list-disc list-inside marker:text-[#854632] space-y-2 text-stone-600">
        {items.map((item, index) => (
          <li className="pl-2" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Igredients;
