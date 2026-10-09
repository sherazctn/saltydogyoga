import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowUpRight, MapPin, Menu, X, Mail, Phone, Youtube, Facebook, Instagram, ChevronDown,
} from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";
import splashAsset from "@/assets/acupuncture.png.asset.json";

export const EXT = { target: "_blank", rel: "noopener noreferrer" } as const;
export const S = "https://www.saltydogyogasurf.com";
export const W = "https://static.wixstatic.com/media/";
export const LOGO = logoAsset.url;
export const SPLASH_IMG = splashAsset.url;

export const M = {
  newStudent: "https://momence.com/Salty-Dog-Yoga/membership/New-Student-Month-Unlimited/62147",
  vacation: "https://momence.com/Salty-Dog-Yoga/membership/One-Week-Unlimited/66189",
  gvt: "https://momence.com/Salty-Dog-Yoga/membership/Good-Vibe-Tribe-Monthly-Membership-/63786",
  pass25: "https://momence.com/Salty-Dog-Yoga/membership/25-Class-Pass--Friends-%26-Family/62188",
  pass10: "https://momence.com/Salty-Dog-Yoga/membership/10-Class-Package/62148",
  teaser: "https://momence.com/m/592133",
  coreClub: "https://momence.com/Salty-Dog-Yoga/membership/Core-Club--Pilates-Equipment-4-class-membership/604052",
  coreClubAF: "https://momence.com/m/775687",
  reformer10: "https://momence.com/m/592117",
  acupuncture: "https://momence.com/appointments/30657?boardId=234281",
  eventsApi: "https://momence.com/_api/primary/api/v1/Events?hostId=30657&token=3e911599e1",
  momence: "https://momence.com/Salty-Dog-Yoga",
};

export const G = {
  pilatesForm: "https://docs.google.com/forms/d/e/1FAIpQLSdappYTq6eRCOpp9KyuTe5HJjTM686nvrlqzR-mChqlpXO4tw/viewform",
  yogaForm: "https://docs.google.com/forms/d/e/1FAIpQLScGDnFBE4Fpj8hSMHGNQLlDalxdBLa3qPsbRhSPwblaL1gjZg/viewform",
  yttApply: "https://docs.google.com/forms/d/e/1FAIpQLScSHepym-u1czVAFa1cfFI81ZOX-30hirk4JPqF9U241H5EeA/viewform?usp=header",
  yttInterest: "https://docs.google.com/forms/d/e/1FAIpQLSc12XNeFvOqzmH2qf9qBZVXwO_sAkqcaS6Q87z9xnjVorFHdw/viewform",
};

export const SOCIALS = {
  youtube: "https://www.youtube.com/channel/UCljjxroaiYdAVfPEd1t80ag",
  facebook: "https://www.facebook.com/SaltyDogYogaSurf",
  instagram: "https://www.instagram.com/saltydogyogasurf/",
  tripadvisor: "https://www.tripadvisor.com/ShowUserReviews-g49004-d4047641-r185063153-Salty_Dog_Yoga_Surf-Carolina_Beach_North_Carolina.html",
  yelp: "https://www.yelp.com/biz/salty-dog-yoga-and-surf-carolina-beach",
};

export const ILL = {
  waves: "https://static.wixstatic.com/media/b22899_4c54296e1d2943dcad5c43858a534472~mv2.png",
  flipflops: "https://static.wixstatic.com/media/b22899_0d80c22d424a4c28aa3e382db458227e~mv2.png",
  shell: "https://static.wixstatic.com/media/b22899_090e600d03dd44fc8009139cc9317c0b~mv2.png",
  starfish: "https://static.wixstatic.com/media/b22899_453bdad0b92f4d139b9e43ead23cd071~mv2.png",
  sunglasses: "https://static.wixstatic.com/media/b22899_14a87669cd9244d0abbbb4f983760931~mv2.png",
};

type NavItem = { label: string; to: string; children?: { label: string; to: string }[] };

export const NAV: NavItem[] = [
  {
    label: "Classes", to: "/classes",
    children: [
      { label: "Class & Event Schedule", to: "/classes" },
      { label: "Memberships", to: "/memberships" },
      { label: "Private Yoga & Pilates", to: "/private-sessions" },
      { label: "Yoga Teacher Training", to: "/200-hour-ytt" },
    ],
  },
  { label: "Core Reformer", to: "/core-reformer" },
  { label: "Gather", to: "/gather" },
  { label: "Retreats", to: "/retreats" },
  { label: "Salty TV", to: "/salty-tv" },
];

export const FOOTER_NAV = [
  { label: "Classes", to: "/classes" },
  { label: "Memberships", to: "/memberships" },
  { label: "Core Reformer", to: "/core-reformer" },
  { label: "Private Yoga & Pilates", to: "/private-sessions" },
  { label: "Yoga Teacher Training", to: "/200-hour-ytt" },
  { label: "Gather", to: "/gather" },
  { label: "Retreats", to: "/retreats" },
  { label: "Salty TV", to: "/salty-tv" },
];

export function useReveal() {
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

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <div className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function Wave({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className={`block h-12 w-full md:h-20 ${flip ? "rotate-180" : ""} ${className}`} aria-hidden>
      <path fill="currentColor" d="M0 40 C 240 90 480 0 720 36 S 1200 80 1440 30 V80 H0Z" />
    </svg>
  );
}

export function Doodle({ src, className }: { src: string; className: string }) {
  return <img src={src} alt="" aria-hidden className={`pointer-events-none absolute float-slow select-none ${className}`} />;
}

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ExerciseGym"],
    name: "Salty Dog Yoga & Surf",
    address: {
      "@type": "PostalAddress",
      streetAddress: "915 a N Lake Park Blvd",
      addressLocality: "Carolina Beach",
      addressRegion: "NC",
      postalCode: "28428",
      addressCountry: "US",
    },
    telephone: "(910) 707-3012",
    email: "info@saltydogyogasurf.com",
    sameAs: [SOCIALS.facebook, SOCIALS.instagram, SOCIALS.youtube, SOCIALS.tripadvisor, SOCIALS.yelp],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function AnnouncementBar() {
  return (
    <Link to="/memberships" className="block bg-navy px-4 py-2 text-center text-xs tracking-wide text-cream hover:text-seafoam">
      New here? Try our <strong>NEW Student Mat Classes Month Unlimited!</strong> →
    </Link>
  );
}

export function Header() {
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
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <img src={LOGO} alt="Salty Dog Yoga & Surf, Carolina Beach NC" className="h-12 w-auto md:h-14" />
        </Link>
        <nav className={`hidden items-center gap-6 xl:flex ${solid ? "text-navy" : "text-cream"}`}>
          {NAV.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <Link to={item.to} className="flex items-center gap-1 py-3 text-[13px] font-medium transition-colors hover:text-coral" activeProps={{ className: "text-coral" }}>
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                </Link>
                <div className="invisible absolute left-0 top-full w-64 translate-y-1 rounded-md border border-border bg-cream p-2 opacity-0 shadow-[var(--shadow-soft)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((c) => (
                    <Link key={c.label} to={c.to} className="block rounded px-3 py-2 text-sm text-navy hover:bg-seafoam/60 hover:text-coral" activeProps={{ className: "text-coral" }}>
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.label} to={item.to} className="py-3 text-[13px] font-medium transition-colors hover:text-coral" activeProps={{ className: "text-coral" }}>
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="flex items-center gap-4">
          <a href={`${S}/get-salty-tv`} {...EXT} className={`hidden text-xs underline-offset-4 hover:underline md:inline ${solid ? "text-navy" : "text-cream"}`}>Salty TV Log In</a>
          <Link to="/classes" className="btn btn-coral hidden !px-5 !py-3 sm:inline-flex">Book Now</Link>
          <button onClick={() => setOpen(!open)} aria-label="Menu" className={`xl:hidden ${solid ? "text-navy" : "text-cream"}`}>
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="grain fixed inset-x-0 bottom-0 top-[84px] z-40 flex flex-col overflow-y-auto bg-sand px-6 pb-10 pt-6 animate-in fade-in slide-in-from-top-4 xl:hidden">
          {NAV.map((item) => (
            <div key={item.label} className="border-b border-border">
              <Link to={item.to} onClick={() => setOpen(false)} className="headline block py-3 text-3xl text-navy hover:text-coral" activeProps={{ className: "text-coral" }}>
                {item.label}
              </Link>
              {item.children?.map((c) => (
                <Link key={c.label} to={c.to} onClick={() => setOpen(false)} className="block pb-2 pl-4 text-sm text-muted-foreground hover:text-coral" activeProps={{ className: "text-coral" }}>
                  {c.label}
                </Link>
              ))}
            </div>
          ))}
          <a href={`${S}/get-salty-tv`} {...EXT} onClick={() => setOpen(false)} className="mt-6 text-sm text-navy underline">Salty TV Log In</a>
          <Link to="/classes" onClick={() => setOpen(false)} className="btn btn-coral mt-6">Book Now</Link>
        </div>
      )}
    </header>
  );
}

export function PageHero({ img, alt, title, children }: { img: string; alt: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative flex min-h-[62svh] items-end overflow-hidden bg-navy">
      <img src={img} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-40">
        <h1 className="headline max-w-3xl text-[clamp(3rem,9vw,7rem)] text-cream">{title}</h1>
        {children}
      </div>
      <Wave className="absolute bottom-0 left-0 text-sand" />
    </section>
  );
}

export function Splash() {
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
        <img src={SPLASH_IMG} alt="Community Acupuncture with Jenn Conte — full moon qigong event at Salty Dog Yoga & Surf, Carolina Beach" className="max-h-[70dvh] w-full rounded-md object-contain" />
        <a href={M.acupuncture} {...EXT} className="btn btn-coral w-full">Book Community Acupuncture</a>
      </div>
    </div>
  );
}

export function SaltyTVBand() {
  return (
    <section className="bg-navy text-cream">
      <Wave flip className="text-sand" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:py-24">
        <div>
          <p className="eyebrow text-seafoam">salty tv · on demand</p>
          <h2 className="headline mt-4 text-4xl md:text-6xl">experience salty anywhere, anytime.</h2>
          <p className="mt-5 max-w-md text-lg text-cream/80">
            A curated, on demand library stocked FULL of classes for all levels, allowing you to enjoy the best of Pilates, Yoga &amp; Meditations from the comfort of your own home.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`${S}/pricing-plans/list`} {...EXT} className="btn btn-coral">Get Salty TV</a>
            <Link to="/salty-tv" className="btn btn-outline-light">Learn More</Link>
          </div>
        </div>
        <img src={`${W}b22899_5504f43cc65e4d98bf8baa016eef2c14~mv2.jpg`} alt="Salty TV on demand yoga class filmed in Carolina Beach" className="lift aspect-[16/9] w-full rounded-lg object-cover" />
      </div>
      <Wave className="text-sand" />
    </section>
  );
}

export function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <section className="py-20 md:py-28">
      <Reveal className="mx-auto max-w-5xl px-5">
        <div className="relative overflow-hidden rounded-xl bg-seafoam p-8 md:p-14">
          <Doodle src={ILL.shell} className="right-6 top-6 w-16 rotate-12 md:w-20" />
          <h2 className="headline max-w-xl text-4xl md:text-6xl">get salty delivered right to your inbox.</h2>
          {done ? (
            <p className="mt-8 font-serif text-2xl italic">Thank you! You're on the list. Stay salty. 🌊</p>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="mt-8 max-w-xl">
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

export function Footer() {
  const socials = [
    [Youtube, "YouTube", SOCIALS.youtube],
    [Facebook, "Facebook", SOCIALS.facebook],
    [Instagram, "Instagram", SOCIALS.instagram],
  ] as const;
  return (
    <footer className="bg-navy text-cream">
      <Wave flip className="text-sand" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3">
        <div>
          <img src={LOGO} alt="Salty Dog yoga barre pilates logo" className="h-16 w-auto" />
          <p className="headline mt-6 text-3xl">come as a student, leave as a friend.</p>
        </div>
        <div className="space-y-3 text-sm text-cream/80">
          <p className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-coral" />915 a N Lake Park Blvd, Carolina Beach, NC 28428</p>
          <a href="mailto:info@saltydogyogasurf.com" className="flex gap-2 hover:text-coral"><Mail className="h-4 w-4 text-coral" />info@saltydogyogasurf.com</a>
          <a href="tel:+19107073012" className="flex gap-2 hover:text-coral"><Phone className="h-4 w-4 text-coral" />(910) 707-3012</a>
          <div className="flex flex-wrap gap-3 pt-4">
            {socials.map(([I, n, h]) => (
              <a key={n} href={h} {...EXT} aria-label={n} className="lift grid h-10 w-10 place-items-center rounded-full bg-cream/10 hover:bg-coral"><I className="h-4 w-4" /></a>
            ))}
            <a href={SOCIALS.tripadvisor} {...EXT} className="lift grid h-10 place-items-center rounded-full bg-cream/10 px-3 text-[11px] font-bold hover:bg-coral">TripAdvisor</a>
            <a href={SOCIALS.yelp} {...EXT} className="lift grid h-10 place-items-center rounded-full bg-cream/10 px-3 text-[11px] font-bold hover:bg-coral">Yelp</a>
          </div>
        </div>
        <nav className="grid grid-cols-2 gap-2 text-sm">
          {FOOTER_NAV.map((n) => <Link key={n.to} to={n.to} className="text-cream/80 hover:text-coral">{n.label}</Link>)}
        </nav>
      </div>
      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">© 2026 Salty Dog Yoga &amp; Surf</div>
    </footer>
  );
}

export function openApply() {
  window.dispatchEvent(new Event("salty-open-apply"));
}

export function MobileBar({ variant = "default" }: { variant?: "default" | "ytt" }) {
  if (variant === "ytt") {
    return (
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-sand/95 p-3 backdrop-blur md:hidden">
        <a href="#apply" onClick={(e) => { e.preventDefault(); openApply(); }} className="btn btn-outline-dark !px-2 !py-3 !text-[11px]">Apply Now</a>
        <a href="#schedule" className="btn btn-coral !px-2 !py-3 !text-[11px]">View Dates</a>
      </div>
    );
  }
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-sand/95 p-3 backdrop-blur md:hidden">
      <Link to="/classes" className="btn btn-outline-dark !px-2 !py-3 !text-[11px]">Book a Class</Link>
      <a href={M.newStudent} {...EXT} className="btn btn-coral !px-2 !py-3 !text-[11px]">New Student $55</a>
    </div>
  );
}

type Ev = { title: string; date?: Date; time?: string; location?: string; price?: string; image?: string; url?: string };

function parseEvents(json: unknown): Ev[] {
  let arr: Record<string, unknown>[] = [];
  if (Array.isArray(json)) arr = json as Record<string, unknown>[];
  else if (json && typeof json === "object") {
    const o = json as Record<string, unknown>;
    for (const key of ["Events", "events", "data", "items", "result", "results", "value"]) {
      if (Array.isArray(o[key])) { arr = o[key] as Record<string, unknown>[]; break; }
    }
  }
  const pick = (e: Record<string, unknown>, keys: string[]) => {
    for (const k of keys) if (e[k] != null) return e[k];
    return undefined;
  };
  return arr
    .map((e): Ev => {
      const t = String(pick(e, ["title", "Title", "name", "Name"]) ?? "").trim();
      const startRaw = pick(e, ["start", "Start", "startDateTime", "startDate", "StartDate", "startAt"]);
      const d = startRaw ? new Date(String(startRaw)) : undefined;
      const priceRaw = pick(e, ["price", "Price", "cost"]);
      const urlRaw = pick(e, ["url", "Url", "registrationUrl", "bookingUrl"]);
      const imgRaw = pick(e, ["image", "Image", "imageUrl", "imageUrlTemplate", "coverImage"]);
      const loc = pick(e, ["location"]);
      const locName = typeof loc === "string" ? loc : loc && typeof loc === "object" ? String((loc as Record<string, unknown>)["name"] ?? "") : undefined;
      return {
        title: t,
        ...(d && !isNaN(d.getTime()) ? { date: d } : {}),
        ...(locName ? { location: locName } : {}),
        ...(priceRaw != null ? { price: String(priceRaw) } : {}),
        ...(typeof urlRaw === "string" && urlRaw.startsWith("http") ? { url: urlRaw } : {}),
        ...(typeof imgRaw === "string" && imgRaw.startsWith("http") ? { image: imgRaw } : {}),
      };
    })
    .filter((e) => e.title);
}

const SAMPLES = [
  { m: "OCT", d: "18", t: "Sunrise Beach Flow", time: "7:00 – 8:00 AM", loc: "Carolina Beach oceanfront", price: "$15" },
  { m: "OCT", d: "25", t: "Full Moon Sound Bath", time: "7:30 – 9:00 PM", loc: "Gather", price: "$25" },
  { m: "NOV", d: "02", t: "Reformer Fundamentals Workshop", time: "10:00 AM – 12:00 PM", loc: "Studio", price: "$36" },
  { m: "NOV", d: "08", t: "Candlelight Restorative", time: "6:00 – 7:30 PM", loc: "Studio", price: "$18" },
  { m: "NOV", d: "15", t: "Gratitude Flow & Yoga Nidra", time: "5:30 – 7:00 PM", loc: "Studio", price: "$22" },
  { m: "NOV", d: "22", t: "Holiday Mat Pilates Pop-Up", time: "9:00 – 10:00 AM", loc: "Carolina Beach", price: "$18" },
];

export function EventsSection({ count, heading = "upcoming events" }: { count: number; heading?: string }) {
  const [events, setEvents] = useState<Ev[] | null>(null);
  const [fallback, setFallback] = useState(false);
  useEffect(() => {
    let dead = false;
    fetch(M.eventsApi)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((json) => {
        if (dead) return;
        const now = Date.now() - 86400000;
        const list = parseEvents(json)
          .filter((e) => !e.date || e.date.getTime() >= now)
          .sort((a, b) => (a.date?.getTime() ?? 0) - (b.date?.getTime() ?? 0))
          .slice(0, count);
        if (list.length) setEvents(list);
        else { setEvents([]); setFallback(true); }
      })
      .catch(() => { if (!dead) { setEvents([]); setFallback(true); } });
    return () => { dead = true; };
  }, [count]);

  type Card = { m: string; d: string; t: string; time?: string; loc?: string; price?: string; img?: string; url: string };
  const shown: Card[] =
    events === null
      ? []
      : fallback || events.length === 0
        ? SAMPLES.slice(0, count).map((s) => ({ ...s, url: M.momence }))
        : events.map((e) => ({
            m: e.date ? e.date.toLocaleDateString("en-US", { month: "short" }).toUpperCase() : "—",
            d: e.date ? String(e.date.getDate()) : "·",
            t: e.title,
            ...(e.time ? { time: e.time } : {}),
            ...(e.location ? { loc: e.location } : {}),
            ...(e.price ? { price: e.price } : {}),
            ...(e.image ? { img: e.image } : {}),
            url: e.url || M.momence,
          }));

  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="mb-10">
          <h2 className="headline text-5xl md:text-7xl">{heading}</h2>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {shown.map((e, i) => (
            <Reveal key={`${e.t}-${i}`} delay={(i % 3) * 100}>
              <div className="lift relative flex items-center gap-5 overflow-hidden rounded-lg bg-cream p-5">
                {fallback && <span className="absolute right-4 top-4 rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold tracking-widest text-muted-foreground">SAMPLE</span>}
                {e.img && <img src={e.img} alt={e.t} className="h-20 w-20 shrink-0 rounded-md object-cover" />}
                {!e.img && (
                  <div className="grid h-20 w-20 shrink-0 place-items-center rounded-md bg-navy text-center text-cream">
                    <div><div className="text-[10px] tracking-widest text-seafoam">{e.m}</div><div className="headline text-3xl">{e.d}</div></div>
                  </div>
                )}
                <div className="min-w-0">
                  <h3 className="font-serif text-xl leading-tight">{e.t}</h3>
                  {e.time && <p className="mt-1 text-sm text-muted-foreground">{e.time}</p>}
                  {e.loc && <p className="text-sm text-muted-foreground">{e.loc}</p>}
                  {e.price && <p className="text-sm font-semibold text-navy">{e.price}</p>}
                  <a href={e.url} {...EXT} className="mt-2 inline-block text-xs font-bold uppercase tracking-widest text-coral hover:underline">Book</a>
                </div>
              </div>
            </Reveal>
          ))}
          {events === null && <p className="text-sm text-muted-foreground">Loading events…</p>}
        </div>
        {fallback && (
          <p className="mt-4 rounded-lg border-2 border-dashed border-input p-4 text-center text-sm text-muted-foreground">
            Live Momence events appear here on the final site.
          </p>
        )}
      </div>
    </section>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <h2 className="headline text-center text-4xl md:text-6xl">questions?</h2>
          <div className="mt-10 space-y-3">
            {items.map((f) => (
              <details key={f.q} className="group rounded-lg bg-cream p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg">
                  {f.q}
                  <ChevronDown className="h-4 w-4 shrink-0 text-coral transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function InnerPage({ children, yttBar = false }: { children: ReactNode; yttBar?: boolean }) {
  useReveal();
  return (
    <div className="overflow-x-hidden pb-20 md:pb-0">
      <AnnouncementBar />
      <Header />
      {children}
      <SaltyTVBand />
      <Newsletter />
      <Footer />
      <MobileBar variant={yttBar ? "ytt" : "default"} />
      <JsonLd />
    </div>
  );
}
