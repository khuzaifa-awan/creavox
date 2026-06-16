// import { ArrowRight } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

// const flowSteps = [
//   { number: "1", label: "Ad Impression" },
//   { number: "2", label: "Click" },
//   { number: "3", label: "Landing Page" },
//   { number: "4", label: "AI Follow-Up" },
//   { number: "5", label: "Booking Calendar" },
//   { number: "6", label: "Confirmed Consultation" },
// ];

// const detailedSteps = [
//   {
//     number: "01",
//     title: "How Ads Work — Precision Targeting",
//     quote:
//       "We position your clinic in front of high-intent local patients using precision targeting and intent-driven creatives.",
//     description:
//       "We run Meta and Google campaigns built specifically for aesthetic procedures. We align targeting, creative, and funnel so interest turns into booked patients instead of wasted traffic.",
//     highlight: "Right audience + Right ad + Right moment",
//   },
//   {
//     number: "02",
//     title: "How Leads Convert — Landing Page",
//     quote:
//       "Every click is directed to a conversion-optimized landing page designed to turn interest into booked consultations.",
//     description:
//       "A landing page converts when it matches intent fast and removes every distraction from the decision. If the next step isn't obvious, people compare, hesitate, and leave.",
//     highlight: "Click to form submission to captured interest",
//   },
//   {
//     number: "03",
//     title: "How Follow-Up Works — AI Engine",
//     quote:
//       "Our AI follow-up system instantly contacts every lead within seconds and nurtures them until they book.",
//     description:
//       "The moment a form is submitted, our AI sends a personalized WhatsApp or Email within 60 seconds. It then follows a multi-touch nurture sequence over 7 days — qualifying interest, answering questions, and guiding the lead toward booking a consultation. 24 hours a day, 7 days a week.",
//     highlight: "Lead contacted in under 60 seconds, nurtured until booked",
//   },
//   {
//     number: "04",
//     title: "Qualified Booking — Consultation Confirmed",
//     quote:
//       "Only serious, qualified patients are guided to your calendar — not time-wasters.",
//     description:
//       "Before a patient reaches your booking calendar, the AI has already qualified their intent, confirmed their procedure interest, and verified they are a genuine candidate. Your team receives pre-qualified, warm leads — not cold form submissions. The result: fewer no-shows, higher consultation-to-procedure conversion rates.",
//     highlight: "Pre-qualified patients only reach your calendar",
//   },
// ];

// export function ProcessSection() {
//   return (
//     <section
//       id="process"
//       aria-label="How our process works"
//       className="py-20 md:py-28"
//     >
//       <div className="container mx-auto px-4">

//         {/* Heading */}
//         <div className="text-center mb-12 md:mb-16">
//           <h2 className="text-3xl md:text-4xl lg:text-4xl tracking-tight">
//             This Is Exactly How We Fill Your Consultation Calendar — Every
//             Single Month
//           </h2>
//         </div>

//         {/* Flow Diagram — Desktop */}
//         <div
//           className="hidden md:flex items-center justify-center gap-3 lg:gap-4 max-w-6xl mx-auto mb-16"
//           style={{ fontFamily: "var(--font-poppins), sans-serif" }}
//           aria-label="Patient acquisition flow"
//         >
//           {flowSteps.map((step, index) => (
//             <div key={step.number} className="flex items-center">
//               <div className="flex flex-col items-center">
//                 <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-card border-2 border-primary/30 flex items-center justify-center mb-2">
//                   <span className="text-xl lg:text-2xl font-bold text-primary">
//                     {step.number}
//                   </span>
//                 </div>
//                 <p className="text-xs text-center text-muted-foreground max-w-[70px] lg:max-w-[80px]">
//                   {step.label}
//                 </p>
//               </div>
//               {index < flowSteps.length - 1 && (
//                 <ArrowRight
//                   className="h-5 w-5 lg:h-6 lg:w-6 text-primary/40 mx-1 lg:mx-2 flex-shrink-0"
//                   aria-hidden="true"
//                 />
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Flow Diagram — Mobile */}
//         <div className="md:hidden flex flex-col items-center gap-3 mb-12">
//           {flowSteps.map((step, index) => (
//             <div key={step.number} className="flex flex-col items-center">
//               <div className="w-16 h-16 rounded-2xl bg-card border-2 border-primary/30 flex items-center justify-center mb-1">
//                 <span className="text-xl font-bold text-primary">
//                   {step.number}
//                 </span>
//               </div>
//               <p className="text-xs text-center text-muted-foreground">
//                 {step.label}
//               </p>
//               {index < flowSteps.length - 1 && (
//                 <div
//                   className="w-0.5 h-6 bg-primary/20 my-1"
//                   aria-hidden="true"
//                 />
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Detailed Steps */}
//         <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
//           {detailedSteps.map((step) => (
//             <article key={step.number}>
//               <Card className="border-l-4 border-l-primary">
//                 <CardHeader>
//                   <div className="flex items-start gap-3 md:gap-4">
//                     <span
//                       className="text-4xl md:text-5xl font-bold text-primary/20 flex-shrink-0"
//                       aria-hidden="true"
//                     >
//                       {step.number}
//                     </span>
//                     <div className="flex-1">
//                       <CardTitle className="text-lg md:text-xl mb-2">
//                         {step.title}
//                       </CardTitle>
//                       <p className="text-sm md:text-base text-muted-foreground italic">
//                         "{step.quote}"
//                       </p>
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-sm md:text-base text-muted-foreground mb-4">
//                     {step.description}
//                   </p>
//                   <p className="text-sm text-primary font-medium">
//                     {step.highlight}
//                   </p>
//                 </CardContent>
//               </Card>
//             </article>
//           ))}
//         </div>

//         {/* Soft CTA */}
//         <p
//           className="mt-12 text-center text-sm md:text-base leading-relaxed text-[#F0EFE7]/75 italic max-w-2xl mx-auto"
//         >
//           Every week without a system is a week your competitors are filling
//           the consultations that should be yours.
//         </p>

//         {/* CTA Button */}
//         <div className="mt-10 flex justify-center">
//           <button className="btn-primary w-full sm:w-auto text-md md:text-base px-7 py-3.5">
//             I'm Ready — Let's Build My System →
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }

// ----chatgpt--

import { ArrowRight } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const flowSteps = [
  { number: "1", label: "Ad Impression" },
  { number: "2", label: "Click" },
  { number: "3", label: "Landing Page" },
  { number: "4", label: "AI Follow-Up" },
  { number: "5", label: "Booking Calendar" },
  { number: "6", label: "Confirmed Consultation" },
];

const detailedSteps = [
  {
    number: "01",
    title: "How Ads Work — Precision Targeting",
    description:
      "We position your clinic in front of high-intent local patients using precision targeting and intent-driven creatives.",
    quote:
      "We run Meta and Google campaigns built specifically for aesthetic procedures. We align targeting, creative, and funnel so interest turns into booked patients instead of wasted traffic.",
    highlight: "Right audience + Right ad + Right moment",
  },
  {
    number: "02",
    title: "How Leads Convert — Landing Page",
    description:
      "Every click is directed to a conversion-optimized landing page designed to turn interest into booked consultations.",
    quote:
      "A landing page converts when it matches intent fast and removes every distraction from the decision. If the next step isn't obvious, people compare, hesitate, and leave.",
    highlight: "Click to form submission to captured interest",
  },
  {
    number: "03",
    title: "How Follow-Up Works — AI Engine",
    description:
      "Our AI follow-up system instantly contacts every lead within seconds and nurtures them until they book.",
    quote:
      "The moment a form is submitted, our AI sends a personalized WhatsApp or Email within 60 seconds. It then follows a multi-touch nurture sequence over 7 days — qualifying interest, answering questions, and guiding the lead toward booking a consultation. 24 hours a day, 7 days a week.",
    highlight: "Lead contacted in under 60 seconds, nurtured until booked",
  },
  {
    number: "04",
    title: "Qualified Booking — Consultation Confirmed",
    description:
      "Only serious, qualified patients are guided to your calendar — not time-wasters.",
    quote:
      "Before a patient reaches your booking calendar, the AI has already qualified their intent, confirmed their procedure interest, and verified they are a genuine candidate. Your team receives pre-qualified, warm leads — not cold form submissions. The result: fewer no-shows, higher consultation-to-procedure conversion rates.",
    highlight: "Pre-qualified patients only reach your calendar",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-label="How our process works"
      className="py-20 md:py-28"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-4xl tracking-tight">
            This Is Exactly How We Fill Your Consultation Calendar — Every
            Single Month
          </h2>
        </div>

        {/* Detailed Steps */}
        <div className="max-w-5xl mx-auto">
          {detailedSteps.map((step, index) => (
            <article
              key={step.number}
              className="sticky mb-6 md:mb-8"
              style={{ top: `${96 + index * 20}px` }}
            >
              <div
                style={{
                  background: `linear-gradient(165deg, rgba(203,133,48) 9%, #13161c 45%)`,
                  border: `1px solid rgba(203,133,48)`,
                  borderRadius: "24px",
                  padding: "clamp(32px, 5vw, 56px)",
                  minHeight: "clamp(320px, 45vh, 480px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                }}
              >
                {/* Top — large title */}
                <div>
                  {/* Background number watermark */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "16px",
                  fontSize: "clamp(5rem, 10vw, 8rem)",
                  fontWeight: 900,
                  color: "rgba(203,133,48,0.06)",
                  lineHeight: 1,
                  fontFamily: "'Poppins', sans-serif",
                  userSelect: "none",
                }}
              >
                {step.number}
              </div>

                  <h3
                    style={{
                      fontSize: "clamp(2rem, 5vw, 4rem)",
                      fontWeight: 600,
                      color: "#F0EFE7",
                      lineHeight: 1.1,
                      margin: 0,
                      fontFamily: "'Poppins', sans-serif",
                      maxWidth: "100%",
                    }}
                  >
                    {step.title.split(" — ")[0]}
                    <br />
                    <span
                      style={{
                        color: "rgba(240,239,231,0.35)",
                        fontWeight: 200,
                        maxWidth: "100%",
                        padding: "4px 8px",
                        marginBottom: "4px",
                      }}
                    >
                      {step.title.split(" — ")[1]}
                    </span>
                  </h3>
                </div>

                {/* Bottom — tags + description */}
                <div>
                  {/* Pills */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginBottom: "24px",
                      marginTop: "16px",
                    }}
                  >
                    {step.highlight.split(" + ").map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: "12px",
                          padding: "6px 14px",
                          borderRadius: "999px",
                          border: "1px solid rgba(203,133,48,0.25)",
                          color: "rgba(240,239,231,0.65)",
                          fontFamily: "'Poppins', sans-serif",
                          background: "rgba(203,133,48,0.06)",
                        }}
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>

                  {/* Description row with star icon */}
                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
                    }}
                  >
                    {/* Star icon */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ flexShrink: 0, marginTop: "3px" }}
                      aria-hidden="true"
                    >
                      <path
                        d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z"
                        stroke="#CB8530"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p
                      style={{
                        fontSize: "clamp(13px, 1.4vw, 16px)",
                        color: "rgba(240,239,231,0.6)",
                        lineHeight: 1.6,
                        margin: 0,
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Soft CTA */}
        <p className="mt-12 text-center text-sm md:text-base leading-relaxed text-[#F0EFE7]/75 italic max-w-2xl mx-auto">
          Every week without a system is a week your competitors are filling the
          consultations that should be yours.
        </p>

        {/* CTA Button */}
        <div className="mt-10 flex justify-center">
          <button className="btn-primary"
          style={{
            padding: "clamp(13px, 1.4vw, 19px) clamp(20px, 2.5vw, 35px)",
            width: "clamp(200px, 40vw, 450px)",
            fontSize: "clamp(18px, 1.4vw, 18px)",
          }}>
            I'm Ready — Let's Build My System →
          </button>
        </div>
      </div>
    </section>
  );
}

// gsap new new

// ------------- new version---------
// "use client";
// import { useEffect, useRef, useState } from "react";

// const steps = [
//   {
//     number: "01",
//     title: "Ad Impression",
//     subtitle: "Precision Targeting",
//     description: "We position your clinic in front of high-intent local patients before your competitor even loads their page.",
//   },
//   {
//     number: "02",
//     title: "AI Follow-Up",
//     subtitle: "60-Second Response",
//     description: "The moment a lead submits, our AI contacts them within 60 seconds via WhatsApp or Email — 24/7.",
//   },
//   {
//     number: "03",
//     title: "Lead Qualified",
//     subtitle: "Smart Filtering",
//     description: "Our system filters out time-wasters and verifies genuine interest, procedure intent, and financial capacity.",
//   },
//   {
//     number: "04",
//     title: "Consultation Booked",
//     subtitle: "Revenue Confirmed",
//     description: "Only pre-qualified, warm patients reach your calendar. Fewer no-shows. Higher conversion rates.",
//   },
// ];

// export function ProcessSection() {
//   const [visible, setVisible] = useState(false);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setVisible(true);
//       },
//       { threshold: 0.15 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div id="process" ref={sectionRef} className="bg-[#0b0d11] py-20 md:py-28 px-4">
//       <div className="container mx-auto">

//         {/* Heading */}
//         <div className="mb-16 md:mb-20">
//           <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4 font-medium">
//             Our Process
//           </p>
//           <h2
//             className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F0EFE7] leading-none uppercase"
//             style={{ fontFamily: "'Poppins', sans-serif" }}
//           >
//             OUR<br />
//             <span style={{ color: "#CB8530" }}>PROCESS</span>
//           </h2>
//         </div>

//         {/* Cards grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
//           {steps.map((step, index) => (
//             <div
//               key={step.number}
//               style={{
//                 opacity: visible ? 1 : 0,
//                 transform: visible ? "scale(1) translateY(0)" : "scale(0.92) translateY(30px)",
//                 transition: `opacity 0.6s ease, transform 0.6s ease`,
//                 transitionDelay: `${index * 120}ms`,
//                 background: "rgba(30,31,38,0.6)",
//                 border: "1px solid rgba(203,133,48,0.2)",
//                 borderRadius: "20px",
//                 padding: "32px 28px",
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "16px",
//                 backdropFilter: "blur(8px)",
//                 position: "relative",
//                 overflow: "hidden",
//               }}
//             >
//               {/* Background number watermark */}
//               <div
//                 aria-hidden="true"
//                 style={{
//                   position: "absolute",
//                   top: "-10px",
//                   right: "16px",
//                   fontSize: "clamp(5rem, 10vw, 8rem)",
//                   fontWeight: 900,
//                   color: "rgba(203,133,48,0.06)",
//                   lineHeight: 1,
//                   fontFamily: "'Poppins', sans-serif",
//                   userSelect: "none",
//                 }}
//               >
//                 {step.number}
//               </div>

//               {/* Gold dot */}
//               <div
//                 style={{
//                   width: "42px",
//                   height: "42px",
//                   borderRadius: "12px",
//                   background: "rgba(203,133,48,0.15)",
//                   border: "1px solid rgba(203,133,48,0.35)",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   flexShrink: 0,
//                 }}
//               >
//                 <span
//                   style={{
//                     fontSize: "13px",
//                     fontWeight: 700,
//                     color: "#CB8530",
//                     fontFamily: "'Poppins', sans-serif",
//                   }}
//                 >
//                   {step.number}
//                 </span>
//               </div>

//               {/* Divider */}
//               <div
//                 style={{
//                   width: "100%",
//                   height: "1px",
//                   background: "rgba(203,133,48,0.15)",
//                 }}
//                 aria-hidden="true"
//               />

//               {/* Big number stat style */}
//               <div
//                 style={{
//                   fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
//                   fontWeight: 700,
//                   color: "#F0EFE7",
//                   lineHeight: 1.1,
//                   fontFamily: "'Poppins', sans-serif",
//                 }}
//               >
//                 {step.title}
//               </div>

//               {/* Subtitle */}
//               <div
//                 style={{
//                   fontSize: "clamp(14px, 1.5vw, 16px)",
//                   fontWeight: 500,
//                   color: "#CB8530",
//                   fontFamily: "'Poppins', sans-serif",
//                 }}
//               >
//                 {step.subtitle}
//               </div>

//               {/* Description */}
//               <p
//                 style={{
//                   fontSize: "clamp(12px, 1.3vw, 14px)",
//                   color: "rgba(240,239,231,0.55)",
//                   lineHeight: 1.6,
//                   fontFamily: "'Poppins', sans-serif",
//                   margin: 0,
//                 }}
//               >
//                 {step.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="mt-16 md:mt-20 text-center">
//           <p
//             className="text-sm md:text-base leading-relaxed text-[#F0EFE7]/65 italic max-w-2xl mx-auto mb-10"
//             style={{ fontFamily: "'Poppins', sans-serif" }}
//           >
//             Every week without a system is a week your competitors are filling
//             the consultations that should be yours.
//           </p>
//           <button className="btn-primary text-sm md:text-base px-8 py-4">
//             I&apos;m Ready — Let&apos;s Build My System →
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }
