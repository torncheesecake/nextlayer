export default function CyberIntro() {
  return (
    <section
      className="flex flex-col-reverse items-center gap-20 px-8 mx-auto -b -coal max-w-7xl py-28 md:flex-row"
      id="features"
    >
      <div className="flex-1">
        <h2 className="text-5xl font-extrabold text-seasalt mb-9 md:text-5xl">Security integrated into your workflow</h2>
        <ul className="mb-10 space-y-5 text-lg text-seasalt">
          <li><i className="mr-3 text-seasalt bi bi-check2-circle"></i> Book a threat assessment call in minutes</li>
          <li><i className="mr-3 text-seasalt bi bi-check2-circle"></i> Get a scoped, jargon-free strategy</li>
          <li><i className="mr-3 text-seasalt bi bi-check2-circle"></i> Fix, proof and verify - no guesswork left behind</li>
        </ul>
        <a href="/contact" className="px-6 py-3 text-lg  rounded-lg bg-techblack text-seasalt -coal hover:-nlc-blue"
          >Start your review</a
        >
      </div>
      <div className="flex-1 max-w-xl">
        <div className="p-8 shadow-xl rounded-2xl bg-gradient-to-br from-techblack via-zinc-900 to-black">
          {/* Terminal style headline */}
          <div className="mb-4 overflow-x-auto font-mono text-lg text-seasalt whitespace-nowrap">
            $ nlc-pentest run --target nextlayerconsulting.com
          </div>

          {/* Ticks list styled with Bootstrap icons, coral color */}
          <ul className="mb-8 space-y-4">
            <li className="flex items-center gap-3 text-lg text-seasalt">
              <i className="text-2xl bi bi-check-circle-fill text-nlc-blue"></i>
              External &amp; internal attack simulated
            </li>
            <li className="flex items-center gap-3 text-lg text-seasalt">
              <i className="text-2xl bi bi-check-circle-fill text-nlc-blue"></i>
              All critical issues delivered as code
            </li>
            <li className="flex items-center gap-3 text-lg text-seasalt">
              <i className="text-2xl bi bi-check-circle-fill text-nlc-blue"></i>
              Remediation workflow starts
            </li>
            <li className="flex items-center gap-3 text-lg text-seasalt">
              <i className="text-2xl bi bi-check-circle-fill text-nlc-blue"></i>
              Follow-up review included
            </li>
          </ul>
          <pre className="max-w-full p-4 mt-2 overflow-x-auto font-mono text-base break-words whitespace-pre-wrap  rounded bg-techblack text-seasalt -coal">
                {`# Audit your attack surface automatically
              import nmap

              scanner = nmap.PortScanner()
              target = 'nextlayerconsulting.com'

              scanner.scan(target, arguments='-T4 -A --top-ports 50')
              vuln_ports = [port for port in scanner[target]['tcp']
                            if scanner[target]['tcp'][port]['state'] == 'open']

              if vuln_ports:
                  print(f"Open ports found: {vuln_ports}")
                  print("Critical risks found, see dashboard for details.")
              else:
                  print("All clear. No critical open ports found.")
              `}
              </pre>

        </div>
      </div>
    </section>
  )
}
