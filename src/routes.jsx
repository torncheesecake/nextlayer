// src/routes.jsx
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import Layout from "./components/Layout";

const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const CyberSecurity = lazy(() => import("./pages/CyberSecurity/CyberSecurity"));
const Home = lazy(() => import("./pages/Home/Home"));
const NetSuite = lazy(() => import("./pages/NetSuite/NetSuite"));
const NetSuiteCostCalc = lazy(
  () => import("./pages/NetSuiteCostCalc/NetSuiteCostCalc"),
);
const OneSupport = lazy(() => import("./pages/Support/OneSupport"));
const ImplementationRescue = lazy(() => import("./pages/Rescue/Rescue"));
const Services = lazy(() => import("./pages/Services/Services"));
const SuiteApps = lazy(() => import("./pages/SuiteApps/SuiteApps"));
const Web = lazy(() => import("./pages/Web/Web"));

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        {
          path: "/cyber-security/penetration-testing",
          element: <CyberSecurity />,
        },
        { path: "/netsuite", element: <NetSuite /> },
        { path: "/netsuite/support", element: <OneSupport /> },
        {
          path: "/netsuite/implementation-rescue",
          element: <ImplementationRescue />,
        },
        { path: "/web-services/web-development", element: <Web /> },
        { path: "/netsuite/suiteapps", element: <SuiteApps /> },
        { path: "/services", element: <Services /> },
        {
          path: "/tools/netsuite-cost-calculator",
          element: <NetSuiteCostCalc />,
        },
      ],
    },
  ],
  { basename: "/dev/" },
);
