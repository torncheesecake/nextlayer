import { Link } from "react-router-dom";
export default function PriceBanner() {
  return (
    <div className="badge-accent px-4 py-6 text-white shadow-lg sm:px-8">
      <div className="mx-auto flex w-[90%] max-w-7xl flex-col items-center justify-center px-10 sm:flex-row">
        <span className="mb-4 text-base sm:mr-4 sm:mb-0 sm:text-xl">
          Are you ready to discuss your options?
        </span>
        <Link
          to="/contact"
          className="dark:text-primary-dark dark:bg-body-dark bg-surface-light hover:bg-surface-light text-icon-brand-light w-auto rounded-full px-5 py-2 text-base shadow-lg transition-colors duration-200 dark:hover:bg-blue-950"
        >
          Let's have a chat
        </Link>
      </div>
    </div>
  );
}
