export default function Footer() {
  return (
    <footer className="py-8 bg-black dark:bg-black-darker">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 mx-auto max-w-7xl md:flex-row">
        {/* Logo and Company Info */}
        <div className="flex items-center gap-3">
          <a href="/" aria-label="Next Layer Consulting Logo">
          <div className="p-2 rounded-full shadow dark:bg-black bg-white/90 ring-1 ring-stone-100 dark:ring-blue-950">
            <img src="./assets/bug-fav.png" alt="Next Layer Consulting Logo" className="block object-contain w-10 h-10 dark:hidden" />
            <img src="./assets/bug-w.png" alt="Next Layer Consulting Logo" className="hidden object-contain w-10 h-10 dark:block" />
            </div>
            </a>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-seasalt dark:text-blue-100">Next Layer Consulting Ltd</span>
            <span className="text-xs text-seasalt dark:text-blue-400"
              >Registered in England &amp; Wales. Company No. 15596288, Vat Reg Num: 465171880</span
            >
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5 mt-2 md:mt-0">
          <a
            href="https://www.linkedin.com/company/next-layer-consulting-ltd"
            className="text-2xl transition hover:text-nlc-blue-lighter text-seasalt dark:hover:text-blue-200"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="container px-4 mx-auto mt-6 text-center">
        <span className="text-sm text-seasalt dark:text-blue-400">&copy; 2025 Next Layer Consulting. All rights reserved.</span>
      </div>
    </footer>
  );
}
