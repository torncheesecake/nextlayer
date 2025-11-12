import { Link } from 'react-router-dom';

export default function HeroAbout() {
  return (
 <section className="pt-12 pb-24 -b -gray-300 dark:bg-techblack bg-gradient-to-br from-seasalt to-zinc-100 dark:bg-none">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Inner hero: change the max-w-* to be shorter or wider as needed */}
        <div className="w-full max-w-5xl text-left">
          {/* Headline */}
          <h1 className="mb-10 text-7xl text-techblack md:text-6xl lg:text-8xl dark:text-seasalt leading-[1] tracking-tight">
          How we started
        </h1>
          <p className="mb-8 text-lg leading-[1.5] font-light text-techblack md:text-2xl dark:text-blue-50">
          <strong>Next Layer Consulting</strong> was founded on a simple idea: NetSuite users deserve more than just software - they deserve
          guidance, expertise, and a partner who truly understands how to unlock its potential.
        </p>
          <p className="mb-8 text-lg leading-[1.5] font-light text-techblack md:text-2xl dark:text-blue-50">
          With over three decades of hands-on experience across more than 250 implementations, we've worked at every layer - from
          development and analytics to training, consulting, and project leadership. Along the way, we've helped businesses streamline
          operations, solve complex problems, and build processes that last.
        </p>
          <p className="mb-8 text-lg leading-[1.5] font-light text-techblack md:text-2xl dark:text-blue-50">
          NetSuite is a fantastic product, and the people who use it deserve the very best from it. That's why we do what we do - and why we
          love doing it every day.
        </p>
          <div className="mt-6">
            <Link to="/contact"
            className="inline-block px-8 py-4 text-lg transition -2 rounded-full -nlc-blue text-techblack bg-none hover:bg-nlc-blue hover:text-seasalt dark:text-seasalt">
            Talk to our team
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}