import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PriceBanner() {
  return (
    <div className="bg-gradient-to-r from-bittersweet to-bittersweet-dark1 dark:from-bittersweet-dark2 dark:to-bittersweet text-seasalt px-4 py-12 shadow-xl relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-seasalt/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-biscay/20 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto flex w-[90%] max-w-7xl flex-col items-center justify-center px-10 sm:flex-row gap-6 relative z-10">
        <span className="text-lg sm:text-2xl font-bold text-seasalt text-center sm:text-left">
          Ready to discuss your options?
        </span>
        <Link
          to="/contact"
          className="group text-seasalt bg-biscay hover:bg-biscay-light1 dark:bg-biscay-dark1 dark:hover:bg-biscay w-auto rounded-full px-8 py-3 text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
        >
          Let's have a chat
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
}
