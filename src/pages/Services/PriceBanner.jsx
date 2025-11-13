import { Link } from "react-router-dom";
export default function PriceBanner() {
  return (
    <div className="bg-bittersweet-light1 dark:bg-pureblack dark:text-seasalt px-4 py-6 text-techblack shadow-lg sm:px-8">
      <div className="mx-auto flex w-[90%] max-w-7xl flex-col items-center justify-center px-10 sm:flex-row">
        <span className="mb-4 text-base sm:mr-4 sm:mb-0 sm:text-xl">
          Are you ready to discuss your options?
        </span>
        <Link
          to="/contact"
          className="text-white dark:text-seasalt bg-biscay hover:bg-biscay-light1 dark:bg-bittersweet-dark2 dark:hover:bg-bittersweet-dark1 text-icon-brand-light w-auto rounded-full px-5 py-2 text-base shadow-lg transition-colors duration-200"
        >
          Let's have a chat
        </Link>
      </div>
    </div>
  );
}
