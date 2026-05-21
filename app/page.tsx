export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="fixed top-0 z-50 w-full border-b border-white/20 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-xl font-bold tracking-wide text-white">GBC Sydney</div>
            <div className="text-xs text-slate-300">Gyeonggi Business Centre Australia</div>
          </div>
          <nav className="hidden gap-8 text-sm text-slate-200 md:flex">
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#delegation">Trade Delegation</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[url('/delegation-banner.jpg')] bg-cover bg-center opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/20" />

        <div className="relative mx-auto max-w-7xl px-6 pt-24">
          <div className="max-w-3xl">
            <p className="mb-5 inline-block rounded-full border border-sky-300/40 bg-sky-300/10 px-4 py-2 text-sm font-medium text-sky-100">
              2026 Gyeonggi Trade Delegation to Sydney
            </p>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
              Connecting Gyeonggi Companies with the Australian Market
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-200">
              GBC Sydney supports Korean SMEs from Gyeonggi Province through buyer discovery,
              trade meetings, market testing, local networking and business development in Australia.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#delegation" className="rounded-full bg-sky-500 px-7 py-3 font-semibold text-white hover:bg-sky-400">
                View Trade Delegation
              </a>
              <a href="#contact" className="rounded-full border border-white/40 px-7 py-3 font-semibold text-white hover:bg-white hover:text-slate-950">
                Contact GBC Sydney
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-sky-600">About GBC Sydney</p>
            <h2 className="mb-6 text-4xl font-bold">Practical market support for Gyeonggi exporters</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              GBC Sydney operates as a local business development platform for Gyeonggi companies
              seeking opportunities in Australia.
            </p>
            <p>
              The centre focuses on practical market entry work including buyer outreach, product
              introductions, meeting coordination, trade delegation support and follow-up communication
              with Australian importers, distributors and industry partners.
            </p>
          </div>
        </div>
      </section>

      <section id="programs" className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-sky-600">Programs</p>
          <h2 className="mb-12 text-4xl font-bold">What We Do</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Buyer Matching", "Identify and approach relevant Australian buyers, distributors, importers and local business partners."],
              ["Trade Delegation", "Coordinate local programs, buyer meetings, site visits and networking opportunities for visiting Gyeonggi companies."],
              ["Market Testing", "Support product feedback, small-lot testing, pricing review, MOQ discussion and early-stage market validation."],
              ["Business Meetings", "Arrange online and offline meetings between Korean companies and Australian buyers."],
              ["Local Network", "Work with councils, industry groups, chambers and business communities to expand market access."],
              ["Follow-up Support", "Support post-meeting communication, sample discussions, quotation review and next-step coordination."]
            ].map(([title, desc], index) => (
              <div key={title} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <div className="mb-6 text-4xl font-bold text-sky-500">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="mb-4 text-2xl font-bold">{title}</h3>
                <p className="leading-7 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="delegation" className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-sky-300">Trade Delegation</p>
            <h2 className="mb-6 text-4xl font-bold">Gyeonggi Trade Delegation Sydney Program</h2>
            <p className="mb-8 text-lg leading-8 text-slate-300">
              GBC Sydney is preparing a Sydney-based business program for selected Gyeonggi companies,
              including buyer meetings, local business briefings and market development activities.
            </p>
            <a href="#contact" className="inline-block rounded-full bg-white px-7 py-3 font-semibold text-slate-950">
              Request Program Information
            </a>
          </div>

          <div className="rounded-3xl bg-white/10 p-8 ring-1 ring-white/15">
            <h3 className="mb-6 text-2xl font-bold">Program Focus</h3>
            <ul className="space-y-4 text-slate-200">
              <li>• Australian buyer recruitment and meeting coordination</li>
              <li>• Product introduction and market feedback collection</li>
              <li>• Local council and business network engagement</li>
              <li>• Distributor, wholesaler and importer outreach</li>
              <li>• Follow-up support after business meetings</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-sky-600">Market Sectors</p>
          <h2 className="mb-12 text-4xl font-bold">Key Areas of Interest</h2>

          <div className="grid gap-6 md:grid-cols-4">
            {["Food & Beverage", "Beauty & Cosmetics", "Consumer Goods", "Industrial Products"].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-100 px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-3xl bg-white p-10 shadow-sm md:p-14">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-sky-600">Contact</p>
              <h2 className="mb-6 text-4xl font-bold">Connect with GBC Sydney</h2>
              <p className="text-lg leading-8 text-slate-600">
                For buyer meetings, trade delegation enquiries, Gyeonggi company introductions or local
                collaboration opportunities, please contact GBC Sydney.
              </p>
            </div>
            <div className="space-y-4 text-lg">
              <p><strong>Email:</strong> info@gbcsydney.com.au</p>
              <p><strong>Location:</strong> Sydney, Australia</p>
              <p><strong>Focus:</strong> Australia market entry and buyer development</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 GBC Sydney. Gyeonggi Business Centre Australia.
      </footer>
    </main>
  );
}