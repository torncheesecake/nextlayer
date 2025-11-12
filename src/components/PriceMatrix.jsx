'use client';
import { useState } from 'react';
import PricingPDFDownload from './PricingPDF';

function PricingMatrix() {
  const [activeFilter, setActiveFilter] = useState('all');

  const pricingData = [
    {
      category: "External Network Penetration Test",
      service: "network",
      tiers: [
        { 
          tier: "Small", 
          scope: "1-5 IP addresses", 
          days: "1-2 days", 
          priceRange: "£550 - £1,500" 
        },
        { 
          tier: "Medium", 
          scope: "5-20 IP addresses", 
          days: "2-4 days", 
          priceRange: "£1,100 - £3,000" 
        },
        { 
          tier: "Large", 
          scope: "50+ IP addresses/complex", 
          days: "5+ days", 
          priceRange: "£3,500 - £7,500+" 
        }
      ]
    },
    {
      category: "Internal Network Penetration Test",
      service: "network",
      tiers: [
        { 
          tier: "Small", 
          scope: "Up to 20 devices", 
          days: "2-3 days", 
          priceRange: "£1,800 - £3,000" 
        },
        { 
          tier: "Medium", 
          scope: "21-100 devices/segmented VLAN", 
          days: "3-5 days", 
          priceRange: "£2,400 - £5,000" 
        },
        { 
          tier: "Large", 
          scope: "100+ devices/multi-site/complex", 
          days: "5+ days", 
          priceRange: "£4,250 - £10,000+" 
        }
      ]
    },
    {
      category: "Web Application Penetration Test",
      service: "application",
      tiers: [
        { 
          tier: "Small", 
          scope: "Simple, less than 50 pages/basic authentication", 
          days: "3-5 days", 
          priceRange: "£3,000 - £6,000" 
        },
        { 
          tier: "Medium", 
          scope: "E-commerce, multiple user roles, moderate API integration", 
          days: "6-10 days", 
          priceRange: "£6,000 - £12,000" 
        },
        { 
          tier: "Complex", 
          scope: "Large enterprise app, extensive APIs, complex business logic", 
          days: "10+ days", 
          priceRange: "£12,000 - £25,000+" 
        }
      ]
    },
    {
      category: "API Penetration Test",
      service: "application",
      tiers: [
        { 
          tier: "Small", 
          scope: "Up to 10-25 endpoints", 
          days: "2-3 days", 
          priceRange: "£1,200 - £3,000" 
        },
        { 
          tier: "Medium", 
          scope: "26-50 endpoints/multi-environment", 
          days: "3-5 days", 
          priceRange: "£2,600 - £5,000" 
        },
        { 
          tier: "Large", 
          scope: "100+ endpoints/complex architecture", 
          days: "5+ days", 
          priceRange: "£5,000 - £10,000+" 
        }
      ]
    },
    {
      category: "Mobile Application Penetration Test (iOS/Android)",
      service: "application",
      tiers: [
        { 
          tier: "Typical Range", 
          scope: "Depending on complexity, platform diversity, and API integration", 
          days: "4-10 days", 
          priceRange: "£5,000 - £15,000" 
        }
      ]
    },
    {
      category: "Desktop Application Penetration Test",
      service: "application",
      tiers: [
        { 
          tier: "Small to Medium", 
          scope: "Basic functionality", 
          days: "3-7 days", 
          priceRange: "£3,000 - £8,000" 
        },
        { 
          tier: "Complex", 
          scope: "Extensive features, integrations, highly sensitive data", 
          days: "7+ days", 
          priceRange: "£8,000 - £20,000+" 
        }
      ]
    },
    {
      category: "Azure/AWS Cloud Security Review",
      service: "cloud",
      tiers: [
        { 
          tier: "Basic Health Check", 
          scope: "Single account, limited services. Core IAM, basic network security, logging, storage buckets/accounts", 
          days: "3-5 days", 
          priceRange: "£3,000 - £9,000" 
        },
        { 
          tier: "Medium Review", 
          scope: "Multiple accounts, several applications/workloads, CI/CD pipeline. In-depth IAM, network segmentation, encryption, container security, IaC templates", 
          days: "6-12 days", 
          priceRange: "£6,000 - £21,000" 
        },
        { 
          tier: "Comprehensive Audit", 
          scope: "Large enterprise, multi-account, hybrid cloud, compliance-driven. All medium features plus compliance frameworks, incident response, DevSecOps", 
          days: "15+ days", 
          priceRange: "£15,000 - £30,000+" 
        }
      ]
    }
  ];

  const filters = [
    { id: 'all', label: 'All Services' },
    { id: 'network', label: 'Network Testing' },
    { id: 'application', label: 'Application Testing' },
    { id: 'cloud', label: 'Cloud Reviews' }
  ];

  const filteredData = activeFilter === 'all' 
    ? pricingData 
    : pricingData.filter(item => item.service === activeFilter);

  return (
    <div className="p-6 mt-8  -zinc-800 rounded-lg bg-zinc-950">
      <div className="mb-6">
        <h3 className="mb-4 text-xl font-semibold text-white">Detailed Pricing Breakdown</h3>
        
        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeFilter === filter.id
                  ? 'bg-nlc-coral text-white'
                  : 'bg-zinc-900 text-zinc-300  -zinc-800 hover:-nlc-coral'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Jump Anchors */}
      <div className="pb-6 mb-6 -b -zinc-800">
        <p className="mb-3 text-sm text-zinc-400">Quick jump:</p>
        <div className="flex flex-wrap gap-3">
          {filteredData.map((item, index) => (
            <a
              key={index}
              href={`#pricing-${index}`}
              className="text-sm text-nlc-coral hover:text-[#FF5252] hover:underline transition"
            >
              {item.category}
            </a>
          ))}
        </div>
      </div>

      {/* Pricing Tables */}
      <div className="space-y-6">
        {filteredData.map((service, serviceIndex) => (
          <div 
            key={serviceIndex} 
            id={`pricing-${serviceIndex}`}
            className="overflow-hidden bg-black  -zinc-800 rounded-lg"
          >
            <div className="px-6 py-4 bg-zinc-900 -l-4 -nlc-coral">
              <h4 className="text-lg font-semibold text-white">{service.category}</h4>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="sticky top-0 bg-zinc-950">
                  <tr>
                    <th className="w-32 px-6 py-4 text-xs font-semibold tracking-wider text-left text-zinc-400 uppercase">
                      Tier
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-zinc-400 uppercase">
                      Scope
                    </th>
                    <th className="w-32 px-6 py-4 text-xs font-semibold tracking-wider text-left text-zinc-400 uppercase">
                      Duration
                    </th>
                    <th className="w-48 px-6 py-4 text-xs font-semibold tracking-wider text-left text-zinc-400 uppercase">
                      Price Range
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {service.tiers.map((tier, tierIndex) => (
                    <tr key={tierIndex} className="transition hover:bg-zinc-900">
                      <td className="px-6 py-4 text-sm font-medium text-white align-top">
                        {tier.tier}
                      </td>
                      <td className="px-6 py-4 text-sm text-zinc-400 align-top">
                        {tier.scope}
                      </td>
                      <td className="px-6 py-4 text-sm text-zinc-400 align-top">
                        {tier.days}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold align-top text-nlc-coral">
                        {tier.priceRange}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      {/* Download Section - UPDATED */}
      <div className="pt-6 mt-8 text-center -t -zinc-800">
        <p className="mb-4 text-sm text-zinc-400">
          Need a PDF version for your procurement team?
        </p>
        <PricingPDFDownload pricingData={pricingData} />
      </div>
    </div>
  );
}

export default PricingMatrix;
