import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, MapPin, Menu, X, Mail, Phone, Youtube, Facebook, Instagram, Star, ChevronLeft, ChevronRight } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";
import splashAsset from "@/assets/acupuncture.png.asset.json";

const HERO = "https://static.wixstatic.com/media/b22899_bb12aa5960fe48378e80ea15f749f06b~mv2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Salty Dog Yoga & Surf | Carolina Beach, NC" },
      { name: "description", content: "Pilates reformer, yoga, mat Pilates and barre by the sea in Carolina Beach, NC. Voted Best Yoga Studio in Wilmington." },
      { property: "og:title", content: "Salty Dog Yoga & Surf | Carolina Beach, NC" },
      { property: "og:description", content: "Movement for every body. Pilates reformer, yoga, mat Pilates and barre by the sea." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: HERO },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: Index,
});

const S = "https://www.saltydogyogasurf.com";
const L = {
  classes: `${S}/classes`,
  memberships: `${S}/memberships`,
  reformer: `${S}/private-yoga-and-pilates-reformer-1`,
  privates: `${S}/private-yoga-and-pilates-reformer`,
  ytt: `${S}/yoga-teacher-training`,
  gather: `${S}/gather`,
  retreats: `${S}/retreats`,
  tv: `${S}/get-salty-tv`,
  tvPricing: `${S}/pricing-plans/list`,
  newStudent: "https://momence.com/Salty-Dog-Yoga/membership/New-Student-Month-Unlimited/62147",
  vacation: "https://momence.com/Salty-Dog-Yoga/membership/One-Week-Unlimited/66189",
  teaser: "https://momence.com/m/592133",
  acupuncture: "#", // [ACUPUNCTURE BOOKING LINK]
};
const LOGO = logoAsset.url;
const ILL = {
  waves: "https://static.wixstatic.com/media/b22899_4c54296e1d2943dcad5c43858a534472~mv2.png",
  flipflops: "https://static.wixstatic.com/media/b22899_0d80c22d424a4c28aa3e382db458227e~mv2.png",
  shell: "https://static.wixstatic.com/media/b22899_090e600d03dd44fc8009139cc9317c0b~mv2.png",
  starfish: "https://static.wixstatic.com/media/b22899_453bdad0b92f4d139b9e43ead23cd071~mv2.png",
  sunglasses: "https://static.wixstatic.com/media/b22899_14a87669cd9244d0abbbb4f983760931~mv2.png",
};
const W = "https://static.wixstatic.com/media/";

const NAV = [
  ["Classes", L.classes], ["Memberships", L.memberships], ["Core Reformer", L.reformer], ["Privates", L.privates],
  ["Teacher Training", L.ytt], ["Gather", L.gather], ["Retreats", L.retreats], ["Salty TV", L.tv],
] as const;

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <div className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

function Wave({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className={`block h-12 w-full md:h-20 ${flip ? "rotate-180" : ""} ${className}`} aria-hidden>
      <path fill="currentColor" d="M0 40 C 240 90 480 0 720 36 S 1200 80 1440 30 V80 H0Z" />
    </svg>
  );
}

function Doodle({ src, className }: { src: string; className: string }) {
  return <img src={src} alt="" aria-hidden className={`pointer-events-none absolute float-slow select-none ${className}`} />;
}

function Index() {
  useReveal();
  return (
    <div className="overflow-x-hidden pb-20 md:pb-0">
      <Splash />
      <a href={L.memberships} {...ext} className="block bg-navy px-4 py-2 text-center text-xs tracking-wide text-cream hover:text-seafoam">
        New here? Try our <strong>NEW Student Mat Classes Month Unlimited!</strong> →
      </a>
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
    </div>
  );
}

function Splash() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("salty-splash")) return;
    const t = setTimeout(() => { setOpen(true); sessionStorage.setItem("salty-splash", "1"); }, 2000);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/60 p-4 backdrop-blur-md animate-in fade-in duration-500" onClick={() => setOpen(false)}>
      <div className="relative flex max-h-[92dvh] w-full max-w-3xl flex-col items-center gap-4 rounded-lg bg-cream p-4 shadow-2xl animate-in zoom-in-95 duration-500" onClick={(e) => e.stopPropagation()} role="dialog" aria-label="Community Acupuncture">
        <button onClick={() => setOpen(false)} aria-label="Close" className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-navy text-cream hover:bg-coral">
          <X className="h-4 w-4" />
        </button>
        <img src={splashAsset.url} alt="Community Acupuncture with Jenn Conte — 50-minute personalized session, pick your price ($30–$50), Sunday Oct 18th 11–2PM at Gather" className="max-h-[70dvh] w-full rounded-md object-contain" />
        <a href={L.acupuncture} {...ext} className="btn btn-coral w-full">Book Community Acupuncture</a>
      </div>
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  const solid = scrolled || open;
  return (
    <header className={`sticky top-0 z-50 -mb-[84px] transition-all duration-500 ${solid ? "bg-sand shadow-[var(--shadow-soft)]" : "bg-transparent"}`}>
      <div className="mx-auto flex h-[84px] max-w-7xl items-center justify-between gap-4 px-5">
        <a href="/" className="shrink-0"><img src={LOGO} alt="Salty Dog Yoga & Surf" className="h-12 w-auto md:h-14" /></a>
        <nav className={`hidden items-center gap-5 xl:flex ${solid ? "text-navy" : "text-cream"}`}>
          {NAV.map(([n, h]) => (
            <a key={n} href={h} {...ext} className="text-[13px] font-medium transition-colors hover:text-coral">{n}</a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a href={L.tv} {...ext} className={`hidden text-xs underline-offset-4 hover:underline md:inline ${solid ? "text-navy" : "text-cream"}`}>Salty TV Log In</a>
          <a href={L.classes} {...ext} className="btn btn-coral hidden !px-5 !py-3 sm:inline-flex">Book Now</a>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className={`xl:hidden ${solid ? "text-navy" : "text-cream"}`}>
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="grain fixed inset-x-0 bottom-0 top-[84px] z-40 flex flex-col overflow-y-auto bg-sand px-6 pb-10 pt-6 animate-in fade-in slide-in-from-top-4 xl:hidden">
          {NAV.map(([n, h]) => (
            <a key={n} href={h} {...ext} onClick={() => setOpen(false)} className="headline border-b border-border py-3 text-4xl text-navy hover:text-coral">{n}</a>
          ))}
          <a href={L.tv} {...ext} className="mt-6 text-sm text-navy underline">Salty TV Log In</a>
          <a href={L.classes} {...ext} className="btn btn-coral mt-6">Book Now</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-navy">
      <img src={HERO} alt="Beach yoga at Carolina Beach" className="absolute inset-0 h-full w-full scale-105 object-cover animate-in fade-in zoom-in-110 duration-[2000ms]" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-28 pt-40 md:pb-36">
        <div className="max-w-3xl text-cream animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="inline-flex items-center gap-2 rounded-full bg-coral px-4 py-1.5 text-xs font-semibold tracking-wide">
            <Star className="h-3.5 w-3.5 fill-current" /> Voted Best Yoga Studio in Wilmington
          </span>
          <h1 className="headline mt-6 text-[clamp(3.5rem,11vw,9rem)]">movement for <em className="text-seafoam">every</em> body</h1>
          <p className="mt-6 max-w-lg text-lg text-cream/85">Pilates reformer, yoga, mat Pilates and barre by the sea in Carolina Beach.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={L.classes} {...ext} className="btn btn-coral">Find a Class</a>
            <a href={L.memberships} {...ext} className="btn btn-outline-light">Memberships</a>
          </div>
        </div>
      </div>
      <Wave className="absolute bottom-0 left-0 text-seafoam" />
    </section>
  );
}

function Marquee() {
  const items = ["in studio", "on the beach", "live streaming", "pilates reformer", "yoga", "barre", "meditation"];
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
          <h2 className="headline mt-4 text-5xl md:text-7xl">Salty Dog Yoga &amp; Surf</h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Situated by the sea, we are a welcoming studio offering Pilates reformer, yoga and Pilates mat classes with a laid back island vibe and a passion for movement, wellness, play and the great outdoors. We offer classes in studio, outdoors and live streaming because we know variety is the spice of life! Join us as we seek ways to connect and inspire our community.
          </p>
          <a href="https://maps.google.com/?q=915+N+Lake+Park+Blvd+Carolina+Beach+NC+28428" {...ext} className="mt-8 inline-flex items-center gap-2 text-sm font-medium hover:text-coral">
            <MapPin className="h-4 w-4 text-coral" /> 915 a N Lake Park Blvd, Carolina Beach, NC 28428
          </a>
        </Reveal>
        <Reveal delay={150} className="relative h-[460px] md:h-[580px]">
          <img src={`${W}b22899_aaa6502cef24471bbe094c45400a2e90~mv2.jpg`} alt="Yoga class at Salty Dog" className="lift absolute right-0 top-0 h-[78%] w-[78%] rounded-lg object-cover shadow-[var(--shadow-soft)]" />
          <img src={`${W}bdf789_2aa40bbe43ca4ce7bb61352908eeda16~mv2.jpg`} alt="Salty Dog studio" className="lift absolute bottom-0 left-0 h-[52%] w-[55%] rounded-lg border-8 border-sand object-cover shadow-[var(--shadow-soft)]" />
          <Doodle src={ILL.shell} className="bottom-6 right-4 w-16 -rotate-12" />
        </Reveal>
      </div>
    </section>
  );
}

function Tile({ title, img, href, className = "", big = false }: { title: string; img: string; href: string; className?: string; big?: boolean }) {
  return (
    <a href={href} {...ext} className={`group relative block min-h-[260px] overflow-hidden rounded-lg ${className}`}>
      <img src={img} alt={title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-card)" }} />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-cream">
        <h3 className={`headline ${big ? "text-5xl md:text-6xl" : "text-3xl"}`}>{title}</h3>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream/20 backdrop-blur transition-all group-hover:rotate-45 group-hover:bg-coral">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
    </a>
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
          <Tile big title="Find a Class" img={`${W}b22899_9ce37aa487004b038782ae4cbfcfe978~mv2.jpg`} href={L.classes} className="min-h-[380px] md:col-span-2 md:row-span-2" />
          <Tile title="Pilates Reformer" img={`${W}bdf789_6443de4836f84699bbda91f06829706c~mv2.jpg`} href={L.reformer} className="md:col-span-2" />
          <Tile title="Retreats" img={`${W}bdf789_af7da5f3a17f4cc89ffab9e2d3ee4d62~mv2.jpg`} href={L.retreats} />
          <Tile title="Private Sessions" img={`${W}b22899_2b54fe9bb32e470589970126d6761665~mv2.jpg`} href={L.privates} />
          <Tile title="Gather" img={`${W}be5110_570c18b6cd5a4ec39e75d473cd91cf45~mv2.png`} href={L.gather} className="md:col-span-2" />
          <Tile title="Teacher Training" img={`${W}b22899_c69944e0b931474cb01e25e77f69cc13~mv2.jpg`} href={L.ytt} className="md:col-span-2" />
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
          <img src={`${W}bdf789_16297ba116d648b18c9d8d539a35f444~mv2.jpg`} alt="New student class" className="aspect-[4/5] w-full rounded-lg object-cover" />
        </Reveal>
        <Reveal delay={150} className="relative">
          <Doodle src={ILL.waves} className="-top-12 right-0 w-28 rotate-6 opacity-90" />
          <p className="eyebrow text-seafoam">new here? we got you.</p>
          <h2 className="headline mt-4 text-5xl md:text-7xl">one month unlimited, <span className="text-coral">$55</span></h2>
          <p className="mt-6 max-w-md text-lg text-cream/80">Get a taste of everything Salty has to offer with one month of unlimited yoga and Pilates mat classes at a great price. New students only.</p>
          <a href={L.newStudent} {...ext} className="btn btn-coral mt-8">Sign Me Up!</a>
          <div className="mt-10 grid gap-3 border-t border-cream/15 pt-6 text-sm sm:grid-cols-2">
            <a href={L.vacation} {...ext} className="group flex items-center justify-between rounded-md bg-cream/5 p-4 hover:bg-cream/10">
              <span><span className="block text-cream/60">Vacation Mode</span>One week unlimited · $50</span>
              <ArrowUpRight className="h-4 w-4 text-coral transition group-hover:rotate-45" />
            </a>
            <a href={L.classes} {...ext} className="group flex items-center justify-between rounded-md bg-cream/5 p-4 hover:bg-cream/10">
              <span><span className="block text-cream/60">Drop in</span>Mat class $18 · Beach yoga $15</span>
              <ArrowUpRight className="h-4 w-4 text-coral transition group-hover:rotate-45" />
            </a>
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
          <img src={`${W}be5110_168048bef2dc4e58863152c92f6a5fdd~mv2.jpg`} alt="Salty Core Reformer class" className="lift aspect-[4/5] w-full rounded-lg object-cover" />
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
            <a href={L.teaser} {...ext} className="btn btn-coral">Get the Teaser</a>
            <a href={L.reformer} {...ext} className="btn btn-outline-dark">See All Reformer Pricing</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Events() {
  const ev = [
    { m: "OCT", d: "18", t: "Sunrise Beach Flow", time: "7:00 – 8:00 AM" },
    { m: "OCT", d: "25", t: "Full Moon Sound Bath", time: "7:30 – 9:00 PM" },
    { m: "NOV", d: "02", t: "Reformer Fundamentals Workshop", time: "10:00 AM – 12:00 PM" },
  ];
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="headline text-5xl md:text-7xl">upcoming events</h2>
          <a href={L.classes} {...ext} className="inline-flex items-center gap-1 text-sm font-semibold hover:text-coral">See full schedule <ArrowUpRight className="h-4 w-4" /></a>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {ev.map((e, i) => (
            <Reveal key={e.t} delay={i * 100}>
              <div className="lift relative flex items-center gap-5 rounded-lg bg-cream p-5">
                <span className="absolute right-4 top-4 rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold tracking-widest text-muted-foreground">SAMPLE</span>
                <div className="grid h-20 w-20 shrink-0 place-items-center rounded-md bg-navy text-center text-cream">
                  <div><div className="text-[10px] tracking-widest text-seafoam">{e.m}</div><div className="headline text-3xl">{e.d}</div></div>
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-xl leading-tight">{e.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{e.time}</p>
                  <a href={L.classes} {...ext} className="mt-2 inline-block text-xs font-bold uppercase tracking-widest text-coral hover:underline">Book</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-4 rounded-lg border-2 border-dashed border-input p-6 text-center text-sm text-muted-foreground">Momence events widget goes here</div>
      </div>
    </section>
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
            <a href={L.tvPricing} {...ext} className="btn btn-coral">Get Salty TV</a>
            <a href={L.tv} {...ext} className="btn btn-outline-light">Learn More</a>
          </div>
          <p className="mt-6 text-sm text-cream/60">Already a paid subscriber? <a href={L.tv} {...ext} className="underline hover:text-coral">Salty TV Log In</a></p>
        </Reveal>
        <Reveal delay={150} className="grid grid-cols-2 gap-4">
          <img src={`${W}b22899_5504f43cc65e4d98bf8baa016eef2c14~mv2.jpg`} alt="Salty TV class" className="lift col-span-2 aspect-[16/9] w-full rounded-lg object-cover" />
          <img src={`${W}b22899_076cfa9687b84a94ad4bf375142bf80f~mv2.jpg`} alt="Salty TV yoga" className="lift aspect-square w-full rounded-lg object-cover" />
          <img src={`${W}b22899_bf8f0c9cf04444da8e4ac7f8728508b0~mv2.jpg`} alt="Salty TV meditation" className="lift aspect-square w-full rounded-lg object-cover" />
        </Reveal>
      </div>
      <Wave className="text-sand" />
    </section>
  );
}

function Newsletter() {
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLFormElement>(null);
  return (
    <section className="py-20 md:py-28">
      <Reveal className="mx-auto max-w-5xl px-5">
        <div className="relative overflow-hidden rounded-xl bg-seafoam p-8 md:p-14">
          <Doodle src={ILL.shell} className="right-6 top-6 w-16 rotate-12 md:w-20" />
          <h2 className="headline max-w-xl text-4xl md:text-6xl">get salty delivered right to your inbox.</h2>
          {done ? (
            <p className="mt-8 font-serif text-2xl italic">Thank you! You're on the list. Stay salty. 🌊</p>
          ) : (
            <form ref={ref} onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="mt-8 max-w-xl">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input type="email" required placeholder="Your email" aria-label="Email" className="h-14 flex-1 rounded-full border border-input bg-cream px-6 outline-none focus:ring-2 focus:ring-ring" />
                <button type="submit" className="btn btn-coral h-14">Submit</button>
              </div>
              <label className="mt-4 flex items-center gap-2 text-sm">
                <input type="checkbox" defaultChecked className="h-4 w-4 accent-coral" /> Yes, subscribe me to your newsletter.
              </label>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  const socials = [
    [Youtube, "YouTube", "https://www.youtube.com/channel/UCljjxroaiYdAVfPEd1t80ag"],
    [Facebook, "Facebook", "#"], // [FACEBOOK URL]
    [Instagram, "Instagram", "https://www.instagram.com/saltydogyogasurf/"],
  ] as const;
  return (
    <footer className="bg-navy text-cream">
      <Wave flip className="text-sand" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3">
        <div>
          <img src={logoAsset.url} alt="Salty Dog yoga barre pilates" className="h-16 w-auto" />
          <p className="headline mt-6 text-3xl">come as a student, leave as a friend.</p>
        </div>
        <div className="space-y-3 text-sm text-cream/80">
          <p className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-coral" />915 a N Lake Park Blvd, Carolina Beach, NC 28428</p>
          <a href="mailto:info@saltydogyogasurf.com" className="flex gap-2 hover:text-coral"><Mail className="h-4 w-4 text-coral" />info@saltydogyogasurf.com</a>
          <a href="tel:+19107073012" className="flex gap-2 hover:text-coral"><Phone className="h-4 w-4 text-coral" />(910) 707-3012</a>
          <div className="flex gap-3 pt-4">
            {socials.map(([I, n, h]) => (
              <a key={n} href={h} {...ext} aria-label={n} className="lift grid h-10 w-10 place-items-center rounded-full bg-cream/10 hover:bg-coral"><I className="h-4 w-4" /></a>
            ))}
            <a href="https://www.tripadvisor.com/ShowUserReviews-g49004-d4047641-r185063153-Salty_Dog_Yoga_Surf-Carolina_Beach_North_Carolina.html" {...ext} className="lift grid h-10 place-items-center rounded-full bg-cream/10 px-3 text-[11px] font-bold hover:bg-coral">TripAdvisor</a>
            <a href="https://www.yelp.com/biz/salty-dog-yoga-and-surf-carolina-beach" {...ext} className="lift grid h-10 place-items-center rounded-full bg-cream/10 px-3 text-[11px] font-bold hover:bg-coral">Yelp</a>
          </div>
        </div>
        <nav className="grid grid-cols-2 gap-2 text-sm">
          {NAV.map(([n, h]) => <a key={n} href={h} {...ext} className="text-cream/80 hover:text-coral">{n}</a>)}
        </nav>
      </div>
      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">© 2026 Salty Dog Yoga &amp; Surf</div>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-sand/95 p-3 backdrop-blur md:hidden">
      <a href={L.classes} {...ext} className="btn btn-outline-dark !px-2 !py-3 !text-[11px]">Book a Class</a>
      <a href={L.newStudent} {...ext} className="btn btn-coral !px-2 !py-3 !text-[11px]">New Student $55</a>
    </div>
  );
}
