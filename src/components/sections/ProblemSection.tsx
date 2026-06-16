// "use client";

// import { useEffect, useRef, useState } from "react";
// import { TrendingDown, Target, Users } from "lucide-react";

// const problems = [
//   {
//     icon: TrendingDown,
//     title: "Inconsistent Lead Flow",
//     description:
//       "Some weeks are packed, others empty. That's not growth, that's randomness. No predictability, no reliable growth system.",
//   },
//   {
//     icon: Target,
//     title: "Wasted Ad Spend",
//     description:
//       "You're burning money on Meta or Google, getting clicks and likes, but those people never actually book — just curious or price shopping.",
//   },
//   {
//     icon: Users,
//     title: "No Reliable Acquisition System",
//     description:
//       "You have no predictable process that wakes up every morning and fills your calendar without you chasing it.",
//   },
// ];

// export function ProblemSection() {
//   const [visible, setVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setVisible(true);
//       },
//       { threshold: 0.2 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       aria-label="Problems we solve"
//       className="w-full px-4 md:px-8 py-20 md:py-28 lg:py-32"
//     >
//       <div className="w-full max-w-[1100px] mx-auto">

//         {/* Eyebrow */}
//         <p className="mb-4 text-center text-[11px] font-normal tracking-[0.18em] uppercase text-primary">
//           The Cost of Inaction
//         </p>

//         {/* Headline */}
//         <h2 className="mb-6 text-center text-3xl md:text-4xl lg:text-5xl text-[#F0EFE7] leading-tight">
//           Most Clinics Are Burning Their Ad Budget on the Wrong People.
//         </h2>

//         {/* Subheading */}
//         <p
//           className="mb-16 text-center mx-auto max-w-[700px] text-base md:text-lg leading-[1.7] text-[#F0EFE7]/75"
//           style={{ fontFamily: "var(--font-poppins), sans-serif" }}
//         >
//           Your competitors aren't better surgeons. They just have a better system.
//         </p>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {problems.map((problem, index) => (
//             <article
//               key={problem.title}
//               className="pain-card transition-all duration-500 ease-out"
//               style={{
//                 opacity: visible ? 1 : 0,
//                 transform: visible ? "translateY(0)" : "translateY(24px)",
//                 transitionDelay: `${index * 80}ms`,
//                 fontFamily: "var(--font-poppins), sans-serif",
//               }}
//             >
//               <problem.icon
//                 className="h-8 w-8 text-primary mb-4"
//                 aria-hidden="true"
//               />
//               <h3 className="text-[#F0EFE7] text-lg font-medium leading-snug mb-3">
//                 {problem.title}
//               </h3>
//               <p className="text-sm md:text-base leading-relaxed text-[#F0EFE7]/65">
//                 {problem.description}
//               </p>
//             </article>
//           ))}
//         </div>

//         {/* Soft CTA */}
//         <p
//           className="mt-12 text-center text-base leading-[1.7] text-[#F0EFE7]/75 italic"
//           style={{ fontFamily: "var(--font-poppins), sans-serif" }}
//         >
//           If this sounds familiar, there's a proven fix — already working for clinics like yours.
//         </p>

//         <div className="mt-10 flex justify-center">
//           <button className="btn-primary text-sm md:text-base px-7 py-3.5">
//             Show Me the Fix →
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }





// -----safari----------



// "use client";
// import { useEffect, useRef, useState } from "react";
// import { TrendingDown, Target, Users } from "lucide-react";

// const problems = [
//   {
//     icon: TrendingDown,
//     title: "Inconsistent Lead Flow",
//     description: "Some weeks are packed, others empty. That's not growth, that's randomness. No predictability, no reliable growth system.",
//   },
//   {
//     icon: Target,
//     title: "Wasted Ad Spend",
//     description: "You're burning money on Meta or Google, getting clicks and likes, but those people never actually book — just curious or price shopping.",
//   },
//   {
//     icon: Users,
//     title: "No Reliable Acquisition System",
//     description: "You have no predictable process that wakes up every morning and fills your calendar without you chasing it.",
//   },
// ];

// export function ProblemSection() {
//   const [visible, setVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setVisible(true); },
//       { threshold: 0.15 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section ref={sectionRef} className="w-full px-4 sm:px-6 py-20 sm:py-32">
//       <div className="w-full max-w-[1100px] mx-auto">

        // <p className="mb-4 text-center text-[11px] font-normal tracking-[0.18em] uppercase text-primary">
        //   THE COST OF INACTION
        // </p>

        // <h2 className="mb-6 text-center text-[#F0EFE7] leading-tight text-3xl sm:text-4xl md:text-5xl">
        //   Most Clinics Are Burning Their Ad Budget on the Wrong People.
        // </h2>

        // <p
        //   className="mb-12 sm:mb-16 text-center mx-auto max-w-[700px] text-base sm:text-lg leading-relaxed text-[#F0EFE7]/75"
        //   style={{ fontFamily: "'Poppins', sans-serif" }}
        // >
        //   Your competitors aren&apos;t better surgeons. They just have a better system.
        // </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
//           {problems.map((problem, index) => (
//             <article
//               key={index}
//               className="pain-card transition-all duration-500 ease-out"
//               style={{
//                 opacity: visible ? 1 : 0,
//                 transform: visible ? "translateY(0)" : "translateY(24px)",
//                 transitionDelay: `${index * 100}ms`,
//                 fontFamily: "'Poppins', sans-serif",
//               }}
//             >
//               <problem.icon className="h-8 w-8 text-primary mb-4" aria-hidden="true" />
//               <h3 className="text-[#F0EFE7] text-lg font-medium leading-snug mb-3">
//                 {problem.title}
//               </h3>
//               <p className="text-sm sm:text-base leading-relaxed text-[#F0EFE7]/65">
//                 {problem.description}
//               </p>
//             </article>
//           ))}
//         </div>

//         <p
//           className="mt-10 sm:mt-12 text-center text-base leading-relaxed text-[#F0EFE7]/75 italic px-4 sm:px-0"
//           style={{ fontFamily: "'Poppins', sans-serif" }}
//         >
//           If this sounds familiar, there&apos;s a proven fix — already working for clinics like yours.
//         </p>

//         <div className="mt-10 sm:mt-12 flex justify-center">
//           <button
//             className="btn-primary text-md sm:text-base"
//             style={{ padding: "14px 28px" }}
//           >
//             Show Me the Fix →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }



// -----chrome----------problem vs solution image 

"use client";

import { useState } from "react";
import {
  XCircle,
  CheckCircle2,
  Clock3,
  MoonStar,
  Users,
  TrendingUp,
  CalendarDays,
} from "lucide-react";

const comparisons = [
  {
    icon: Clock3,
    label: "Response Time",
    manual:
      "Leads wait hours for a reply and go cold before anyone follows up.",
    solution:
      "Every lead receives a response within 60 seconds, day or night.",
  },
  {
    icon: MoonStar,
    label: "After Hours",
    manual:
      "Enquiries after closing hours sit unanswered until the next morning.",
    solution:
      "Messages are handled automatically even while your clinic sleeps.",
  },
  {
    icon: Users,
    label: "Lead Quality",
    manual:
      "Your team wastes time speaking with people who never intended to book.",
    solution:
      "Only serious, qualified patients reach your calendar.",
  },
  {
    icon: TrendingUp,
    label: "Scaling",
    manual:
      "Growing means hiring more staff and increasing operational costs.",
    solution:
      "Handle more enquiries without adding headcount.",
  },
  {
    icon: CalendarDays,
    label: "Consistency",
    manual:
      "Some weeks are busy, others are empty. Revenue stays unpredictable.",
    solution:
      "A reliable system creates consistent patient flow every month.",
  },
];

export function ProblemSection() {
  const [activeTab, setActiveTab] = useState<"manual" | "solution">("manual");

  return (
    <section className="px-4 sm:px-6 py-20 sm:py-32">
      <div className="max-w-[1200px] mx-auto">

                <p className="mb-4 text-center text-[11px] font-normal tracking-[0.18em] uppercase text-primary">
          THE COST OF INACTION
        </p>

        <h2 className="mb-6 text-center text-[#F0EFE7] leading-tight text-3xl sm:text-4xl md:text-5xl">
          Most Clinics Are Burning Their Ad Budget on the Wrong People.
        </h2>
        <p
          className="mb-12 sm:mb-16 text-center mx-auto max-w-[700px] text-base sm:text-lg leading-relaxed text-[#F0EFE7]/75"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          From Manual Chaos to Automated Clarity.
        </p>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 mb-2">

          <div>
            <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-primary mb-5">
              Problem vs Solution
            </p>

            <p className="text-[#F0EFE7] text-2xl md:text-4xl leading-tight max-w-[650px]">
              
            </p>
          </div>

          {/* <p
            className="max-w-[380px] text-[#F0EFE7]/70 text-lg leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            See exactly what changes when Creavox handles the repetitive work
            your team shouldn't be doing.
          </p> */}
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden">

          {/* Toggle */}
          <div className="flex p-1 rounded-full border border-white/10 bg-white/5 mb-8">
            <button
              onClick={() => setActiveTab("manual")}
              className={`flex-1 rounded-full py-3 text-sm transition ${
                activeTab === "manual"
                  ? "bg-white text-black"
                  : "text-[#F0EFE7]/60"
              }`}
            >
              Manual
            </button>

            <button
              onClick={() => setActiveTab("solution")}
              className={`flex-1 rounded-full py-3 text-sm transition ${
                activeTab === "solution"
                  ? "bg-primary text-black"
                  : "text-[#F0EFE7]/60"
              }`}
            >
              Creavox System
            </button>
          </div>

          <div className="space-y-5">
            {comparisons.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-[28px] border border-white/10 bg-[#111111]/70 p-6"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <Icon className="h-5 w-5 text-primary" />
                    <h3 className="text-[#F0EFE7] font-medium">
                      {item.label}
                    </h3>
                  </div>

                  <div className="flex items-start gap-3">
                    {activeTab === "manual" ? (
                      <XCircle className="h-5 w-5 text-white/30 mt-0.5 shrink-0" />
                    ) : (
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    )}

                    <p className="text-[#F0EFE7]/70 leading-relaxed text-sm">
                      {activeTab === "manual"
                        ? item.manual
                        : item.solution}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= TABLET + DESKTOP ================= */}
        <div className="hidden md:block overflow-hidden rounded-[32px] border border-white/10">

          {/* Header Row */}
          <div className="grid grid-cols-[220px_1fr_1fr] border-b border-white/10">

            <div />

            <div className="py-8 text-center text-[#F0EFE7]/60">
              Manual
            </div>

            <div className="py-8 text-center text-primary bg-primary/5">
              Creavox System
            </div>
          </div>

          {comparisons.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="grid grid-cols-[220px_1fr_1fr] border-b border-white/10 last:border-none"
              >
                {/* Feature */}
                <div className="p-8 flex items-center gap-3">
                  <Icon className="h-5 w-5 text-primary" />

                  <span className="text-[#F0EFE7]">
                    {item.label}
                  </span>
                </div>

                {/* Manual */}
                <div className="p-8 flex items-start gap-4 bg-[#0f0f0f]">
                  <XCircle className="h-5 w-5 mt-1 shrink-0 text-white/30" />

                  <p className="text-[#F0EFE7]/60 leading-relaxed">
                    {item.manual}
                  </p>
                </div>

                {/* Solution */}
                <div className="p-8 flex items-start gap-4 bg-primary/5">
                  <CheckCircle2 className="h-5 w-5 mt-1 shrink-0 text-primary" />

                  <p className="text-[#F0EFE7] leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <p
          className="mt-12 text-center text-[#F0EFE7]/70 italic max-w-3xl mx-auto"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
         Your competitors aren&apos;t better surgeons. They just have a better system.
        </p>
        

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <button
          className="btn-primary"
          style={{
            padding: "clamp(13px, 1.4vw, 19px) clamp(20px, 2.5vw, 35px)",
            width: "clamp(200px, 40vw, 450px)",
            fontSize: "clamp(18px, 1.4vw, 18px)",
          }}
        >
          Show Me the Fix →
        </button>
        </div>
      </div>
    </section>
  );
}


