type HeroProps = {
  title: string;
  description: string;
  image: string;
};

function Hero({ title, description, image }: HeroProps) {
  return (
    <header className="space-y-4 pb-6">
      <img
        src={image}
        alt="image of Omelette"
        className="w-full rounded-xl md:rounded-2xl object-cover"
      />
      <h1 className="font-serif text-3xl md:text-[40px] leading-tight text-stone-900">
        {title}
      </h1>
      <p className="font-sans text-stone-600 md:text-lg">{description}</p>
    </header>
  );
}

export default Hero;
