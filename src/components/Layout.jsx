// src/components/Layout.jsx
import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import RouteHero from "./RouteHero";
import ScrollToTop from "./ScrollToTop";

function LoadingFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-nlc-blue border-t-transparent"></div>
        <p className="mt-4 text-lg text-techblack dark:text-seasalt">Loading...</p>
      </div>
    </div>
  );
}

export default function Layout() {
  const location = useLocation();
  const noHeroRoutes = ["/contact"];
  const showHero = !noHeroRoutes.includes(location.pathname);
  return (
    <>
      <Navbar /> <ScrollToTop /> {/* Conditionally render RouteHero based on the current path */}
      {showHero && <RouteHero />}
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
