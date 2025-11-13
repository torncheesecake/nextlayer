export default function Logos() {
  return (
    <section className="bg-techblack px-8 py-16" id="customers">
      <div className="mx-auto flex w-[90%] max-w-7xl flex-col items-center">
        <div className=" text-white mb-6 text-lg font-semibold tracking-widest uppercase">
          Trusted by leaders in healthcare, government, finance, and technology
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ed/NHS_England_logo.svg"
            alt="NHS logo"
            className="h-10 invert"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2e/UK_government_logo_white.svg"
            alt="UK Government logo"
            className="h-10 invert"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
            alt="AWS logo"
            className="h-10 invert"
          />
          <img
            src="https://seeklogo.com/images/P/pci-security-standards-council-logo-7BDF7F96FF-seeklogo.com.svg"
            alt="PCI SSC logo"
            className="h-10 invert"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e3/ISO_Logo_%28Red_square%29.svg"
            alt="ISO logo"
            className="h-10 invert"
          />
          <span className="text-seasalt mx-6 my-auto text-lg font-bold">
            and many more
          </span>
        </div>
        <div className="text-seasalt mt-5 text-lg italic opacity-80">
          Zero incidents for our customers in 2024
        </div>
      </div>
    </section>
  );
}
