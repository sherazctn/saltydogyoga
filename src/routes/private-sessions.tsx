import { createFileRoute, Link } from "@tanstack/react-router";
import { EXT, W, G, InnerPage, PageHero, Reveal, Doodle, ILL } from "@/components/site";

const HERO = `${W}b22899_2b54fe9bb32e470589970126d6761665~mv2.jpg`;

export const Route = createFileRoute("/private-sessions")({
  head: () => ({
    meta: [
      { title: "Private Yoga & Pilates | Salty Dog Yoga & Surf, Carolina Beach NC" },
      { name: "description", content: "Private 1:1 yoga and Pilates reformer sessions in studio, on the beach or on location in Carolina Beach & Kure Beach, NC. Book a session tailored to your needs." },
      { property: "og:title", content: "Private Yoga & Pilates | Salty Dog Yoga & Surf, Carolina Beach NC" },
      { property: "og:description", content: "Work 1:1 with an instructor to refine your practice or gain comfort as a beginner." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: HERO },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: PrivateSessionsPage,
});

const PILATES_PRIVATES: [string, string, string][] = [
  ["Private Equipment Session", "50 minutes", "$85"],
  ["Intro Package of 3", "", "$195"],
  ["5 Session Package", "", "$375"],
  ["Private Session", "30 minutes", "$45"],
  ["Duet Session (you and your bestie)", "50 minutes", "$55 per person"],
  ["Duet 5 Pack", "", "$250 per person"],
  ["Group Private Session", "50 minutes", "Price on request · between 3 and 6 people, classical and circuit options available"],
];

function PrivateSessionsPage() {
  return (
    <InnerPage>
      <PageHero img={HERO} alt="Private yoga session at Salty Dog Yoga & Surf in Carolina Beach, NC" title="private yoga & pilates">
        <p className="mt-6 max-w-xl text-lg text-cream/85">
          Working 1:1 with an instructor allows for the opportunity to ask questions, gain comfort in your practice and address specific needs. Private sessions are great for seasoned yogis who are looking to refine their practice as well as beginners looking for insight.
        </p>
      </PageHero>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl space-y-6 px-5">
          <Reveal>
            <div className="grid items-center gap-10 overflow-hidden rounded-xl bg-navy p-8 text-cream md:p-12 lg:grid-cols-2">
              <div>
                <p className="eyebrow text-seafoam">reformer · chair · duet</p>
                <h2 className="headline mt-3 text-4xl md:text-5xl">pilates equipment privates</h2>
                <ul className="mt-8 divide-y divide-cream/10 text-sm">
                  {PILATES_PRIVATES.map(([n, dur, price]) => (
                    <li key={n} className={`gap-4 py-3 ${n === "Group Private Session" ? "grid" : "flex items-start justify-between"}`}>
                      <span>{n}{dur && <span className="block text-cream/60">{dur}</span>}</span>
                      <span className="max-w-full font-semibold text-seafoam">{price}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-cream/60">Additional 3.5% when paying with credit card.</p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a href={G.pilatesForm} {...EXT} className="btn btn-coral">Request a Session</a>
                  <Link to="/core-reformer" className="text-sm underline underline-offset-4 hover:text-coral">See all reformer pricing</Link>
                </div>
              </div>
              <img src={`${W}be5110_168048bef2dc4e58863152c92f6a5fdd~mv2.jpg`} alt="Pilates reformer equipment session in Carolina Beach, NC" className="lift aspect-[4/3] min-w-0 w-full rounded-lg object-cover" />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid items-center gap-10 rounded-xl bg-cream p-8 md:p-12 lg:grid-cols-2">
              <img src={`${W}b22899_5b85e9c499a14cb398821727b739cf9a~mv2.jpg`} alt="Private group yoga class on the beach in Carolina Beach, NC" className="lift aspect-[4/3] w-full rounded-lg object-cover lg:order-1" />
              <div>
                <p className="eyebrow text-coral">yoga · your way</p>
                <h2 className="headline mt-3 text-4xl md:text-5xl">private &amp; group yoga</h2>
                <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2"><span className="text-coral">•</span><span><strong className="text-navy">Private Yoga</strong> — 60 minute session starts at $75</span></li>
                  <li className="flex gap-2"><span className="text-coral">•</span><span><strong className="text-navy">Group Sessions</strong> — $100 minimum (2 to 4 students). Email for rates for additional students.</span></li>
                  <li className="flex gap-2"><span className="text-coral">•</span><span>On the beach, in the studio, on location, we got you covered.</span></li>
                  <li className="flex gap-2"><span className="text-coral">•</span><span>Includes travel to location in Carolina Beach or Kure Beach and equipment.</span></li>
                  <li className="flex gap-2"><span className="text-coral">•</span><span>Additional travel fee for locations off the island.</span></li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p className="rounded-lg border border-border bg-sand p-5 text-center text-sm text-muted-foreground">
              <strong className="text-navy">Cancellation policy:</strong> Private and group sessions require a 24 hour cancellation, otherwise students will be charged the full rate of the session.
            </p>
          </Reveal>

          <Reveal delay={200} className="relative overflow-hidden rounded-xl bg-seafoam p-8 text-center md:p-14">
            <Doodle src={ILL.starfish} className="right-8 top-8 w-16 rotate-12" />
            <h2 className="headline text-4xl md:text-6xl">ready to book your session?</h2>
            <p className="mx-auto mt-4 max-w-xl text-navy/70">
              Fill out a wellness questionnaire so we can pair you with a teacher best suited to meet your needs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={G.yogaForm} {...EXT} className="btn btn-coral">Yoga Private Questionnaire</a>
              <a href={G.pilatesForm} {...EXT} className="btn btn-outline-dark">Pilates Questionnaire</a>
            </div>
          </Reveal>
        </div>
      </section>
    </InnerPage>
  );
}
