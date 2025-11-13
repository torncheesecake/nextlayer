export default function CyberIntro() {
  return (
    <section
      className="bg-techblack relative z-40 mx-auto flex w-[90%] max-w-7xl flex-col-reverse items-center gap-10 px-6 py-32 lg:flex-row lg:gap-20"
      id="features"
    >
      {/* Left column */}
      <div className="flex-1">
        <h2 className="text-seasalt mb-10 text-5xl font-extrabold md:text-5xl">
          Proactive security that protects what matters
        </h2>
        <p className="text-seasalt/90 mb-8 text-lg leading-relaxed">
          We believe every business deserves confidence in their digital
          security, without the confusion. That's why we deliver rigorous,
          real-world penetration testing that identifies vulnerabilities before
          attackers exploit them, protecting your critical assets, data, and
          reputation
        </p>
        <ul className="text-seasalt mb-12 space-y-5 text-lg">
          <li className="flex items-center">
            <span className="bg-seasalt mr-3 inline-block h-2 w-2 rounded-full" />
            Schedule your security assessment in minutes
          </li>
          <li className="flex items-center">
            <span className="bg-seasalt mr-3 inline-block h-2 w-2 rounded-full" />
            Receive clear, actionable findings, no technical jargon
          </li>
          <li className="flex items-center">
            <span className="bg-seasalt mr-3 inline-block h-2 w-2 rounded-full" />
            Fix vulnerabilities with expert guidance, verification included
          </li>
          <li className="flex items-center">
            <span className="bg-seasalt mr-3 inline-block h-2 w-2 rounded-full" />
            Work with CHECK-accredited NCSC consultants
          </li>
        </ul>
        <a
          href="/contact"
          className="bg-bittersweet-dark2 text-seasalt inline-block rounded-full px-8 py-4 text-lg font-semibold tracking-wide uppercase shadow-sm transition hover:bg-bittersweet-dark1"
        >
          Start your security review
        </a>
      </div>

      {/* Right column */}
      <div className="flex-1">
        <div className="rounded-2xl bg-linear-to-br from-graphite via-techblack to-pureblack p-10 shadow-xl border border-seasalt/10">
          {/* Terminal headline */}
          <div className="text-seasalt mb-6 overflow-x-auto font-mono text-lg whitespace-nowrap">
            $ nlc-security --scope comprehensive --target your-business
          </div>

          {/* Assessment coverage list */}
          <ul className="mb-10 space-y-4">
            <li className="text-seasalt flex items-center gap-3 text-lg">
              <span className="bg-seasalt/90 flex h-5 w-5 items-center justify-center rounded-full shrink-0">
                <svg
                  width={18}
                  height={18}
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-techblack"
                >
                  <circle cx="12" cy="12" r="12" fill="currentColor" />
                  <path
                    d="M8 12.5l3 3 5-6"
                    stroke="#0a0a0a"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Infrastructure, internal and external testing
            </li>
            <li className="text-seasalt flex items-center gap-3 text-lg">
              <span className="bg-seasalt/90 flex h-5 w-5 items-center justify-center rounded-full shrink-0">
                <svg
                  width={18}
                  height={18}
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-techblack"
                >
                  <circle cx="12" cy="12" r="12" fill="currentColor" />
                  <path
                    d="M8 12.5l3 3 5-6"
                    stroke="#0a0a0a"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Web apps, APIs, and mobile platforms
            </li>
            <li className="text-seasalt flex items-center gap-3 text-lg">
              <span className="bg-seasalt/90 flex h-5 w-5 items-center justify-center rounded-full shrink-0">
                <svg
                  width={18}
                  height={18}
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-techblack"
                >
                  <circle cx="12" cy="12" r="12" fill="currentColor" />
                  <path
                    d="M8 12.5l3 3 5-6"
                    stroke="#0a0a0a"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Azure and AWS cloud security reviews
            </li>
            <li className="text-seasalt flex items-center gap-3 text-lg">
              <span className="bg-seasalt/90 flex h-5 w-5 items-center justify-center rounded-full shrink-0">
                <svg
                  width={18}
                  height={18}
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-techblack"
                >
                  <circle cx="12" cy="12" r="12" fill="currentColor" />
                  <path
                    d="M8 12.5l3 3 5-6"
                    stroke="#0a0a0a"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Compliance-focused reporting (GDPR, ISO 27001)
            </li>
          </ul>

          <div className="bg-techblack/80 rounded-lg p-6 border border-seasalt/20">
            <div className="text-seasalt/70 font-mono text-sm mb-3">
              Assessment Output
            </div>
            <div className="text-seasalt font-mono text-base space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Critical vulnerabilities identified</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Clear remediation steps provided</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Follow-up verification scheduled</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400">→</span>
                <span className="text-seasalt/80">
                  Compliance documentation ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
