import { createFileRoute, Link } from "@tanstack/react-router";
import { EXT, W, M, InnerPage, PageHero, Reveal, Doodle, ILL } from "@/components/site";

const HERO = `${W}b22899_aaa6502cef24471bbe094c45400a2e90~mv2.jpg`;

export const Route = createFileRoute("/memberships")({
  head: () => ({
    meta: [
      { title: "Memberships & Class Passes | Salty Dog Yoga & Surf, Carolina Beach NC" },
      { name: "description", content: "Unlimited monthly memberships, class passes, vacation week passes and a $55 new student month at Salty Dog Yoga & Surf in Carolina Beach, NC." },
      { property: "og:title", content: "Memberships & Class Passes | Salty Dog Yoga & Surf, Carolina Beach NC" },
      { property: "og:description", content: "More classes, less money. Passes designed to suit YOUR needs and save you money." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: HERO },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: MembershipsPage,
});

const PLANS = [
  {
    name: "Good Vibe Tribe", sub: "Monthly Membership", price: "$118", per: "/mo",
    img: `${W}bdf789_224d087eb70d492188bc54aeb7e3131b~mv2.jpg`,
    alt: "Good Vibe Tribe monthly membership yoga at Salty Dog Yoga & Surf, Carolina Beach",
    bullets: ["Unlimited in-person group mat Pilates & yoga classes", "10% off select workshops", "Monthly auto-draft, cancel anytime before next billing cycle", "Less than $4 a class!"],
    cta: "Hook Me Up", url: M.gvt,
  },
  {
    name: "Vacation Mode", sub: "One Week Unlimited", price: "$50", per: "",
    img: `${W}bdf789_e9b1e65802ee470ca7c00bc856bc4f48~mv2.jpg`,
    alt: "Vacation Mode beach yoga week at Salty Dog Yoga & Surf, Carolina Beach",
    bullets: ["One week of unlimited classes on the beach and in studio mat classes", "Perfect for vacationers & those who call Carolina Beach their second home"],
    cta: "Yes, Please!", url: M.vacation,
  },
  {
    name: "25 Class Pass", sub: "Share the Love of Movement", price: "$280", per: "",
    img: `${W}bdf789_7181b7b473864c32bd8315dbf8e33664~mv2.jpg`,
    alt: "25 class pass group mat class at Salty Dog Yoga & Surf, Carolina Beach",
    bullets: ["Pass can be shared with friends and family for group mat classes", "Only $11.20 per class!", "Expires after one year"],
    cta: "Share the Love", url: M.pass25,
  },
  {
    name: "10 Class Pass", sub: "Just a Few", price: "$130", per: "",
    img: `${W}bdf789_957f61dfed2c4f3788d1048717f0213b~mv2.jpg`,
    alt: "10 class mat Pilates pass at Salty Dog Yoga & Surf, Carolina Beach",
    bullets: ["10 mat class pass", "Students, seniors, military and teachers discount available", "Only $13 per class!", "6 month expiration"],
    cta: "Yes, Please!", url: M.pass10,
  },
  {
    name: "New Students", sub: "New here? We got you.", price: "$55", per: "",
    img: `${W}bdf789_16297ba116d648b18c9d8d539a35f444~mv2.jpg`,
    alt: "New student unlimited month at Salty Dog Yoga & Surf, Carolina Beach",
    bullets: ["New Student month UNLIMITED for local residents", "One month, as many mat classes as you want", "New students only"],
    cta: "Hook Me Up", url: M.newStudent,
  },
];

function MembershipsPage() {
  return (
    <InnerPage>
      <PageHero img={HERO} alt="Group yoga class at Salty Dog Yoga & Surf studio in Carolina Beach, NC" title="more classes, less money.">
        <p className="mt-6 max-w-xl text-lg text-cream/85">
          Need we say more!? We offer a variety of class passes designed to suit YOUR needs and save you money. Whether you're new here, practice multiple days a week or just a couple times a month, we got you covered.
        </p>
      </PageHero>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PLANS.map((p) => (
              <div key={p.name} className="lift flex h-full flex-col overflow-hidden rounded-lg bg-cream">
                <img src={p.img} alt={p.alt} className="aspect-[16/10] w-full object-cover" />
                <div className="flex flex-1 flex-col p-7">
                  <p className="eyebrow text-coral">{p.sub}</p>
                  <h2 className="headline mt-2 text-3xl">{p.name}</h2>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="headline text-5xl">{p.price}</span>
                    <span className="text-sm text-muted-foreground">{p.per}</span>
                  </div>
                  <ul className="mt-4 flex-1 space-y-2 text-sm text-muted-foreground">
                    {p.bullets.map((b) => <li key={b} className="flex gap-2"><span className="text-coral">•</span>{b}</li>)}
                  </ul>
                  <a href={p.url} {...EXT} className="btn btn-coral mt-6 w-full">{p.cta}</a>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={100} className="mt-6">
            <div className="grid items-center gap-8 overflow-hidden rounded-lg bg-navy text-cream md:grid-cols-2">
              <img src={`${W}bdf789_a98c24ebe4894b18a6c6652946119a54~mv2.jpg`} alt="Beach yoga drop-in class on Carolina Beach, NC" className="h-full w-full object-cover md:aspect-[4/3]" />
              <div className="p-8 md:p-12">
                <h2 className="headline text-4xl md:text-5xl">drop-ins welcome</h2>
                <p className="mt-4 text-cream/80">Book online, drop in anytime.</p>
                <p className="mt-4 text-lg"><span className="text-seafoam">In studio mat class $18 · Beach yoga $15</span></p>
                <p className="mt-4 text-sm text-cream/70">We believe in making wellness accessible and are thrilled to offer community classes at a sliding scale rate.</p>
                <Link to="/classes" className="btn btn-coral mt-8">View Class Schedule</Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="mt-6">
            <div className="relative overflow-hidden rounded-lg bg-seafoam p-8 text-center md:p-10">
              <Doodle src={ILL.starfish} className="left-6 top-6 w-16 rotate-12" />
              <h3 className="headline text-3xl md:text-4xl">Interested in Pilates Reformer classes?</h3>
              <p className="mt-2 text-navy/70">Check out our Salty Core Reformer collection</p>
              <Link to="/core-reformer" className="btn btn-coral mt-6">Explore Core Reformer</Link>
            </div>
          </Reveal>

          <p className="mt-10 text-center text-sm text-muted-foreground">All sales are final.</p>
        </div>
      </section>
    </InnerPage>
  );
}
