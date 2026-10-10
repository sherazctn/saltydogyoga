import { createFileRoute } from "@tanstack/react-router";
import { EXT, InnerPage, PageHero, SaltyTVBand, Reveal, Doodle, ILL } from "@/components/site";

export const Route = createFileRoute("/salty-tv")({
  head: () => ({
    meta: [
      { title: "Salty TV — On Demand Classes | Salty Dog Yoga & Surf, Carolina Beach NC" },
      { name: "description", content: "Salty TV is our on-demand video library of yoga, Pilates and barre classes. Practice with Salty Dog anywhere, anytime. Already a member? Log in to watch." },
      { property: "og:title", content: "Salty TV — On Demand Classes | Salty Dog Yoga & Surf, Carolina Beach NC" },
      { property: "og:description", content: "On-demand yoga, Pilates and barre classes — practice with Salty Dog anywhere, anytime." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SaltyTvPage,
});

const FEATURES = [
  { h: "Practice anywhere", t: "Stream classes on your phone, tablet, laptop or TV — at home, on vacation or on the beach (just don't get sand in your mat)." },
  { h: "Your pace, your place", t: "Choose class lengths and styles that fit your day, from quick flows to full-length mat Pilates and barre sessions." },
  { h: "New classes added", t: "Our library keeps growing, so there's always something new to flow along with." },
];

function SaltyTvPage() {
  return (
    <InnerPage>
      <PageHero img={`${W}bdf789_e9b1e65802ee470ca7c00bc856bc4f48~mv2.jpg`} alt="Salty TV on-demand yoga classes from Salty Dog Yoga & Surf, Carolina Beach" title="salty tv">
        <p className="mt-6 max-w-xl text-lg text-cream/85">
          On demand. Anywhere. Anytime. Take Salty Dog with you — yoga, Pilates and barre classes streamed straight to your screen.
        </p>
      </PageHero>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="grid gap-4 md:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Reveal key={f.h} delay={i * 100}>
                <div className="lift h-full rounded-lg bg-cream p-7">
                  <h3 className="headline text-2xl">{f.h}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.t}</p>
                </div>
              </Reveal>
            ))}
          </Reveal>

          <Reveal delay={150} className="relative mt-14 text-center">
            <Doodle src={ILL.waves} className="-top-8 left-1/4 w-20 rotate-6 opacity-90" />
            <h2 className="headline text-4xl md:text-6xl">ready to get salty?</h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Already a Salty TV member? Log in to your library. New here? Grab your membership and start streaming today.
            </p>
          </Reveal>
        </div>
      </section>

      <SaltyTVBand />
    </InnerPage>
  );
}
