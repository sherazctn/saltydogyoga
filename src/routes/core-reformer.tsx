import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Footprints, Clock, Timer, ShieldCheck, Users, SprayCan } from "lucide-react";
import { EXT, W, M, G, InnerPage, PageHero, Reveal, Doodle, ILL, Faq } from "@/components/site";

const HERO = `${W}be5110_168048bef2dc4e58863152c92f6a5fdd~mv2.jpg`;

export const Route = createFileRoute("/core-reformer")({
  head: () => ({
    meta: [
      { title: "Salty Core Reformer Pilates | Salty Dog Yoga & Surf, Carolina Beach NC" },
      { name: "description", content: "Boutique Pilates reformer classes in Carolina Beach, NC. Group reformer pricing, private & duet equipment sessions, policies and FAQs. Move with purpose. Stay salty." },
      { property: "og:title", content: "Salty Core Reformer Pilates | Salty Dog Yoga & Surf, Carolina Beach NC" },
      { property: "og:description", content: "Boutique reformer classes to strengthen your core and feed your soul." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: HERO },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: CoreReformerPage,
});

type Plan = {
  name: string; price: string; per?: string; note?: string; badge?: string;
  cta: string; url?: string; to?: string;
};

const GROUP_A: Plan[] = [
  { name: "Drop In", price: "$36", per: "per class", note: "Book from the class schedule. We won't have spots open for walk-ins who just show up and want to pay.", cta: "Book a Class", to: "/classes" },
  { name: "New Student Teaser", price: "$79", per: "3 reformer equipment classes", note: "6 month expiration.", cta: "Get the Teaser!", url: M.teaser },
  { name: "Core Club", price: "$108", per: "per month", note: "4 classes a month, autodraft, 3 month commitment.", cta: "Join the Crew", url: M.coreClub },
  { name: "Core Club AF", price: "$208", per: "per month", note: "8 classes a month, autodraft, 3 month commitment.", badge: "Best value", cta: "Join the Crew", url: M.coreClubAF },
  { name: "10 Class Pass", price: "$300", per: "6 month expiration", cta: "Stock Up", url: M.reformer10 },
  { name: "20 Class Friends & Family Pass", price: "$590", per: "1 year expiration", cta: "Book Now", to: "/classes" },
];

const PRIVATES: [string, string, string][] = [
  ["Private Equipment Session", "50 minutes", "$85"],
  ["Intro Package of 3", "", "$195"],
  ["5 Session Package", "", "$375"],
  ["Private Session", "30 minutes", "$45"],
  ["Duet Session (you and your bestie)", "50 minutes", "$55 per person"],
  ["Duet 5 Pack", "", "$250 per person"],
  ["Group Private Session", "50 minutes", "Price on request · between 3 and 6 people, classical and circuit options available"],
];

const POLICIES = [
  { icon: GraduationCap, text: "New clients must complete at least one Classical Reformer or private class before joining Reformer Circuits." },
  { icon: Footprints, text: "Pilates grip socks are required at all times for safety and hygiene." },
  { icon: Clock, text: "Cancellations must be made at least 12 hours before class to receive credit." },
  { icon: Timer, text: "Classes begin promptly; late arrivals will forfeit their class credit." },
  { icon: ShieldCheck, text: "Clients must follow instructor guidance to ensure equipment use and prevent injury." },
  { icon: Users, text: "A minimum of 2 participants is required; classes with fewer sign-ups may be cancelled." },
  { icon: SprayCan, text: "Please clean equipment after use with the provided products." },
];

function PlanCard({ p, delay }: { p: Plan; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="lift relative flex h-full flex-col rounded-lg bg-cream p-7">
        {p.badge && <span className="absolute right-4 top-4 rounded-full bg-coral px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cream">{p.badge}</span>}
        <h3 className="headline pr-16 text-2xl">{p.name}</h3>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="headline text-5xl">{p.price}</span>
          {p.per && <span className="text-sm text-muted-foreground">{p.per}</span>}
        </div>
        {p.note && <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.note}</p>}
        {p.to ? (
          <Link to={p.to} className="btn btn-coral mt-6 w-full">{p.cta}</Link>
        ) : (
          <a href={p.url} {...EXT} className="btn btn-coral mt-6 w-full">{p.cta}</a>
        )}
      </div>
    </Reveal>
  );
}

function CoreReformerPage() {
  return (
    <InnerPage>
      <PageHero img={HERO} alt="Pilates reformer class at Salty Core Reformer in Carolina Beach, NC" title="salty core reformer">
        <p className="mt-4 max-w-xl text-xl text-cream/90">Boutique reformer classes to strengthen your core and feed your soul.</p>
        <p className="mt-2 font-serif italic text-seafoam">Move with purpose. Strengthen your core. Stay salty.</p>
      </PageHero>

      <section className="grain py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2">
          <Reveal className="relative">
            <Doodle src={ILL.waves} className="-top-10 left-4 w-24 -rotate-6 opacity-90" />
            <p className="eyebrow text-coral">the equipment</p>
            <h2 className="headline mt-3 text-4xl md:text-6xl">core reformer equipment</h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Our Pilates Reformer training is done using a reformer machine and Pilates chair. The machine uses springs and pulleys to help customize the exercise to the needs of the individual. Pilates reformer work is ideal for building and toning muscles as well as increasing stability.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <img src={`${W}bdf789_7d4d52527e9042b3932da43f9f506ceb~mv2.jpeg`} alt="Pilates reformer machine at Salty Core Reformer studio in Carolina Beach" className="lift aspect-[4/3] w-full rounded-lg object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <p className="eyebrow text-coral">pricing</p>
            <h2 className="headline mt-3 text-5xl md:text-7xl">group reformer classes</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {GROUP_A.map((p, i) => <PlanCard key={p.name} p={p} delay={(i % 3) * 100} />)}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="grid items-center gap-10 rounded-xl bg-navy p-8 text-cream md:p-12 lg:grid-cols-2">
            <img src={`${W}bdf789_2d898fee00d94e42a5b77a37387428ea~mv2.jpg`} alt="Private Pilates equipment session on the reformer in Carolina Beach" className="lift aspect-[4/3] w-full rounded-lg object-cover" />
            <div>
              <p className="eyebrow text-seafoam">one on one</p>
              <h2 className="headline mt-3 text-4xl md:text-6xl">private &amp; duet sessions</h2>
              <p className="mt-3 font-serif italic text-cream/80">Because sometimes you want it all to yourself.</p>
              <ul className="mt-8 divide-y divide-cream/10 text-sm">
                {PRIVATES.map(([n, dur, price]) => (
                  <li key={n} className="flex items-start justify-between gap-4 py-3">
                    <span>{n}{dur && <span className="block text-cream/60">{dur}</span>}</span>
                    <span className="shrink-0 font-semibold text-seafoam">{price}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href={G.pilatesForm} {...EXT} className="btn btn-coral">Request a Private Session</a>
                <a href="mailto:info@saltydogyogasurf.com?subject=Group%20Private%20Reformer%20Session" className="text-sm underline underline-offset-4 hover:text-coral">Ask about group privates</a>
              </div>
            </div>
          </Reveal>
          <p className="mt-8 text-center text-sm text-muted-foreground">All sales final and nontransferable.</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal>
            <h2 className="headline text-center text-4xl md:text-6xl">pilates policies &amp; reminders</h2>
          </Reveal>
          <Reveal delay={100} className="mt-10 grid gap-4 sm:grid-cols-2">
            {POLICIES.map((p) => (
              <div key={p.text} className="flex gap-4 rounded-lg bg-cream p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-seafoam text-navy"><p.icon className="h-4 w-4" /></span>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <Faq items={[
        { q: "What is Pilates reformer?", a: "Pilates reformer training is done using a reformer machine and Pilates chair. The machine uses springs and pulleys to customize each exercise to the individual — ideal for building and toning muscles and increasing stability." },
        { q: "Do I need experience?", a: "New clients should complete at least one Classical Reformer or private class before joining Reformer Circuits. After that, all levels are welcome!" },
        { q: "What should I wear?", a: "Comfortable workout clothing and Pilates grip socks, which are required at all times for safety and hygiene." },
        { q: "What is the cancellation policy?", a: "Cancellations must be made at least 12 hours before class to receive credit. Classes begin promptly; late arrivals will forfeit their class credit." },
      ]} />
    </InnerPage>
  );
}
