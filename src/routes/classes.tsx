import { createFileRoute, Link } from "@tanstack/react-router";
import { Smartphone, Clock, Car, ArrowUpRight } from "lucide-react";
import { EXT, W, InnerPage, PageHero, EventsSection, Faq, Reveal, Doodle, ILL } from "@/components/site";

const HERO = `${W}bdf789_2aa40bbe43ca4ce7bb61352908eeda16~mv2.jpg`;

export const Route = createFileRoute("/classes")({
  head: () => ({
    meta: [
      { title: "Classes & Events | Salty Dog Yoga & Surf, Carolina Beach NC" },
      { name: "description", content: "Mat classes for ALL levels — Pilates, Barre, Yoga & Meditations in Carolina Beach, NC. View our daily class schedule and upcoming workshops and wellness courses." },
      { property: "og:title", content: "Classes & Events | Salty Dog Yoga & Surf, Carolina Beach NC" },
      { property: "og:description", content: "Mat classes for ALL levels — Pilates, Barre, Yoga & Meditations in Carolina Beach, NC." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: HERO },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: ClassesPage,
});

const CHIPS = [
  ["Memberships", "/memberships"],
  ["Privates", "/private-sessions"],
  ["Retreats", "/retreats"],
  ["Pilates Reformer", "/core-reformer"],
] as const;

const WEEK = [
  { day: "Mon", cls: ["9:00 AM · Mat Pilates", "6:00 PM · Yoga Flow"] },
  { day: "Tue", cls: ["9:00 AM · Barre", "5:30 PM · Restorative Yoga"] },
  { day: "Wed", cls: ["9:00 AM · Mat Pilates", "6:00 PM · Beach Yoga"] },
  { day: "Thu", cls: ["9:00 AM · Yoga Flow", "5:30 PM · Barre"] },
  { day: "Fri", cls: ["9:00 AM · Mat Pilates", "12:00 PM · Lunch Flow"] },
  { day: "Sat", cls: ["9:00 AM · Beach Yoga", "10:30 AM · Vinyasa"] },
  { day: "Sun", cls: ["10:00 AM · Slow Flow"] },
];

const INFO = [
  { icon: Smartphone, title: "Download the Momence App", text: "Download the Momence App for iOS or Android for the best experience on mobile." },
  { icon: Clock, title: "Arrive a few minutes early", text: "Please arrive a few minutes before class time as doors will be locked at class start time." },
  { icon: Car, title: "Parking", text: "Additional parking is located around the back of the building near Bowman's seafood." },
];

function ClassesPage() {
  return (
    <InnerPage>
      <PageHero img={HERO} alt="Mat Pilates and yoga class at Salty Dog Yoga & Surf in Carolina Beach, NC" title="classes & events">
        <p className="mt-6 max-w-xl text-lg text-cream/85">
          Salty Dog Yoga offers a variety of mat classes for ALL levels including Pilates, Barre, Yoga &amp; Meditations. Explore our daily class schedule below, as well as our upcoming workshops and wellness courses.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {CHIPS.map(([label, to]) => (
            <Link key={to} to={to} className="rounded-full border border-cream/50 px-4 py-1.5 text-sm text-cream transition hover:border-coral hover:bg-coral hover:text-cream">
              {label}
            </Link>
          ))}
        </div>
      </PageHero>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="relative">
            <Doodle src={ILL.waves} className="-top-10 right-4 w-24 rotate-6 opacity-90" />
            <p className="eyebrow text-coral">plan your week</p>
            <h2 className="headline mt-3 text-5xl md:text-7xl">daily schedule</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              This calendar includes classes, workshops and courses. Please keep in mind only classes are covered by memberships. Thank you!
            </p>
          </Reveal>
          <Reveal delay={100} className="mt-10 rounded-xl border-2 border-dashed border-input bg-cream p-6 md:p-10">
            <p className="mb-8 text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">Momence class schedule (embedded in Wix)</p>
            <p className="mb-6 text-center text-sm text-muted-foreground">Sample week view</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
              {WEEK.map((d) => (
                <div key={d.day} className="rounded-lg bg-sand p-3">
                  <div className="headline mb-3 text-xl">{d.day}</div>
                  <div className="space-y-2">
                    {d.cls.map((c) => (
                      <div key={c} className="rounded-md bg-cream px-3 py-2 text-xs leading-snug shadow-sm">{c}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5">
        <EventsSection count={6} />
      </div>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <h2 className="headline text-5xl md:text-7xl">before you come</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {INFO.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="lift h-full rounded-lg bg-cream p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-seafoam text-navy"><c.icon className="h-5 w-5" /></span>
                  <h3 className="mt-4 font-serif text-xl">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-6">
            <div className="lift flex flex-col items-start justify-between gap-4 rounded-lg bg-navy p-8 text-cream sm:flex-row sm:items-center">
              <div>
                <h3 className="headline text-3xl">drop-ins welcome</h3>
                <p className="mt-2 text-cream/80">Book online, drop in anytime. <span className="text-seafoam">In studio mat class $18 · Beach yoga $15</span></p>
              </div>
              <Link to="/memberships" className="btn btn-coral shrink-0">See Passes &amp; Memberships <ArrowUpRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Faq items={[
        { q: "Do I need experience?", a: "Not at all! Our mat classes are for ALL levels. Teachers offer options and modifications so you can move at your own pace — come as a student, leave as a friend." },
        { q: "What should I bring?", a: "Just yourself and some water. Mats and props are available at the studio, and beach yoga needs only a towel or beach chair." },
        { q: "Where do I park?", a: "Park in front of the studio on N Lake Park Blvd, or use the additional parking around the back of the building near Bowman's seafood." },
        { q: "Can I drop in?", a: "Yes! In studio mat classes are $18 and beach yoga is $15. Reformer equipment classes require advance booking — see our Core Reformer page." },
      ]} />
    </InnerPage>
  );
}
