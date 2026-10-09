import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { EXT, W, G, InnerPage, PageHero, Reveal, Doodle, ILL, openApply } from "@/components/site";

const HERO = `${W}be5110_168048bef2dc4e58863152c92f6a5fdd~mv2.jpg`;

export const Route = createFileRoute("/200-hour-ytt")({
  head: () => ({
    meta: [
      { title: "200 Hour Yoga Teacher Training | Salty Dog Yoga & Surf, Carolina Beach NC" },
      { name: "description", content: "Become a Registered Yoga Teacher with a flexible-format 200 Hour Yoga Alliance approved training in Carolina Beach, NC. Affordable, flexible and fun." },
      { property: "og:title", content: "200 Hour Yoga Teacher Training | Salty Dog Yoga & Surf, Carolina Beach NC" },
      { property: "og:description", content: "Affordable, flexible and fun — become a Registered Yoga Teacher (RYT) with Salty Dog's Yoga Alliance approved training." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: HERO },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: YttPage,
});

const MODULES: [string, string][] = [
  ["Module 1", "Feb 6-8, Mar 6-8, Apr 10-12, May 1-3"],
  ["Module 2", "May 29-31, Jun 19-21, Jul 17-19, Aug 14-16"],
  ["Module 3", "Sep 11-13, Oct 9-11, Nov 6-8, Dec 4-6"],
  ["Module 4", "Feb 5-7, Mar 5-7, Apr 9-11, May 14-16"],
];

const WHY = [
  { h: "Affordable, Flexible & Fun", t: "We know it's a lot of time and money to commit to, so we've designed our training to be as affordable as possible. Our flexible format allows you to go at your own pace, and it's fun!" },
  { h: "A One of a Kind Experience", t: "Training can be completed in as little as 8 months or take up to 3 years if you want to go slower. You can also take individual modules at other studios and have them counted toward your 200 hours with us." },
  { h: "Designed for the Salty Lifestyle", t: "Live near the beach? Headed on vacation? Take your time and enjoy the experience. Modules are designed so you can pick up where you left off — even if life gets busy." },
];

const CURRICULUM = [
  { h: "Techniques, Training & Practice", t: "Learn the asanas, pranayamas, kriyas, chanting, mantra, meditation and other traditional yoga techniques." },
  { h: "Teaching Methodology", t: "Includes sequencing, the qualities of a teacher, the student's process of learning, and business aspects of teaching yoga." },
  { h: "Anatomy & Physiology", t: "Human anatomy and physiology (bodily systems, organs, etc.) as well as energy anatomy and physiology (chakras, nadis, etc.)." },
  { h: "Yoga Philosophy, Lifestyle & Ethics", t: "The study of yoga philosophies and traditional texts, yoga lifestyle, ethics for yoga teachers and the value of teaching yoga as a service." },
  { h: "Practicum", t: "Practice teaching, receiving feedback, observing others teaching and hearing/giving assists." },
];

function ApplyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-navy/70 p-4" role="dialog" aria-modal="true" aria-label="Teacher training application">
      <div className="relative w-full max-w-lg rounded-xl bg-cream p-8">
        <button onClick={onClose} aria-label="Close application" className="absolute right-4 top-4 rounded-full p-2 hover:bg-sand"><X className="h-5 w-5" /></button>
        <p className="eyebrow text-coral">200 hour ytt</p>
        <h3 className="headline mt-2 text-4xl">apply now</h3>
        <div className="mt-6 rounded-lg border-2 border-dashed border-input bg-sand p-6 text-center text-sm text-muted-foreground">
          Google Form application (embedded in Wix)
        </div>
        <a href={G.yttForm} {...EXT} className="btn btn-coral mt-6 w-full">Open the Application Form <ArrowUpRight className="h-4 w-4" /></a>
      </div>
    </div>
  );
}

function YttPage() {
  const [applyOpen, setApplyOpen] = useState(false);
  useEffect(() => {
    const h = () => setApplyOpen(true);
    window.addEventListener("salty-open-apply", h);
    return () => window.removeEventListener("salty-open-apply", h);
  }, []);
  return (
    <InnerPage yttBar>
      <PageHero img={HERO} alt="200 hour yoga teacher training at Salty Dog Yoga & Surf in Carolina Beach, NC" title="200 hour yoga teacher training">
        <p className="mt-4 max-w-xl text-xl text-cream/90">Affordable. Flexible. Fun.</p>
        <p className="mt-2 max-w-xl text-cream/80">Are you looking to become a Registered Yoga Teacher? Do you want to deepen your yoga practice and understanding? Look no further — Salty Dog Yoga's 200 hour Yoga Teacher Training has been designed to make training accessible to everyone.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={openApply} className="btn btn-coral">Apply Now</button>
          <a href="#dates" className="btn btn-outline-light">View Dates</a>
        </div>
      </PageHero>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <h2 className="headline text-center text-4xl md:text-6xl">why salty dog?</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {WHY.map((w, i) => (
              <Reveal key={w.h} delay={i * 100}>
                <div className="lift h-full rounded-lg bg-cream p-7 text-center">
                  <h3 className="font-serif text-2xl text-navy">{w.h}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="dates" className="grain py-20">
        <div className="mx-auto max-w-5xl px-5">
          <Reveal className="relative text-center">
            <Doodle src={ILL.waves} className="-top-10 right-1/4 w-24 rotate-6 opacity-90" />
            <p className="eyebrow text-coral">training modules</p>
            <h2 className="headline mt-3 text-4xl md:text-6xl">upcoming dates</h2>
          </Reveal>
          <Reveal delay={100} className="mt-10 overflow-hidden rounded-lg bg-cream">
            {MODULES.map(([mod, dates], i) => (
              <div key={mod} className={`flex flex-col justify-between gap-1 p-6 sm:flex-row sm:items-center ${i !== 0 ? "border-t border-border" : ""}`}>
                <span className="headline text-2xl">{mod}</span>
                <span className="text-sm text-muted-foreground">{dates}</span>
              </div>
            ))}
          </Reveal>
          <Reveal delay={150} className="mt-6 text-center">
            <button onClick={openApply} className="btn btn-coral">Apply Now</button>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal>
            <p className="eyebrow text-coral">what you'll learn</p>
            <h2 className="headline mt-3 text-4xl md:text-6xl">curriculum</h2>
          </Reveal>
          <div className="mt-10 space-y-4">
            {CURRICULUM.map((c, i) => (
              <Reveal key={c.h} delay={i * 80}>
                <div className="rounded-lg bg-cream p-6">
                  <h3 className="font-serif text-xl">{c.h}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ApplyModal open={applyOpen} onClose={() => setApplyOpen(false)} />
    </InnerPage>
  );
}
