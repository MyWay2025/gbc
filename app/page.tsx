export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="w-full border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <img src="/logo.png" alt="GBC Sydney" className="h-14 w-auto" />

          <nav className="hidden gap-10 text-sm font-semibold text-slate-800 md:flex">
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#delegation">Trade Delegation</a>
            <a href="#director">Director</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative w-full bg-white">
        <img
          src="/delegation-banner.png"
          alt="2026 Gyeonggi Trade Delegation to Sydney"
          className="block w-full"
        />

        <a
          href="#delegation"
          aria-label="View Trade Delegation"
          className="absolute left-[3%] top-[67%] h-[8%] w-[20%] rounded-xl"
        />

        <a
          href="#contact"
          aria-label="Contact GBC Sydney"
          className="absolute left-[25%] top-[67%] h-[8%] w-[18%] rounded-xl"
        />
      </section>

      <section id="programs" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">Our Programs</p>
          <h2 className="mb-5 text-4xl font-bold">What We Do</h2>
          <p className="mb-12 max-w-2xl text-lg leading-8 text-slate-600">
            GBC Sydney provides practical support for Gyeonggi companies entering and growing in the Australian market.
          </p>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {[
              ["Buyer Matching", "Identify and connect with Australian buyers, distributors and importers."],
              ["Trade Delegation", "Coordinate programs, buyer meetings, site visits and networking opportunities."],
              ["Market Testing", "Support product feedback, pricing review and early-stage market validation."],
              ["Business Meetings", "Arrange online and offline meetings with Australian buyers."],
              ["Local Network", "Work with councils, industry groups and business communities."],
              ["Follow-up Support", "Support post-meeting communication and next-step coordination."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-bold">{title}</h3>
                <p className="text-sm leading-6 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="delegation" className="bg-[#071A4D] px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-sky-300">Trade Delegation</p>
            <h2 className="mb-6 text-4xl font-bold">Gyeonggi Trade Delegation Sydney Program</h2>
            <p className="text-lg leading-8 text-slate-300">
              GBC Sydney is preparing a Sydney-based business program for selected Gyeonggi companies,
              including buyer meetings, local business briefings and market development activities.
            </p>
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

      <section id="about" className="bg-slate-50 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">About GBC Sydney</p>
            <h2 className="mb-6 text-4xl font-bold">Practical market support for Gyeonggi exporters</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>GBC Sydney operates as a local business development platform for Gyeonggi companies seeking opportunities in Australia.</p>
            <p>The centre focuses on buyer outreach, product introductions, meeting coordination, trade delegation support and follow-up communication with Australian partners.</p>
          </div>
        </div>
      </section>

      <section id="director" className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-[380px_1fr] md:p-12">
          <div className="overflow-hidden rounded-3xl bg-slate-100">
            <img src="/director.jpg" alt="James Choi" className="h-[460px] w-full object-cover object-top" />
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">Centre Director</p>
            <h2 className="mb-2 text-4xl font-bold">James Choi</h2>
            <p className="mb-6 text-xl font-semibold text-slate-700">Director, GBC Sydney</p>
            <p className="max-w-3xl text-lg leading-8 text-slate-600">
              James Choi leads GBC Sydney’s local business development activities, supporting Gyeonggi companies with Australian buyer discovery, trade meetings, market testing, delegation programs and follow-up coordination with local partners.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-100 px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-3xl bg-white p-10 shadow-sm md:p-14">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">Contact</p>
          <h2 className="mb-6 text-4xl font-bold">Connect with GBC Sydney</h2>

          <div className="grid gap-6 text-lg md:grid-cols-3">
            <p><strong>Email</strong><br />info@gbcsydney.com.au</p>
            <p><strong>Location</strong><br />Sydney, Australia</p>
            <p><strong>Focus</strong><br />Australia market entry and buyer development</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#071A4D] px-6 py-8 text-center text-sm text-slate-300">
        © 2026 GBC Sydney. All rights reserved.
      </footer>
    </main>
  );
}