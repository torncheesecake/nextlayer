import { Link } from 'react-router-dom';


export default function Hero() {
  return (
    <section className="pt-12 pb-24 dark:bg-techblack bg-gradient-to-b from-seasalt to-zinc-200 dark:bg-none">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Inner hero: change the max-w-* to be shorter or wider as needed */}
        <div className="w-full max-w-5xl text-left">
          {/* Headline */}
          <h1 className="mb-10 text-5xl text-nlc-blue md:text-6xl lg:text-8xl dark:text-blue-50 leading-[1] tracking-tight">
          SuiteApps to simplify, automate, solve.
        </h1>
        {/* Description  */}
          <p className="mb-8 text-lg leading-[1.5] font-light text-techblack md:text-2xl dark:text-blue-50">
          Technology should accelerate growth, not get in the way; tailored NetSuite SuiteApps mirror how teams work to simplify workflows, automate the busywork, and solve the hard problems.
        </p>
        {/* Button */}
        <div className="mt-6">
          <Link to="/contact"               className="inline-block px-8 py-4 text-lg font-bold text-white transition  -zinc-400 rounded-full hover:bg-nlc-mint dark:hover:bg-nlc-mint bg-nlc-blue dark:bg-nlc-nlc-blue dark:text-techblack animate-fadeIn">
            Talk to our team
          </Link>
          </div>
          </div>
      </div>
    </section>
  );
}