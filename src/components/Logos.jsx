export default function Logos() {
  return (
    <section
      className="px-8 py-16 -b bg-techblack -coal"
      id="customers"
    >
      <div className="flex flex-col items-center mx-auto max-w-7xl">
        <div className="mb-6 text-lg font-semibold tracking-widest uppercase text-seasalt">
          Trusted by
        </div>
        <div className="flex flex-wrap justify-center gap-12 opacity-80">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
            alt="AWS logo"
            className="h-10 zincscale"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ed/NHS_England_logo.svg"
            alt="NHS logo"
            className="h-10 zincscale"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e3/ISO_Logo_(Red_square).svg"
            alt="ISO logo"
            className="h-10 zincscale"
          />
          <img
            src="https://seeklogo.com/images/P/pci-security-standards-council-logo-7BDF7F96FF-seeklogo.com.svg"
            alt="PCI logo"
            className="h-10 zincscale"
          />
          <span className="mx-6 my-auto text-lg font-bold text-nlc-blue">
            and 200+ more
          </span>
        </div>
        <div className="mt-5 text-lg italic text-seasalt">
          Zero incidents for our customers in 2024
        </div>
      </div>
    </section>
  );
}