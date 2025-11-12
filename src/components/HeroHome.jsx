import { Link } from 'react-router-dom';

export default function Hero() {
  return (
 <section className="pt-12 pb-24 -b -gray-300 dark:bg-techblack bg-gradient-to-br from-seasalt to-white dark:bg-none">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Inner hero: change the max-w-* to be shorter or wider as needed */}
        <div className="w-full max-w-5xl text-left">
          {/* Headline */}
          <h1 className="mb-10 text-7xl text-techblack md:text-6xl lg:text-8xl dark:text-seasalt leading-[1] tracking-tight">
            Make NetSuite fit you, not the other way round
          </h1>
          {/* Description */}
          <p className="mb-8 text-lg leading-[1.5] font-light text-techblack md:text-2xl dark:text-seasalt">
            Technology should help you grow, not hold you back. With decades of hands-on NetSuite experience, we design and deliver systems around how your team actually works. Whether it's simplifying processes, automating the manual grind, or solving problems others couldn't crack, we make NetSuite adapt to you, not the other way round.
          </p>
          {/* Button */}
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 text-lg text-white transition rounded-full bg-nlc-blue hover:bg-nlc-blue hover:brightness-130 hover:text-seasalt dark:text-seasalt"
            >
              Talk to our team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}