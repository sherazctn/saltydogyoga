import { createFileRoute, Link } from "@tanstack/react-router";
import { Plane, CalendarDays, BedDouble, UtensilsCrossed } from "lucide-react";
import { EXT, W, InnerPage, PageHero, Reveal, Doodle, ILL } from "@/components/site";

const HERO = `${W}bdf789_af7da5f3a17f4cc89ffab9e2d3ee4d62~mv2.jpg`;

export const Route = createFileRoute("/retreats")({
  head: () => ({
    meta: [
      { title: "Yoga & Surf Retreats | Salty Dog Yoga & Surf, Carolina Beach NC" },
      { name: "description", content: "Yoga, surf and travel retreats hosted by Salty Dog Yoga & Surf. Unplug, unwind and adventure with us — from the NC coast to international shores." },
      { property: "og:title", content: "Yoga & Surf Retreats | Salty Dog Yoga & Surf, Carolina Beach NC" },
      { property: "og:description", content: "Unplug, unwind and adventure with us — yoga, surf and travel retreats." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: HERO },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: RetreatsPage,
});

const PERKS = [
  { icon: Plane, t: "Handpicked locations — from our own Carolina Beach coast to international shores." },
  { icon: CalendarDays, t: "Daily yoga and movement — move with purpose every day." },
  { icon: BedDouble, t: "Beautiful accommodations where you can unplug and unwind." },
  { icon: UtensilsCrossed, t: "Delicious meals, local culture and salty adventures with new friends." },
];

function RetreatsPage() {
  return (
    <InnerPage>
      <PageHero img={HERO} alt="Yoga retreat by the ocean hosted by Salty Dog Yoga & Surf" title="retreats">
        <p className="mt-6 max-w-xl text-lg text-cream/85">
          Unplug, unwind and adventure with us. From weekend getaways on the NC coast to international escapes, Salty Dog retreats are salty in the best way.
        </p>
      </PageHero>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow text-coral">why retreat with us?</p>
              <h2 className="headline mt-3 text-4xl md:text-6xl">salty in the best way</h2>
              <ul className="mt-8 space-y-4">
                {PERKS.map((p) => (
                  <li key={p.t} className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-seafoam text-navy"><p.icon className="h-4 w-4" /></span>
                    <p className="pt-2 text-sm leading-relaxed text-muted-foreground">{p.t}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Doodle src={ILL.waves} className="-top-10 right-4 w-24 rotate-6 opacity-90" />
              <img src={HERO} alt="Salty Dog yoga retreat by the sea" className="lift aspect-[4/3] w-full rounded-lg object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="relative overflow-hidden rounded-xl bg-navy p-8 text-center text-cream md:p-16">
            <Doodle src={ILL.starfish} className="left-8 top-8 w-14 rotate-12" />
            <p className="eyebrow text-seafoam">upcoming retreats</p>
            <h2 className="headline mt-3 text-4xl md:text-6xl">where to next?</h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/80">
              New retreats are announced to our email list first. Sign up below to be the first to know where we're headed.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/classes" className="btn btn-coral">View Events</Link>
              <a href="#newsletter" className="btn btn-outline-light">Join the Email List</a>
            </div>
          </Reveal>
        </div>
      </section>
    </InnerPage>
  );
}
