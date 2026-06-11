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



"use client";
import { useEffect, useRef, useState } from "react";
import { TrendingDown, Target, Users } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Inconsistent Lead Flow",
    description: "Some weeks are packed, others empty. That's not growth, that's randomness. No predictability, no reliable growth system.",
  },
  {
    icon: Target,
    title: "Wasted Ad Spend",
    description: "You're burning money on Meta or Google, getting clicks and likes, but those people never actually book — just curious or price shopping.",
  },
  {
    icon: Users,
    title: "No Reliable Acquisition System",
    description: "You have no predictable process that wakes up every morning and fills your calendar without you chasing it.",
  },
];

export function ProblemSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full px-4 sm:px-6 py-20 sm:py-32">
      <div className="w-full max-w-[1100px] mx-auto">

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
          Your competitors aren&apos;t better surgeons. They just have a better system.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {problems.map((problem, index) => (
            <article
              key={index}
              className="pain-card transition-all duration-500 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: `${index * 100}ms`,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              <problem.icon className="h-8 w-8 text-primary mb-4" aria-hidden="true" />
              <h3 className="text-[#F0EFE7] text-lg font-medium leading-snug mb-3">
                {problem.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#F0EFE7]/65">
                {problem.description}
              </p>
            </article>
          ))}
        </div>

        <p
          className="mt-10 sm:mt-12 text-center text-base leading-relaxed text-[#F0EFE7]/75 italic px-4 sm:px-0"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          If this sounds familiar, there&apos;s a proven fix — already working for clinics like yours.
        </p>

        <div className="mt-10 sm:mt-12 flex justify-center">
          <button
            className="btn-primary text-md sm:text-base"
            style={{ padding: "14px 28px" }}
          >
            Show Me the Fix →
          </button>
        </div>
      </div>
    </section>
  );
}