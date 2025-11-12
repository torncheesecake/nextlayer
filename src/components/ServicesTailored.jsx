import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Workflow, Blocks } from 'lucide-react'
export default function Tailored() {
  return (
    <section className="text-center transition-colors duration-300 bg-seasalt dark:bg-techblack py-28">
      <div className="container px-6 mx-auto max-w-7xl">
                <h2 className="mb-12 text-5xl leading-[1.08] font-semibold text-center text-techblack dark:text-seasalt">
Services tailored for you</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {/* Card 1 */}
          <div
            className="group dark:bg-techblack flex min-h-[370px] flex-col items-center justify-start rounded-xl   bg-white p-8 shadow-lg transition-transform hover:scale-105"
          >
            <div className="flex flex-col items-center justify-center w-full h-32 mb-4">
              <img
                src="./src/assets/NetSuite-logo-half-light.png"
                alt="NetSuite"
                className="block w-auto h-auto mb-4 transition-all hover:zincscale-0 dark:hidden"
              />
              <img
                src="./src/assets/NetSuite-logo-half-dark.png"
                alt="NetSuite"
                className="hidden w-auto h-auto mb-4 transition-all hover:zincscale-0 dark:block"
              />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-nlc-blue dark:text-seasalt">NetSuite Implementation</h3>
            <p className="text-lg text-center text-techblack dark:text-seasalt">
              We fit NetSuite to your business. Workshops, go-live, support, built for you.
            </p>
          </div>
          {/* Card 2 */}
          <div
            className="group dark:bg-techblack flex min-h-[370px] flex-col items-center justify-start rounded-xl   bg-white p-8 shadow-lg transition-transform hover:scale-105"
          >
            <div className="flex items-center justify-center w-full h-32 mb-4">
              <Workflow className="w-20 h-20 dark:text-white text-nlc-blue" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-nlc-blue dark:text-seasalt">Automation &amp; Dashboards</h3>
            <p className="text-lg text-center text-techblack dark:text-seasalt">
              Remove admin, get dashboards everyone trusts. Fast decisions for all teams.
            </p>
          </div>
          {/* Card 3 */}
          <div
            className="group dark:bg-techblack flex min-h-[370px] flex-col items-center justify-start rounded-xl   bg-white p-8 shadow-lg transition-transform hover:scale-105"
          >
            <div className="flex items-center justify-center w-full h-32 mb-4">
              <Blocks className="w-20 h-20 dark:text-white text-nlc-blue" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-nlc-blue dark:text-seasalt">Integration</h3>
            <p className="text-lg text-center text-techblack dark:text-seasalt">
              We connect ecommerce, finance, CRM and fulfilment, so data only needs entering once.
            </p>
          </div>
        </div>
        <div className="mt-12 text-lg text-techblack dark:text-white">
  To learn more about our expert NetSuite services, visit our{' '}
  <Link
    to="/services"
    className="underline transition text-nlc-blue dark:text-seasalt dark:hover:text-nlc-blue hover:text-nlc-blue"
  >
    Services page
  </Link>
  .
  <br />
  For full details and clear pricing on our OneSupport packages, see our{' '}
  <HashLink
    smooth
    to="/services#pricing"
    className="underline transition text-nlc-blue dark:text-seasalt dark:hover:text-nlc-blue hover:text-nlc-blue"
  >
    Support pricing
  </HashLink>
  .
</div>

      </div>
    </section>
  );
}