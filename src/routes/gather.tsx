import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { EXT, W, InnerPage, PageHero, Reveal, Doodle, ILL } from "@/components/site";

const HERO = `${W}b22899_c69944e0b931474cb01e25e77f69cc13~mv2.jpg`;

export const Route = createFileRoute("/gather")({
  head: () => ({
    meta: [
      { title: "Gather — Community & Events | Salty Dog Yoga & Surf, Carolina Beach NC" },
      { name: "description", content: "Gather at Salty Dog — community classes, wellness workshops and local makers events in Carolina Beach, NC. Come together, give back, get salty." },
      { property: "og:title", content: "Gather — Community & Events | Salty Dog Yoga & Surf, Carolina Beach NC" },
      { property: "og:description", content: "Community classes, wellness workshops and local makers events in Carolina Beach, NC." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: HERO },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: GatherPage,
});

const CARDS = [
  {
    title: "Community Classes",
    text: "We believe in making wellness accessible and are thrilled to offer community classes at a sliding scale rate. Classes are taught by teachers in training and new Salty instructors.",
    img: `${W}bdf789_c748f2ee667e49408e077b3188ea2210~mv2.jpg`,
    alt: "Community yoga class at Salty Dog Yoga & Surf in Carolina Beach, NC",
  },
  {
    title: "Give Back & Get Salty",
    text: "We offer donation-based classes, host clean-up events and fundraise for local nonprofits. Our mission is to support our community and our community's needs.",
    img: `${W}bdf789_f1ba75b396144d8995f3b4f1d8b7d8c4~mv2.jpg`,
    alt: "Beach clean-up community event in Carolina Beach, NC",
  },
  {
    title: "Shop & Sip Events",
    text: "Join us for local makers markets, sip & flow nights and pop-up shops featuring some of our favorite coastal small businesses.",
    img: `${W}bdf789_6a9a8ec44e5c4b7d9ec1e8e0f7e0a4d3~mv2.jpg`,
    alt: "Local makers pop-up event at Salty Dog Yoga & Surf, Carolina Beach",
  },
];

function GatherPage() {
  return (
    <InnerPage>
      <PageHero img={HERO} alt="Community gathering at Salty Dog Yoga & Surf in Carolina Beach, NC" title="gather">
        <p className="mt-6 max-w-xl text-lg text-cream/85">
          Come together, give back, get salty. Gather is our way of making wellness accessible, supporting local makers and giving back to the community we love.
        </p>
      </PageHero>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl space-y-6 px-5">
          <Reveal>
            <div className="grid items-center gap-10 rounded-xl bg-navy p-8 text-cream md:p-12 lg:grid-cols-2">
              <img src={CARDS[0].img} alt={CARDS[0].alt} className="lift aspect-[4/3] w-full rounded-lg object-cover" />
              <div>
                <p className="eyebrow text-seafoam">everyone's welcome</p>
                <h2 className="headline mt-3 text-4xl md:text-5xl">community classes</h2>
                <p className="mt-4 text-cream/80">{CARDS[0].text}</p>
                <Link to="/classes" className="btn btn-coral mt-8">View Class Schedule <ArrowUpRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid items-center gap-10 rounded-xl bg-cream p-8 md:p-12 lg:grid-cols-2">
              <div className="lg:order-2">
                <p className="eyebrow text-coral">our mission</p>
                <h2 className="headline mt-3 text-4xl md:text-5xl">give back &amp; get salty</h2>
                <p className="mt-4 text-muted-foreground">{CARDS[1].text}</p>
              </div>
              <img src={CARDS[1].img} alt={CARDS[1].alt} className="lift aspect-[4/3] w-full rounded-lg object-cover" />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid items-center gap-10 rounded-xl bg-seafoam p-8 md:p-12 lg:grid-cols-2">
              <img src={CARDS[2].img} alt={CARDS[2].alt} className="lift aspect-[4/3] w-full rounded-lg object-cover" />
              <div>
                <p className="eyebrow text-coral">shop &amp; sip</p>
                <h2 className="headline mt-3 text-4xl md:text-5xl">local makers &amp; pop-ups</h2>
                <p className="mt-4 text-navy/80">{CARDS[2].text}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200} className="relative overflow-hidden rounded-xl p-8 text-center text-cream md:p-14">
            <img src={`${W}bdf789_3b46e35765c04c2a91cb9b7ae27d76d0~mv2.jpg`} alt="Sunset community event in Carolina Beach, NC" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-navy/70" />
            <div className="relative">
              <Doodle src={ILL.starfish} className="right-8 top-8 w-14 rotate-12" />
              <h2 className="headline text-4xl md:text-6xl">come gather with us</h2>
              <p className="mx-auto mt-4 max-w-lg text-cream/85">
                Community classes, workshops and events are added to our class schedule regularly.
              </p>
              <Link to="/classes" className="btn btn-coral mt-8">See What's On</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </InnerPage>
  );
}
