export default function PricesPAYG() {
  return (
      <section className="py-20 bg-seasalt dark:bg-techblack">
        {/* Pricing container */}
        <div className="px-6 mx-auto max-w-7xl">
          {/* Heading and intro constrained to 5xl */}
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="mb-10 text-5xl font-bold text-techblack dark:text-seasalt">OneSupport Pay As You Go Option</h2>
            <p className="mb-12 text-lg text-techblack dark:text-seasalt">
              Not ready for a OneSupport contract just yet? Why not look at our Pay As You Go option: pay only for hours used, invoiced each
              month, payment due within 14 days.
            </p>
          </div>
          {/* PAYG Card, styled consistently with pricing plans */}
          <div className="flex flex-col max-w-md p-6 mx-auto text-center bg-white  shadow-lg  rounded-xl dark:bg-techblack">
            <h3 className="mb-2 text-xl font-bold text-techblack dark:text-seasalt">OneSupport PAYG</h3>
            <p className="mb-4 font-medium text-techblack dark:text-seasalt">Only pay for hours you have used</p>
            <p className="mb-2 text-2xl font-bold text-nlc-blue dark:text-nlc-mint">&pound;200 per hour</p>
            <p className="mb-6 text-base text-techblack dark:text-seasalt">Invoiced monthly, payment due in 14 days</p>
            <span className="px-4 py-1 mx-auto mb-2 text-xs font-semibold rounded-full text-seasalt bg-nlc-blue dark:bg-nlc-blue/40 dark:text-seasalt">
              For those odd jobs
            </span>
          </div>
          {/* Closing paragraph, wide as in pricing */}
          <p className="mt-10 text-lg font-semibold text-center text-techblack dark:text-seasalt">
            OneSupport PAYG lets you pay only for the hours you use each month. It's flexible.
          </p>
        </div>
    </section>
  );
}
