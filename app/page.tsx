import { site, sessions, testimonials } from "../content";

export default function Home() {
  return (
    <main>
      <header className="bg-green-900 px-5 pb-14 pt-16 text-white">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-lime-300">Pickleball coaching</p>
          <h1 className="mt-2 text-4xl font-bold leading-tight sm:text-5xl">{site.name}</h1>
          <p className="mt-4 text-lg text-green-100">{site.tagline}</p>
          <a
            href="#book"
            className="mt-8 inline-block rounded-full bg-lime-400 px-7 py-3.5 text-lg font-semibold text-green-950 active:bg-lime-500"
          >
            Book a session
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-2xl px-5 py-12">
        <h2 className="text-2xl font-bold">About me</h2>
        <p className="mt-3 text-lg leading-relaxed text-stone-700">{site.about}</p>
        <p className="mt-3 text-stone-600">📍 {site.location}</p>
      </section>

      <section className="mx-auto max-w-2xl px-5 pb-12">
        <h2 className="text-2xl font-bold">Sessions</h2>
        <ul className="mt-4 space-y-3">
          {sessions.map((s) => (
            <li key={s.name} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold">{s.name}</h3>
                <span className="whitespace-nowrap font-bold text-green-800">{s.price}</span>
              </div>
              <p className="text-sm text-stone-500">{s.length}</p>
              <p className="mt-2 text-stone-700">{s.details}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-2xl px-5 pb-12">
        <h2 className="text-2xl font-bold">What players say</h2>
        {testimonials.map((t, i) => (
          <blockquote key={i} className="mt-4 border-l-4 border-lime-400 pl-4 text-stone-700">
            “{t.quote}”{t.name && <footer className="mt-1 text-sm text-stone-500">— {t.name}</footer>}
          </blockquote>
        ))}
      </section>

      <section id="book" className="bg-green-900 px-5 py-12 text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold">Book a session</h2>
          <p className="mt-3 text-lg text-green-100">{site.bookingNote}</p>
          <p className="mt-2 text-green-200">{site.contactNote}</p>
        </div>
      </section>

      <footer className="px-5 py-6 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </main>
  );
}
