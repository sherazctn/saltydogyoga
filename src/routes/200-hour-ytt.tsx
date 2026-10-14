import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { EXT, W, G, InnerPage, PageHero, Reveal } from "@/components/site";
import { TRAINING } from "@/lib/site-rules";

const HERO = `${W}b22899_c69944e0b931474cb01e25e77f69cc13~mv2.jpg`;

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

const WEEKENDS = [
  ["Feb 26 – 28", "Immersion Weekend 1"],
  ["Mar 12 – 14", "Immersion Weekend 2", "Mar 24 evening session"],
  ["Apr 9 – 11", "Immersion Weekend 3"],
  ["May 21 – 23", "Immersion Weekend 4", "May 5 evening session"],
  ["Jun 4 – 6", "Immersion Weekend 5"],
  ["Jul 16 – 18", "Immersion Weekend 6", "Jul 28 evening session"],
  ["Aug 27 – 29", "Immersion Weekend 7"],
  ["Sep 10 – 12", "Immersion Weekend 8 · Final Weekend"],
];
const HIGHLIGHTS = [
  ["Yoga Alliance 5-Star Certified", "Full eligibility for RYT-200 registration upon graduation."],
  ["Once-a-Year Cohort", "An intimate immersion fostering a close-knit, supportive community (sangha)."],
  ["Intentionally Spacious", "A spacious timeline built for deep digestion, practice, and life integration."],
  ["Comprehensive Hybrid Model", `${TRAINING.liveHours} hours of live instruction + ${TRAINING.recordedHours} hours of on-demand self-paced learning.`],
];
const CURRICULUM = [
  { h: "Techniques, Training & Practice", t: "Learn the asanas, pranayamas, kriyas, chanting, mantra, meditation and other traditional yoga techniques." },
  { h: "Teaching Methodology", t: "Includes sequencing, the qualities of a teacher, the student's process of learning, and business aspects of teaching yoga." },
  { h: "Anatomy & Physiology", t: "Human anatomy and physiology (bodily systems, organs, etc.) as well as energy anatomy and physiology (chakras, nadis, etc.)." },
  { h: "Yoga Philosophy, Lifestyle & Ethics", t: "The study of yoga philosophies and traditional texts, yoga lifestyle, ethics for yoga teachers and the value of teaching yoga as a service." },
  { h: "Practicum", t: "Practice teaching, receiving feedback, observing others teaching and hearing/giving assists." },
];

function ApplyLink({ className = "btn btn-coral" }: { className?: string }) {
  return <a href={G.yttApply} {...EXT} className={className}>Apply Now <ArrowUpRight className="h-4 w-4" /></a>;
}

function YttPage() {
  return (
    <InnerPage yttBar>
      <PageHero img={HERO} alt="Yoga teacher training cohort at Salty Dog in Carolina Beach, NC" title="200 hour yoga teacher training">
        <p className="mt-6 max-w-xl text-xl text-cream/90">Deepen Your Practice. Expand Your Life.</p>
        <div className="mt-8 flex flex-wrap gap-3"><ApplyLink /><a href="#dates" className="btn btn-outline-light">View Dates</a></div>
      </PageHero>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="max-w-4xl">
            <h2 className="headline text-4xl md:text-6xl">deepen your practice. expand your life.</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Ready to bring your practice off the mat and into the rest of your life? Salty Dog Yoga’s Yoga Alliance five star 200-Hour Yoga Teacher Training goes beyond the poses. It’s an immersive deep dive into a complete yoga lifestyle, dynamic alignment, and self-discovery. Designed to be flexible and fun, this program is perfect whether you're aiming to become a Registered Yoga Teacher or simply looking to step into a fuller, more conscious way of living.</p>
          </Reveal>
          <Reveal className="mt-16"><p className="eyebrow text-coral">your annual immersion</p><h2 className="headline mt-3 text-4xl md:text-6xl">program highlights</h2></Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {HIGHLIGHTS.map(([h, t], i) => <Reveal key={h} delay={i * 70} className="h-full"><div className="h-full rounded-lg bg-cream p-7"><Check className="h-6 w-6 text-coral" /><h3 className="mt-4 font-serif text-2xl">{h}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{t}</p></div></Reveal>)}
          </div>
        </div>
      </section>

      <section id="dates" className="grain scroll-mt-24 py-20">
        <div className="mx-auto max-w-5xl px-5">
          <Reveal><p className="eyebrow text-coral">training weekends</p><h2 className="headline mt-3 text-4xl md:text-6xl">training dates &amp; schedule</h2></Reveal>
          <Reveal className="mt-8 border-y border-border py-6">
            <h3 className="font-serif text-2xl">Standard Weekend Hours</h3>
            <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3"><p><strong>Fridays</strong><br />5:30 PM – 9:00 PM</p><p><strong>Saturdays</strong><br />8:00 AM – 6:00 PM</p><p><strong>Sundays</strong><br />8:00 AM – 4:00 PM</p></div>
            <p className="mt-4 text-sm text-muted-foreground">Plus 4 Wednesday evening sessions, 5:30 PM – 9:00 PM.</p>
          </Reveal>
          <Reveal className="mt-10"><h3 className="font-serif text-2xl">2026 Cohort Weekend Dates</h3><div className="mt-5 divide-y divide-border">{WEEKENDS.map(([date, label, evening]) => <div key={date} className="grid gap-2 py-5 sm:grid-cols-2"><p className="font-serif text-2xl">{date}</p><div><p className="font-medium">{label}</p>{evening && <p className="mt-1 text-sm text-muted-foreground">{evening}</p>}</div></div>)}</div></Reveal>
          <Reveal className="mt-8"><ApplyLink /></Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-coral">an investment in you</p><h2 className="headline mt-3 text-4xl md:text-6xl">flexible investment &amp; pricing</h2>
            <p className="mt-6 text-lg text-muted-foreground">Learning shouldn't feel rushed or overwhelming. Our 200-hour training offers manageable stages and flexible payment options.</p>
            <div className="mt-8 space-y-5 text-muted-foreground"><p><strong className="text-navy">Pay As You Go:</strong> Pay upfront in full or in stages.</p><p><strong className="text-navy">Secure Your Spot:</strong> A ${TRAINING.deposit} non-refundable deposit holds your place in the annual cohort.</p><p><strong className="text-navy">Scholarships Available:</strong> Limited scholarship rates offered per cohort to support accessibility.</p></div>
          </Reveal>
          <Reveal className="border-l-4 border-coral bg-cream p-8">
            <p className="eyebrow">200-hour training</p><p className="headline mt-4 text-6xl">${TRAINING.price.toLocaleString("en-US")}</p><p className="mt-3 text-sm text-muted-foreground">A {TRAINING.cardFeePercent}% fee is added to card payments.</p>
            <h3 className="mt-8 font-serif text-2xl">Cost includes</h3><ul className="mt-5 space-y-5 text-sm leading-relaxed text-muted-foreground">
              <li><strong className="text-navy">Comprehensive Training Manuals:</strong> Printed and downloadable manuals complete with lesson plans, templates, and detailed technique breakdown pages for traditional Hatha postures and meditations.</li>
              <li><strong className="text-navy">{TRAINING.liveHours} Hours of Live Training:</strong> In-person/live sessions guided by expert trainers.</li>
              <li><strong className="text-navy">{TRAINING.recordedHours} Hours of Recorded Content:</strong> Pre-recorded technique training covering postures, breathing techniques (pranayama), meditation, and yogic philosophy.</li>
              <li><strong className="text-navy">Ten class pass:</strong> Keep your practice growing, or receive {TRAINING.membershipDiscountPercent}% off your monthly membership for Good Vibe Tribe members while in the training.</li>
            </ul>
            <p className="mt-8 font-serif text-xl">We like to keep things intimate so space is limited. Apply today.</p><ApplyLink className="btn btn-coral mt-6" /><p className="mt-4 text-xs text-muted-foreground">A nonrefundable ${TRAINING.deposit} deposit is required to secure your spot in the training.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20"><div className="mx-auto max-w-4xl px-5"><Reveal><p className="eyebrow text-coral">what you'll learn</p><h2 className="headline mt-3 text-4xl md:text-6xl">curriculum</h2></Reveal><div className="mt-10 space-y-4">{CURRICULUM.map((c, i) => <Reveal key={c.h} delay={i * 80}><div className="rounded-lg bg-cream p-6"><h3 className="font-serif text-xl">{c.h}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.t}</p></div></Reveal>)}</div><Reveal className="mt-10"><a href={G.yttInterest} {...EXT} className="btn btn-outline-dark">Join the Interest List <ArrowUpRight className="h-4 w-4" /></a></Reveal></div></section>
    </InnerPage>
  );
}
