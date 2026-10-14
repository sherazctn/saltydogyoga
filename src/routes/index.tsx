import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, MapPin, Star, ChevronLeft, ChevronRight } from "lucide-react";
import {
  EXT, S, W, M, ILL, useReveal, Reveal, Wave, Doodle, JsonLd, AnnouncementBar, Header, Splash,
  EventsSection, Newsletter, Footer, MobileBar,
} from "@/components/site";


const HERO = "https://static.wixstatic.com/media/b22899_bb12aa5960fe48378e80ea15f749f06b~mv2.jpg";
const SLIDES = [
  { src: HERO, alt: "Sunrise beach yoga class on Carolina Beach, NC" },
  { src: `${W}bdf789_2aa40bbe43ca4ce7bb61352908eeda16~mv2.jpg`, alt: "Mat Pilates class at Salty Dog Yoga & Surf in Carolina Beach" },
  { src: `${W}b22899_aaa6502cef24471bbe094c45400a2e90~mv2.jpg`, alt: "Group yoga class in the Salty Dog studio, Carolina Beach NC" },
  { src: `${W}b22899_c69944e0b931474cb01e25e77f69cc13~mv2.jpg`, alt: "Yoga teacher training cohort at Salty Dog Yoga & Surf, Carolina Beach" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Salty Dog Yoga & Surf | Carolina Beach, NC" },
      { name: "description", content: "Pilates reformer, yoga, mat Pilates and barre by the sea in Carolina Beach, NC. Voted Best Yoga Studio in Wilmington. Come as a student, leave as a friend." },
      { property: "og:title", content: "Salty Dog Yoga & Surf | Carolina Beach, NC" },
      { property: "og:description", content: "Movement for every body. Pilates reformer, yoga, mat Pilates and barre by the sea in Carolina Beach." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: HERO },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="overflow-x-hidden pb-20 md:pb-0">
      <Splash />
      <AnnouncementBar />
      <Header />
      <Hero />
      <Marquee />
      <Welcome />
      <Explore />
      <NewHere />
      <Reformer />
      <Events />
      <QuoteBand />
      <SaltyTV />
      <Newsletter />
      <Footer />
      <MobileBar />
      <JsonLd />
    </div>
  );
}

function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, [paused]);
  return (
    <section
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-navy"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Photo highlights from Salty Dog Yoga & Surf in Carolina Beach"
    >
      {SLIDES.map((s, j) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ${j === i ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-28 pt-40 md:pb-36">
        <div className="max-w-3xl text-cream">
          <span className="inline-flex items-center gap-2 rounded-full bg-coral px-4 py-1.5 text-xs font-semibold tracking-wide">
            <Star className="h-3.5 w-3.5 fill-current" /> Voted Best Yoga Studio in Wilmington
          </span>
          <h1 className="headline mt-6 text-[clamp(3.5rem,11vw,9rem)]">movement for <em className="text-seafoam">every</em> body</h1>
          <p className="mt-6 max-w-lg text-lg text-cream/85">Pilates reformer, yoga, mat Pilates and barre by the sea in Carolina Beach.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/classes" className="btn btn-coral">Find a Class</Link>
            <Link to="/memberships" className="btn btn-outline-light">Memberships</Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-24 right-5 z-10 flex items-center gap-3 md:bottom-32">
        <button
          onClick={() => setI((v) => (v - 1 + SLIDES.length) % SLIDES.length)}
          aria-label="Previous photo"
          className="grid h-11 w-11 place-items-center rounded-full bg-cream/15 text-cream backdrop-blur transition hover:bg-coral"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => setI((v) => (v + 1) % SLIDES.length)}
          aria-label="Next photo"
          className="grid h-11 w-11 place-items-center rounded-full bg-cream/15 text-cream backdrop-blur transition hover:bg-coral"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <div className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 gap-2 md:bottom-32">
        {SLIDES.map((s, j) => (
          <button
            key={s.src}
            onClick={() => setI(j)}
            aria-label={`Show photo ${j + 1}`}
            className={`h-2 rounded-full transition-all ${j === i ? "w-8 bg-coral" : "w-2 bg-cream/50 hover:bg-cream"}`}
          />
        ))}
      </div>
      <Wave className="absolute bottom-0 left-0 text-seafoam" />
    </section>
  );
}

function Marquee() {
  const items = ["in studio", "on the beach", "on demand", "pilates reformer", "yoga", "barre", "meditation"];
  const row = items.map((i) => (
    <span key={i} className="headline flex items-center gap-8 whitespace-nowrap px-4 text-2xl md:text-4xl">{i}<span className="text-coral">•</span></span>
  ));
  return (
    <div className="overflow-hidden bg-seafoam py-5 text-navy">
      <div className="marquee flex w-max">{row}{row}{row}{row}</div>
    </div>
  );
}

function Welcome() {
  return (
    <section className="grain py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 md:grid-cols-2">
        <Reveal className="relative">
          <Doodle src={ILL.sunglasses} className="-top-10 right-6 w-20 rotate-12 md:w-24" />
          <p className="eyebrow text-coral">welcome to salty</p>
          <h2 className="headline mt-4 text-5xl md:text-7xl">Salty Dog</h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Situated by the sea, we are a welcoming studio offering Pilates reformer, yoga and Pilates mat classes with a laid back island vibe and a passion for movement, wellness, play and the great outdoors. We offer classes in studio, on the beach and on demand with Salty TV because we know variety is the spice of life! Join us as we seek ways to connect and inspire our community.
          </p>
          <a href="https://maps.google.com/?q=915+N+Lake+Park+Blvd+Carolina+Beach+NC+28428" {...EXT} className="mt-8 inline-flex items-center gap-2 text-sm font-medium hover:text-coral">
            <MapPin className="h-4 w-4 text-coral" /> 915 a N Lake Park Blvd, Carolina Beach, NC 28428
          </a>
        </Reveal>
        <Reveal delay={150} className="relative h-[460px] md:h-[580px]">
          <img src={`${W}b22899_aaa6502cef24471bbe094c45400a2e90~mv2.jpg`} alt="Yoga class at Salty Dog Yoga & Surf in Carolina Beach" className="lift absolute right-0 top-0 h-[78%] w-[78%] rounded-lg object-cover shadow-[var(--shadow-soft)]" />
          <img src={`${W}bdf789_2aa40bbe43ca4ce7bb61352908eeda16~mv2.jpg`} alt="Students in a mat Pilates class at the Carolina Beach studio" className="lift absolute bottom-0 left-0 h-[52%] w-[55%] rounded-lg border-8 border-sand object-cover shadow-[var(--shadow-soft)]" />
          <Doodle src={ILL.shell} className="bottom-6 right-4 w-16 -rotate-12" />
        </Reveal>
      </div>
    </section>
  );
}

function Tile({ title, img, to, className = "", big = false }: { title: string; img: string; to: string; className?: string; big?: boolean }) {
  return (
    <Link to={to} className={`group relative block min-h-[260px] overflow-hidden rounded-lg ${className}`}>
      <img src={img} alt={title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-card)" }} />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-cream">
        <h3 className={`headline ${big ? "text-5xl md:text-6xl" : "text-3xl"}`}>{title}</h3>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream/20 backdrop-blur transition-all group-hover:rotate-45 group-hover:bg-coral">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
    </Link>
  );
}

function Explore() {
  return (
    <section className="pb-24 md:pb-36">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="relative mb-12">
          <Doodle src={ILL.flipflops} className="-top-6 left-[min(70%,440px)] w-20 rotate-[18deg]" />
          <p className="eyebrow text-coral">come play</p>
          <h2 className="headline mt-3 text-5xl md:text-7xl">explore our studio</h2>
        </Reveal>
        <Reveal className="grid grid-cols-1 gap-4 md:auto-rows-[260px] md:grid-cols-4">
          <Tile big title="Find a Class" img={`${W}b22899_9ce37aa487004b038782ae4cbfcfe978~mv2.jpg`} to="/classes" className="min-h-[380px] md:col-span-2 md:row-span-2" />
          <Tile title="Pilates Reformer" img={`${W}bdf789_6443de4836f84699bbda91f06829706c~mv2.jpg`} to="/core-reformer" className="md:col-span-2" />
          <Tile title="Retreats" img={`${W}bdf789_af7da5f3a17f4cc89ffab9e2d3ee4d62~mv2.jpg`} to="/retreats" />
          <Tile title="Private Sessions" img={`${W}b22899_2b54fe9bb32e470589970126d6761665~mv2.jpg`} to="/private-sessions" />
          <Tile title="Gather" img={`${W}be5110_570c18b6cd5a4ec39e75d473cd91cf45~mv2.png`} to="/gather" className="md:col-span-2" />
          <Tile title="Teacher Training" img={`${W}b22899_c69944e0b931474cb01e25e77f69cc13~mv2.jpg`} to="/200-hour-ytt" className="md:col-span-2" />
        </Reveal>
      </div>
    </section>
  );
}

function NewHere() {
  return (
    <section className="relative bg-navy text-cream">
      <Wave flip className="text-sand" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
        <Reveal>
          <img src={`${W}bdf789_16297ba116d648b18c9d8d539a35f444~mv2.jpg`} alt="New students in a mat class at Salty Dog Yoga & Surf, Carolina Beach" className="aspect-[4/5] w-full rounded-lg object-cover" />
        </Reveal>
        <Reveal delay={150} className="relative">
          <Doodle src={ILL.waves} className="-top-12 right-0 w-28 rotate-6 opacity-90" />
          <p className="eyebrow text-seafoam">new here? we got you.</p>
          <h2 className="headline mt-4 text-5xl md:text-7xl">one month unlimited, <span className="text-coral">$55</span></h2>
          <p className="mt-6 max-w-md text-lg text-cream/80">Get a taste of everything Salty has to offer with one month of unlimited yoga and Pilates mat classes at a great price. New students only.</p>
          <a href={M.newStudent} {...EXT} className="btn btn-coral mt-8">Sign Me Up!</a>
          <div className="mt-10 grid gap-3 border-t border-cream/15 pt-6 text-sm sm:grid-cols-2">
            <a href={M.vacation} {...EXT} className="group flex items-center justify-between rounded-md bg-cream/5 p-4 hover:bg-cream/10">
              <span><span className="block text-cream/60">Vacation Mode</span>One week unlimited · $50</span>
              <ArrowUpRight className="h-4 w-4 text-coral transition group-hover:rotate-45" />
            </a>
            <Link to="/classes" className="group flex items-center justify-between rounded-md bg-cream/5 p-4 hover:bg-cream/10">
              <span><span className="block text-cream/60">Drop in</span>Mat class $18 · Beach yoga $15</span>
              <ArrowUpRight className="h-4 w-4 text-coral transition group-hover:rotate-45" />
            </Link>
          </div>
        </Reveal>
      </div>
      <Wave className="text-sand" />
    </section>
  );
}

function Reformer() {
  const chips = [["Single class", "$36"], ["New student teaser", "3 for $79"], ["Core Club", "from $108/mo"]];
  return (
    <section className="grain py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2">
        <Reveal className="md:order-2">
          <img src={`${W}be5110_168048bef2dc4e58863152c92f6a5fdd~mv2.jpg`} alt="Salty Core Reformer Pilates class in Carolina Beach" className="lift aspect-[4/5] w-full rounded-lg object-cover" />
        </Reveal>
        <Reveal delay={150}>
          <p className="eyebrow text-coral">boutique reformer</p>
          <h2 className="headline mt-4 text-5xl md:text-7xl">salty core reformer</h2>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">Boutique reformer classes to strengthen your core and feed your soul. Move with purpose. Strengthen your core. Stay salty.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {chips.map(([a, b]) => (
              <div key={a} className="lift rounded-md bg-seafoam px-5 py-3">
                <div className="text-xs text-muted-foreground">{a}</div>
                <div className="headline text-2xl">{b}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={M.teaser} {...EXT} className="btn btn-coral">Get the Teaser</a>
            <Link to="/core-reformer" className="btn btn-outline-dark">See All Reformer Pricing</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Events() {
  return (
    <div className="mx-auto max-w-7xl px-5">
      <Reveal className="mb-2 flex justify-end">
        <Link to="/classes" className="inline-flex items-center gap-1 text-sm font-semibold hover:text-coral">See full schedule <ArrowUpRight className="h-4 w-4" /></Link>
      </Reveal>
      <EventsSection count={3} />
    </div>
  );
}

function QuoteBand() {
  return (
    <section className="grain relative py-24 md:py-32">
      <Reveal className="relative mx-auto max-w-4xl px-5 text-center">
        <Doodle src={ILL.starfish} className="-top-14 left-1/2 w-20 -translate-x-1/2 rotate-12" />
        <blockquote className="font-serif text-[clamp(2rem,5vw,3.75rem)] font-light italic leading-[1.1]">
          “Come as a student, leave as a friend. We take out intimidation &amp; welcome <span className="text-coral not-italic">ALL!</span>”
        </blockquote>
      </Reveal>
    </section>
  );
}

function SaltyTV() {
  return (
    <section className="bg-navy text-cream">
      <Wave flip className="text-sand" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:grid-cols-2 md:py-28">
        <Reveal>
          <p className="eyebrow text-seafoam">salty tv · on demand</p>
          <h2 className="headline mt-4 text-5xl md:text-7xl">experience salty anywhere, anytime.</h2>
          <p className="mt-6 max-w-md text-lg text-cream/80">A curated, on demand library stocked FULL of classes for all levels, allowing you to enjoy the best of Pilates, Yoga &amp; Meditations from the comfort of your own home.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Quickies", "Heavily Meditated", "Stay Salty"].map((t) => (
              <span key={t} className="rounded-full border border-seafoam/40 px-4 py-1.5 text-sm text-seafoam">{t}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`${S}/pricing-plans/list`} {...EXT} className="btn btn-coral">Get Salty TV</a>
            <Link to="/salty-tv" className="btn btn-outline-light">Learn More</Link>
          </div>
          <p className="mt-6 text-sm text-cream/60">Already a paid subscriber? <a href={`${S}/get-salty-tv`} {...EXT} className="underline hover:text-coral">Salty TV Log In</a></p>
        </Reveal>
        <Reveal delay={150} className="grid grid-cols-2 gap-4">
          <img src={`${W}b22899_5504f43cc65e4d98bf8baa016eef2c14~mv2.jpg`} alt="Salty TV quickie on demand class" className="lift col-span-2 aspect-[16/9] w-full rounded-lg object-cover" />
          <img src={`${W}b22899_076cfa9687b84a94ad4bf375142bf80f~mv2.jpg`} alt="Heavily Meditated Salty TV session" className="lift aspect-square w-full rounded-lg object-cover" />
          <img src={`${W}b22899_bf8f0c9cf04444da8e4ac7f8728508b0~mv2.jpg`} alt="Stay Salty full length on demand class" className="lift aspect-square w-full rounded-lg object-cover" />
        </Reveal>
      </div>
      <Wave className="text-sand" />
    </section>
  );
}
