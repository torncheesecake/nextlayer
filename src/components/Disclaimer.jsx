{/* Disclaimer component with prop passthrough class */}
export default function Disclaimer({ className = '' }) {
  return (
    <section className={`py-5 dark:bg-techblack ${className}`}>
      <div className="container px-6 mx-auto max-w-7xl">
        <p className="text-base italic text-center text-seasalt0 dark:text-nlc-blue">Disclaimer, all prices exclude VAT.</p>
      </div>
    </section>
  );
}