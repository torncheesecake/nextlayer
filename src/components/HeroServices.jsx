import { Link } from 'react-router-dom';

export default function HeroServices() {
  return (
 <section className="pt-12 pb-24 -b -gray-300 dark:bg-techblack bg-gradient-to-br from-seasalt to-white dark:bg-none">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Inner hero: change the max-w-* to be shorter or wider as needed */}
        <div className="w-full max-w-5xl text-left">
        {/* Headline */}
          <h1 className="mb-10 text-7xl text-techblack md:text-6xl lg:text-8xl dark:text-seasalt leading-[1] tracking-tight">
          NetSuite services that unlock your potential
        </h1>
          <p className="mb-8 text-lg leading-[1.5] font-light text-techblack md:text-2xl dark:text-blue-50">
          Transform your systems with tailored NetSuite implementations, support, and development. From first setup to advanced automation,
          all our services are focused entirely on your growth.
        </p>
         <div className="mt-6">
            <Link to="/contact"
              className="inline-block px-8 py-4 text-lg transition rounded-full -2 -nlc-blue text-techblack bg-none hover:bg-nlc-blue hover:text-seasalt dark:text-seasalt"
>            Talk to our team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}