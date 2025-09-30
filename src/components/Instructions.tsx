import type { Instruction } from "../types/recipe.types";

type InstructionsProps = {
  items: Instruction[];
};

function Instructions({ items }: InstructionsProps) {
  return (
    <section className="my-8">
      <h2 className="font-serif text-2xl text-[#854632] mb-3">Instructions</h2>

      <ul className="list-decimal marker:font-bold marker:text-[#854632] marker:text-xl pl-6 space-y-3 text-stone-600">
        {items.map(({ step, text, title }) => (
          <li key={step}>
            <span className="font-semibold text-stone-900"></span>
            <span className="font-semibold text-stone-600">{title}</span>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Instructions;
