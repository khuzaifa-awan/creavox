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


// -------------chrome new version---------


// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const steps = [
//   {
//     number: "01",
//     label: "Ad Impression",
//     title: "Precision Targeting",
//     description:
//       "We run Meta and Google campaigns built specifically for aesthetic procedures. We align targeting, creative, and funnel so interest turns into booked patients instead of wasted traffic.",
//     highlight: "Right audience + Right ad + Right moment",
//   },
//   {
//     number: "02",
//     label: "Click",
//     title: "Intent-Driven Creative",
//     description:
//       "A landing page converts when it matches intent fast and removes every distraction from the decision. If the next step isn't obvious, people compare, hesitate, and leave.",
//     highlight: "Click to form submission to captured interest",
//   },
//   {
//     number: "03",
//     label: "Landing Page",
//     title: "Conversion Infrastructure",
//     description:
//       "Every click is directed to a conversion-optimized landing page designed to turn interest into booked consultations.",
//     highlight: "Optimized for one action — booking",
//   },
//   {
//     number: "04",
//     label: "AI Follow-Up",
//     title: "60-Second Response",
//     description:
//       "The moment a form is submitted, our AI sends a personalized WhatsApp or Email within 60 seconds. It nurtures over 7 days — 24 hours a day, 7 days a week.",
//     highlight: "Lead contacted in under 60 seconds, nurtured until booked",
//   },
//   {
//     number: "05",
//     label: "Booking Calendar",
//     title: "Qualified Scheduling",
//     description:
//       "Only serious, pre-qualified patients are guided to your calendar. The AI has already confirmed their procedure interest and financial intent.",
//     highlight: "Pre-qualified patients only reach your calendar",
//   },
//   {
//     number: "06",
//     label: "Confirmed Consultation",
//     title: "Revenue in Your Clinic",
//     description:
//       "Your team receives warm, qualified leads — not cold form submissions. Fewer no-shows, higher consultation-to-procedure conversion rates.",
//     highlight: "Serious patients. Real revenue. Predictable growth.",
//   },
// ];

// export function ProcessSection() {
    
//   const stackRef = useRef<HTMLDivElement>(null);
//   const sectionRef = useRef<HTMLDivElement>(null);
// //   const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//   const stack = stackRef.current;

//   if (!stack) return;

//   const ctx = gsap.context(() => {
//     ScrollTrigger.create({
//       trigger: stack,
//       start: "top top",
//       end: `+=${steps.length * window.innerHeight}`,
//       pin: true,
//       pinSpacing: true,
//       anticipatePin: 1,
//     });
//   });

//   return () => ctx.revert();
// }, []);

//   return (
//     <div ref={sectionRef} id="process" className="relative">

//       {/* Fixed Background */}
//       <div
//         className="sticky top-0 w-full h-screen -z-10"
//         style={{
//           backgroundImage: "url('/process-bg.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           marginBottom: "-100vh",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/70" />
//       </div>

//       {/* Intro */}
//       <div className="sticky top-0 z-10 flex flex-col items-center justify-center h-screen text-center px-4">
//         <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4 font-medium">
//           Our Process
//         </p>
//         <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white max-w-4xl leading-tight">
//           This Is Exactly How We Fill Your Consultation Calendar —{" "}
//           <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
//             Every Single Month
//           </span>
//         </h2>
//         <p className="mt-6 text-base md:text-lg text-white/60 max-w-xl"
//           style={{ fontFamily: "var(--font-poppins), sans-serif" }}
//         >
//           Six steps. One system. Zero guesswork.
//         </p>
//         <div className="mt-8 animate-bounce">
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//             <path d="M12 5v14M5 12l7 7 7-7" stroke="#CB8530" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </div>
//       </div>

//       {/* Steps */}
//             <div
//         ref={stackRef}
//         className="relative h-screen"
//         style={{
//             height: `${steps.length * 100}vh`,
//         }}
//         >
//         {steps.map((step, index) => (
//           <div
//             key={step.number}
//             className="sticky top-0 h-screen flex items-center justify-center px-8"
//             style={{
//             zIndex: index + 1,
//             }}
//           >
//             <div className="w-full max-w-7xl mx-auto border-t border-white/10 py-20">
//         <div className="grid lg:grid-cols-[1fr_320px] gap-16 items-start">

//     {/* LEFT SIDE */}
//     <div>
//       <div
//         className="text-lg font-medium mb-3"
//         style={{ color: "#CB8530" }}
//       >
//         {step.number}/
//       </div>

//       <h3
//         className="
//           text-6xl
//           md:text-7xl
//           lg:text-8xl
//           font-extrabold
//           tracking-[-0.05em]
//           leading-[0.88]
//           text-white
//         "
//         style={{ fontFamily: "var(--font-poppins), sans-serif" }}
//       >
//         {step.label}
//       </h3>
//     </div>

//     {/* RIGHT SIDE */}
//     <div className="pt-4">
//       <div className="space-y-4">

//         <p className="text-white/55 text-base">
//           {step.title}
//         </p>

//         <p className="text-white/55 text-base">
//           {step.description}
//         </p>
// card
//         <p
//           className="text-sm"
//           style={{ color: "#CB8530" }}
//         >
//           {step.highlight}
//         </p>
//       </div>

//       <button
//         className="
//           mt-12
//           text-white
//           border-b
//           border-white
//           pb-1
//           text-lg
//           hover:opacity-70
//           transition
//         "
//       >
//         View Process
//       </button>
//     </div>

//   </div>
// </div>
//           </div>
//         ))}
//       </div>

//       {/* CTA after last step */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-[50vh] px-4 text-center">
//         <p
//           className="text-base md:text-lg text-white/75 italic max-w-2xl mb-10"
//           style={{ fontFamily: "var(--font-poppins), sans-serif" }}
//         >
//           Every week without a system is a week your competitors are filling
//           the consultations that should be yours.
//         </p>
//         <button className="btn-primary text-sm md:text-base px-8 py-4">
//           I'm Ready — Let's Build My System →
//         </button>
//       </div>

//     </div>
//   );
// }






// -------Safari new version----------



// "use client";

// import { useEffect, useRef } from "react";

// const steps = [
//   {
//     number: "01",
//     label: "Ad Impression",
//     title: "Precision Targeting",
//     description: "Targeting, creative, and funnel aligned so interest turns into booked patients — not wasted traffic.",
//     highlight: "Right audience + Right ad + Right moment",
//   },
//   {
//     number: "02",
//     label: "Click",
//     title: "Intent-Driven Creative",
//     description: "Every ad creative is built around one goal — getting the right person to click.",
//     highlight: "Click to form submission to captured interest",
//   },
//   {
//     number: "03",
//     label: "Landing Page",
//     title: "Conversion Infrastructure",
//     description: "Every click lands on a conversion-optimized page built for one action — booking.",
//     highlight: "Optimized for one action — booking",
//   },
//   {
//     number: "04",
//     label: "AI Follow-Up",
//     title: "60-Second Response",
//     description: "The moment a form is submitted, our AI sends a personalized WhatsApp or Email within 60 seconds.",
//     highlight: "Lead contacted in under 60 seconds, nurtured until booked",
//   },
//   {
//     number: "05",
//     label: "Booking Calendar",
//     title: "Qualified Scheduling",
//     description: "Only serious, pre-qualified patients reach your calendar.",
//     highlight: "Pre-qualified patients only reach your calendar",
//   },
//   {
//     number: "06",
//     label: "Confirmed Consultation",
//     title: "Revenue in Your Clinic",
//     description: "Your team receives warm, qualified leads — not cold form submissions.",
//     highlight: "Serious patients. Real revenue. Predictable growth.",
//   },
// ];

// export function ProcessSection() {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     let gsap: typeof import("gsap").gsap;
//     let ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;

//     const init = async () => {
//       const gsapModule = await import("gsap");
//       const stModule = await import("gsap/ScrollTrigger");
//       gsap = gsapModule.gsap;
//       ScrollTrigger = stModule.ScrollTrigger;
//       gsap.registerPlugin(ScrollTrigger);

//       const section = sectionRef.current;
//       if (!section) return;

//       const cards = section.querySelectorAll<HTMLElement>(".process-step-card");

//       cards.forEach((card) => {
//         gsap.fromTo(
//           card,
//           { opacity: 0, y: 60 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.7,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: card,
//               start: "top 75%",
//               toggleActions: "play none none none",
//             },
//           }
//         );
//       });
//     };

//     init();

//     return () => {
//       import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
//         ScrollTrigger.getAll().forEach((t) => t.kill());
//       });
//     };
//   }, []);

//   return (
//     <div ref={sectionRef} id="process" className="relative bg-[#0b0d11]">

//       {/* ── Intro ── */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-24">
//         <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4 font-medium">
//           Our Process
//         </p>
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F0EFE7] max-w-4xl leading-tight">
//           This Is Exactly How We Fill Your Consultation Calendar —{" "}
//           <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
//             Every Single Month
//           </span>
//         </h2>
//         <p className="mt-6 text-base md:text-lg text-[#F0EFE7]/55 max-w-xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
//           Six steps. One system. Zero guesswork.
//         </p>
//         <div className="mt-10 animate-bounce">
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//             <path d="M12 5v14M5 12l7 7 7-7" stroke="#CB8530" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </div>
//       </div>

//       {/* ── Steps ── */}
//       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
//         {steps.map((step, index) => (
//           <div
//             key={step.number}
//             className="process-step-card border-t border-[rgba(255,255,255,0.08)] py-12 sm:py-16 md:py-20 flex flex-col md:flex-row md:items-start gap-8 md:gap-16"
//             style={{ opacity: 0 }}
//           >
//             {/* Left — number + label */}
//             <div className="flex-shrink-0 md:w-48">
//               <div className="flex items-baseline gap-3">
//                 <span
//                   className="text-sm font-medium"
//                   style={{ color: "#CB8530", fontFamily: "'Poppins', sans-serif" }}
//                 >
//                   {step.number}/
//                 </span>
//               </div>
//               <h3
//                 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F0EFE7] mt-1 leading-tight"
//                 style={{ fontFamily: "'Poppins', sans-serif" }}
//               >
//                 {step.label}
//               </h3>
//             </div>

//             {/* Right — details */}
//             <div className="flex-1 md:pt-1">
//               <p
//                 className="text-sm uppercase tracking-[0.15em] font-medium mb-4"
//                 style={{ color: "#CB8530" }}
//               >
//                 {step.title}
//               </p>
//               <p
//                 className="text-base md:text-lg text-[#F0EFE7]/60 leading-relaxed mb-6 max-w-xl"
//                 style={{ fontFamily: "'Poppins', sans-serif" }}
//               >
//                 {step.description}
//               </p>
//               <p
//                 className="text-sm font-medium"
//                 style={{ color: "rgba(203,133,48,0.75)" }}
//               >
//                 → {step.highlight}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ── CTA ── */}
//       <div className="relative z-10 flex flex-col items-center justify-center px-4 pb-24 text-center">
//         <p
//           className="text-base md:text-lg text-[#F0EFE7]/65 italic max-w-2xl mb-10"
//           style={{ fontFamily: "'Poppins', sans-serif" }}
//         >
//           Every week without a system is a week your competitors are filling the consultations that should be yours.
//         </p>
//         <button className="btn-primary text-sm md:text-base px-8 py-4">
//           I&apos;m Ready — Let&apos;s Build My System →
//         </button>
//       </div>

//     </div>
//   );
// }






// --------CHATGPT------


// "use client";

// import { useEffect, useRef } from "react";

// const steps = [
//   {
//     number: "01",
//     title: "Targeting",
//     items: [
//       "Audience Research",
//       "Patient Demographics",
//       "Market Analysis",
//       "Location Targeting",
//       "Intent Segmentation",
//     ],
//   },
//   {
//     number: "02",
//     title: "Creative",
//     items: [
//       "Ad Copywriting",
//       "Visual Concepts",
//       "Offer Positioning",
//       "Hook Development",
//       "Creative Testing",
//     ],
//   },
//   {
//     number: "03",
//     title: "Conversion",
//     items: [
//       "Landing Pages",
//       "Trust Signals",
//       "Lead Forms",
//       "Mobile Optimization",
//       "Booking Flow",
//     ],
//   },
//   {
//     number: "04",
//     title: "Automation",
//     items: [
//       "AI Follow-Up",
//       "WhatsApp Sequences",
//       "Email Nurturing",
//       "Lead Qualification",
//       "Appointment Reminders",
//     ],
//   },
//   {
//     number: "05",
//     title: "Booking",
//     items: [
//       "Calendar Scheduling",
//       "Lead Scoring",
//       "Qualification Filters",
//       "Consultation Requests",
//       "Patient Confirmation",
//     ],
//   },
//   {
//     number: "06",
//     title: "Revenue",
//     items: [
//       "Qualified Patients",
//       "Booked Consultations",
//       "Predictable Pipeline",
//       "Higher Show Rates",
//       "Business Growth",
//     ],
//   },
// ];

// export function ProcessSection() {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     let ctx: any;

//     const init = async () => {
//       const gsapModule = await import("gsap");
//       const stModule = await import("gsap/ScrollTrigger");

//       const gsap = gsapModule.gsap;
//       const ScrollTrigger = stModule.ScrollTrigger;

//       gsap.registerPlugin(ScrollTrigger);

//       ctx = gsap.context(() => {
//         const sections =
//           document.querySelectorAll<HTMLElement>(".process-section");

//         sections.forEach((section) => {
//           const left = section.querySelector(".left-content");
//           const right = section.querySelector(".right-content");

//           gsap.fromTo(
//             left,
//             {
//               x: -120,
//               opacity: 0,
//             },
//             {
//               x: 0,
//               opacity: 1,
//               duration: 1.2,
//               ease: "power3.out",
//               scrollTrigger: {
//                 trigger: section,
//                 start: "top 70%",
//               },
//             }
//           );

//           gsap.fromTo(
//             right,
//             {
//               x: 120,
//               opacity: 0,
//             },
//             {
//               x: 0,
//               opacity: 1,
//               duration: 1.2,
//               ease: "power3.out",
//               scrollTrigger: {
//                 trigger: section,
//                 start: "top 70%",
//               },
//             }
//           );
//         });
//       }, sectionRef);
//     };

//     init();

//     return () => {
//       if (ctx) ctx.revert();
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="process"
//       className="bg-black text-[#F0EFE7]"
//     >
//       {/* Intro */}
//       <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
//         <p className="uppercase tracking-[0.35em] text-primary text-sm mb-8">
//           Our Process
//         </p>

//         <h3 className="max-w-6xl font-bold leading-[0.95] text-[clamp(3rem,7vw,8rem)]">
//           How We Turn
//           <br />
//           Clicks Into
//           <br />
//           Consultations
//         </h3>

//         <p className="mt-10 text-white/50 text-lg max-w-xl">
//           Six steps. One growth system. Predictable patient acquisition.
//         </p>
//       </div>

//       {/* Steps */}
//       {steps.map((step) => (
//         <div
//           key={step.number}
//           className="process-section min-h-screen border-t border-white/10 flex items-center"
//         >
//           <div className="max-w-7xl mx-auto w-full px-8 lg:px-16">
//             <div className="grid lg:grid-cols-[1.5fr_0.8fr] gap-16 items-center">
//               {/* Left */}
//               <div className="left-content">
//                 <div className="text-primary text-xl font-medium mb-4">
//                   {step.number}/
//                 </div>

//                 <h3
//                     className="
//                         font-extrabold
//                         leading-[0.88]
//                         tracking-[-0.05em]
//                         text-6xl
//                         md:text-7xl
//                         lg:text-8xl
//                     "
//                     >
//                   {step.title}
//                 </h3>
//               </div>

//               {/* Right */}
//               <div className="right-content">
//                 <div className="space-y-5">
//                   {step.items.map((item) => (
//                     <div
//                       key={item}
//                       className="
//                         text-white/55
//                         text-lg
//                         border-b
//                         border-white/5
//                         pb-3
//                       "
//                     >
//                       {item}
//                     </div>
//                   ))}
//                 </div>

//                 <button
//                   className="
//                     mt-16
//                     text-xl
//                     border-b
//                     border-white
//                     pb-1
//                     hover:opacity-70
//                     transition
//                   "
//                 >
//                   View Process
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Final CTA */}
//       <div className="border-t border-white/10 min-h-screen flex items-center justify-center">
//         <div className="text-center px-6">
//           <h3 className="font-bold text-[clamp(3rem,6vw,7rem)] leading-none">
//             Ready To Grow?
//           </h3>

//           <p className="text-white/50 text-lg max-w-xl mx-auto mt-8">
//             Every week without a system is another week your competitors are
//             booking consultations that could have been yours.
//           </p>

//           <button
//             className="
//               mt-12
//               px-10
//               py-5
//               bg-primary
//               text-black
//               font-semibold
//               rounded-full
//               hover:scale-105
//               transition
//             "
//           >
//             Book A Strategy Call
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }











"use client";

const steps = [
  {
    number: "01",
    label: "Ad Impression",
    title: "Precision Targeting",
    description:
      "We run Meta and Google campaigns built specifically for aesthetic procedures. We align targeting, creative, and funnel so interest turns into booked patients instead of wasted traffic.",
    highlight: "Right audience + Right ad + Right moment",
  },
  {
    number: "02",
    label: "Click",
    title: "Intent-Driven Creative",
    description:
      "A landing page converts when it matches intent fast and removes every distraction from the decision. If the next step isn't obvious, people compare, hesitate, and leave.",
    highlight: "Click to form submission to captured interest",
  },
  {
    number: "03",
    label: "Landing Page",
    title: "Conversion Infrastructure",
    description:
      "Every click is directed to a conversion-optimized landing page designed to turn interest into booked consultations.",
    highlight: "Optimized for one action — booking",
  },
  {
    number: "04",
    label: "AI Follow-Up",
    title: "60-Second Response",
    description:
      "The moment a form is submitted, our AI sends a personalized WhatsApp or Email within 60 seconds. It nurtures over 7 days — 24 hours a day, 7 days a week.",
    highlight: "Lead contacted in under 60 seconds, nurtured until booked",
  },
  {
    number: "05",
    label: "Booking Calendar",
    title: "Qualified Scheduling",
    description:
      "Only serious, pre-qualified patients are guided to your calendar. The AI has already confirmed their procedure interest and financial intent.",
    highlight: "Pre-qualified patients only reach your calendar",
  },
  {
    number: "06",
    label: "Confirmed Consultation",
    title: "Revenue in Your Clinic",
    description:
      "Your team receives warm, qualified leads — not cold form submissions. Fewer no-shows, higher consultation-to-procedure conversion rates.",
    highlight: "Serious patients. Real revenue. Predictable growth.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative"
      style={{
        backgroundImage: "url('/process-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">

        {/* Intro */}
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4 font-medium">
            Our Process
          </p>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white max-w-4xl leading-tight">
            This Is Exactly How We Fill Your Consultation Calendar —{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Every Single Month
            </span>
          </h2>

          <p
            className="mt-6 text-base md:text-lg text-white/60 max-w-xl"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Six steps. One system. Zero guesswork.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="sticky top-[15vh] min-h-screen flex items-center px-8"
              style={{
                zIndex: index + 1,
              }}
            >
              <div className="w-full max-w-7xl mx-auto border-t border-white/10 py-20 bg-[#0B0D11]/90 backdrop-blur-md rounded-3xl px-10">

                <div className="grid lg:grid-cols-[1fr_320px] gap-16 items-start">

                  {/* LEFT */}
                  <div>
                    <div
                      className="text-lg font-medium mb-3"
                      style={{ color: "#CB8530" }}
                    >
                      {step.number}/
                    </div>

                    <h3
                      className="
                        text-5xl
                        md:text-6xl
                        lg:text-7xl
                        font-extrabold
                        tracking-[-0.05em]
                        leading-[0.9]
                        text-white
                      "
                      style={{
                        fontFamily:
                          "var(--font-poppins), sans-serif",
                      }}
                    >
                      {step.label}
                    </h3>
                  </div>

                  {/* RIGHT */}
                  <div className="pt-4">

                    <div className="space-y-5">

                      <p className="text-white/55 text-base">
                        {step.title}
                      </p>

                      <p className="text-white/55 text-base leading-relaxed">
                        {step.description}
                      </p>

                      <p
                        className="text-sm"
                        style={{ color: "#CB8530" }}
                      >
                        {step.highlight}
                      </p>

                    </div>

                    <button
                      className="
                        mt-12
                        text-white
                        border-b
                        border-white
                        pb-1
                        text-lg
                        hover:opacity-70
                        transition
                      "
                    >
                      View Process
                    </button>

                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
          <p
            className="text-base md:text-lg text-white/75 italic max-w-2xl mb-10"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Every week without a system is a week your competitors are filling
            the consultations that should be yours.
          </p>

          <button className="btn-primary text-sm md:text-base px-8 py-4">
            I'm Ready — Let's Build My System →
          </button>
        </div>

      </div>
    </section>
  );
}