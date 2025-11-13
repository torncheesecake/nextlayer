# Component Organization Structure

## Overview

Components have been reorganized into a **page-based folder structure** to improve maintainability, scalability, and clarity. Page-specific components now live alongside their parent pages, while truly shared/reusable components remain in the global `components/` folder.

## Final Structure

```
src/
├── components/                    # Shared/reusable components (9 components)
│   ├── ErrorBoundary.jsx
│   ├── Footer.jsx
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   ├── RouteHero.jsx
│   ├── ScrollToTop.jsx
│   ├── SEO.jsx
│   ├── ThemeSwitcher.jsx
│   └── TrustBadgeRow.jsx
│
└── pages/
    ├── About/
    │   └── About.jsx                    # Uses shared Values component
    │
    ├── Contact/
    │   └── Contact.jsx                  # Uses shared HeroContact component
    │
    ├── CyberSecurity/
    │   ├── CyberSecurity.jsx            # Main page component
    │   ├── ConsultantCredentials.jsx
    │   ├── CyberIntro.jsx
    │   ├── CyberPricing.jsx
    │   ├── DetailedServicesCS.jsx
    │   ├── FeaturesCyber.jsx
    │   ├── PriceMatrix.jsx
    │   └── TestimonialsCyber.jsx
    │
    ├── Home/
    │   ├── Home.jsx                     # Main page component
    │   ├── PainPoints.jsx
    │   ├── ServicesTailored.jsx
    │   ├── Stats.jsx
    │   ├── Testimonials.jsx
    │   └── WhyUs.jsx
    │
    ├── NetSuite/
    │   ├── NetSuite.jsx                 # Main page component
    │   ├── ComparisonTable.jsx
    │   ├── HowWeWork.jsx
    │   ├── NetSuiteAdvantages.jsx
    │   ├── NetSuitePainPoints.jsx
    │   └── WhyNetSuite.jsx
    │
    ├── NetSuiteCostCalc/
    │   ├── NetSuiteCostCalc.jsx         # Main page component
    │   └── NetSuiteCostCalculator.jsx
    │
    ├── OneSupport/
    │   └── OneSupport.jsx               # Reuses Services components
    │
    ├── Rescue/
    │   ├── Rescue.jsx                   # Main page component
    │   ├── RescueIsthisyou.jsx
    │   └── RescuePain.jsx
    │
    ├── Services/
    │   ├── Services.jsx                 # Main page component
    │   ├── AddOns.jsx
    │   ├── FindYourBestValue.jsx
    │   ├── ManagedServices.jsx
    │   ├── OurServices.jsx
    │   ├── PriceBanner.jsx
    │   ├── Prices.jsx
    │   ├── PricesPAYG.jsx
    │   └── WhyUsServices.jsx
    │
    ├── SuiteApps/
    │   ├── SuiteApps.jsx                # Main page component
    │   ├── SuiteAppExtras.jsx
    │   ├── SuiteAppFeatures.jsx
    │   ├── SuiteAppsAi.jsx
    │   ├── SuiteAppsAutomation.jsx
    │   ├── SuiteAppsFinance.jsx
    │   └── SuiteAppsQuality.jsx
    │
    └── Web/
        ├── Web.jsx                      # Main page component
        ├── Portfolio.jsx
        ├── WebPrices.jsx
        ├── WebServices.jsx
        └── WebTestimonials.jsx
```

## Import Patterns

### Page Components Importing Their Own Components
```javascript
// From: src/pages/CyberSecurity/CyberSecurity.jsx
import CyberIntro from "./CyberIntro";
import CyberPricing from "./CyberPricing";
import DetailedServicesCS from "./DetailedServicesCS";
```

### Page Components Importing Shared Components
```javascript
// From: src/pages/CyberSecurity/CyberSecurity.jsx
import SEO from "../../components/SEO";
import Logos from "../../components/Logos";
```

### Cross-Page Component Imports
```javascript
// From: src/pages/OneSupport/OneSupport.jsx
import ManagedServices from "../Services/ManagedServices";
import Prices from "../Services/Prices";
import PriceBanner from "../Services/PriceBanner";
```

### Route Definitions
```javascript
// From: src/routes.jsx
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const CyberSecurity = lazy(() => import("./pages/CyberSecurity/CyberSecurity"));
const Home = lazy(() => import("./pages/Home/Home"));
const NetSuite = lazy(() => import("./pages/NetSuite/NetSuite"));
const OneSupport = lazy(() => import("./pages/OneSupport/OneSupport"));
```

## Component Inventory by Page

### Home (5 page-specific components)
- PainPoints
- ServicesTailored
- Stats
- Testimonials
- WhyUs

### CyberSecurity (9 page-specific components)
- ConsultantCredentials
- CyberIntro
- CyberPricing
- DetailedServicesCS
- FeaturesCyber
- PriceMatrix
- TestimonialsCyber
- Logos
- PricingPDF

### NetSuite (5 page-specific components)
- ComparisonTable
- HowWeWork
- NetSuiteAdvantages
- NetSuitePainPoints
- WhyNetSuite

### Services (8 page-specific components)
- AddOns
- FindYourBestValue
- ManagedServices
- OurServices
- PriceBanner
- Prices
- PricesPAYG
- WhyUsServices

### SuiteApps (6 page-specific components)
- SuiteAppExtras
- SuiteAppFeatures
- SuiteAppsAi
- SuiteAppsAutomation
- SuiteAppsFinance
- SuiteAppsQuality

### Web (4 page-specific components)
- Portfolio
- WebPrices
- WebServices
- WebTestimonials

### Rescue (2 page-specific components)
- RescueIsthisyou
- RescuePain

### NetSuiteCostCalc (1 page-specific component)
- NetSuiteCostCalculator

### Simple Pages (no page-specific components)
### About (1 page-specific component)
- Values
### Contact (2 page-specific components)
- HeroContact
- ContactForm
- OneSupport - uses components from Services folder

## Benefits of This Structure

1. **Clear Ownership**: It's immediately obvious which components belong to which page
2. **Easier Navigation**: All related code lives in the same folder - no more hunting through 50+ files
3. **Better Scalability**: As pages grow, their components stay organized in their own namespace
4. **Reduced Confusion**: No more wondering "Is this component shared or page-specific?"
5. **Simplified Imports**: 
   - Local components use `./ComponentName`
   - Shared components use `../../components/ComponentName`
   - Cross-page imports use `../PageName/ComponentName`
6. **Code Colocation**: Related functionality lives together, making refactoring easier
7. **Faster Onboarding**: New developers can quickly understand the project structure

## Guidelines for Future Components

### When to Put a Component in `src/components/`
✅ Used by 2+ pages  
✅ Part of the global layout (Navbar, Footer, Layout)  
✅ Utility components (SEO, ErrorBoundary, ScrollToTop)  
✅ Common UI elements (CallToAction, Testimonials, Stats)  
✅ Shared business logic components (ContactForm, RouteHero)  

### When to Put a Component in `src/pages/[PageName]/`
✅ Only used by one specific page  
✅ Contains page-specific business logic  
✅ Tightly coupled to the page's content/structure  
✅ Named specifically for that page (e.g., `CyberIntro`, `NetSuitePainPoints`, `WebServices`)  

### When to Create a New Page Folder
✅ Adding a new route/page to the application  
✅ The page will have 1+ dedicated components  
✅ You want to keep page logic isolated  

## Special Cases & Patterns

### Simple Pages Without Subfolders
Pages like **Home** only contain a single file because they exclusively use shared components. This is perfectly fine and keeps the structure clean.

### Cross-Page Component Sharing
**OneSupport** page imports components from the **Services** folder. This demonstrates that page-specific components can be shared between related pages without moving them to the global `components/` folder.

### Component Prefixing Convention
Notice that page-specific components often use prefixes to indicate their page:
- `Cyber*` for CyberSecurity page
- `NetSuite*` for NetSuite page
- `Web*` for Web page
- `Rescue*` for Rescue page
- `SuiteApps*` for SuiteApps page

This naming convention makes it easy to identify which page a component belongs to, even if it appears in search results or imports.

## Migration Summary

### What Was Moved
- **46 page-specific components** moved from `src/components/` to their respective page folders
- **11 page files** moved into their own folders for consistency
- **9 shared components** remain in `src/components/`

### Build Status
✅ **Build successful** - All imports updated correctly  
✅ **All routes working** - Lazy loading configured properly  
✅ **No breaking changes** - Application functionality preserved  

## Maintenance Notes

### Adding a New Component
1. Determine if it's page-specific or shared
2. If page-specific, create it in `src/pages/[PageName]/ComponentName.jsx`
3. If shared, create it in `src/components/ComponentName.jsx`
4. Use proper import paths (`./` for local, `../../components/` for shared)

### Moving a Component from Page to Shared
If a page-specific component becomes used by multiple pages:
1. Move it from `src/pages/[PageName]/` to `src/components/`
2. Update all imports to use `../../components/ComponentName`
3. Consider removing any page-specific prefixes from the name if appropriate

### Refactoring a Page
When refactoring a page, all its components are in one folder, making it easy to:
- See all related code at a glance
- Update multiple components together
- Delete unused components with confidence
- Test the page in isolation

## Quick Reference: All Page Folders

```
pages/About/          - 2 files (main + 1 component)
pages/Contact/        - 3 files (main + 2 components)
pages/CyberSecurity/  - 10 files (main + 9 components)
pages/Home/           - 6 files (main + 5 components)
pages/NetSuite/       - 6 files (main + 5 components)
pages/NetSuiteCostCalc/ - 2 files (main + 1 component)
pages/OneSupport/     - 1 file  (OneSupport.jsx)
pages/Rescue/         - 3 files (main + 2 components)
pages/Services/       - 9 files (main + 8 components)
pages/SuiteApps/      - 7 files (main + 6 components)
pages/Web/            - 5 files (main + 4 components)
```

**Total: 54 page files organized across 11 page folders**

---

*Last Updated: Component reorganization completed successfully*
*Build Status: ✅ Passing*
*Structure: Feature-based / Page-based organization*