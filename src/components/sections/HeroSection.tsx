// "use client";

// import { useEffect, useState } from "react";
// import { FloatingCards } from "@/components/sections/FloatingCards";

// export function HeroSection() {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setVisible(true), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section
//       aria-label="Hero"
//       className="relative py-20 lg:py-32 overflow-hidden"
//     >
//       <div className="container mx-auto px-4 text-center">

//         {/* Eyebrow */}
//         <div
//           className="mb-6 transition-all duration-500"
//           style={{
//             opacity: visible ? 1 : 0,
//             transform: visible ? "translateY(0)" : "translateY(10px)",
//           }}
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full">
//             <div
//               className="w-2 h-2 rounded-full flex-shrink-0"
//               style={{
//                 backgroundColor: "#cb8530",
//                 boxShadow: "0 0 8px rgba(203, 133, 48, 0.6)",
//               }}
//               aria-hidden="true"
//             />
//             <span
//               className="text-primary"
//               style={{
//                 fontFamily: "var(--font-dm-sans), sans-serif",
//                 fontSize: "13px",
//                 fontWeight: 500,
//               }}
//             >
//               Limited to 3 Clinics Per Month
//             </span>
//           </div>
//         </div>

//         {/* Headline */}
//         <h1 className="mx-auto max-w-4xl text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6 text-[#F0EFE7] transition-all duration-500"
//           style={{
//             opacity: visible ? 1 : 0,
//             transform: visible ? "translateY(0)" : "translateY(16px)",
//             transitionDelay: "100ms",
//           }}
//         >
//           Your Clinic Deserves a{" "}
//           <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
//             Waiting List
//           </span>{" "}
//           — Not a Slow Month
//         </h1>

//         {/* Subheading */}
//         <p
//           className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8 transition-all duration-500"
//           style={{
//             fontFamily: "var(--font-poppins), sans-serif",
//             opacity: visible ? 1 : 0,
//             transform: visible ? "translateY(0)" : "translateY(16px)",
//             transitionDelay: "200ms",
//           }}
//         >
//           We Fill Med Spa Consultation Calendars in 30 Days — Or You Don't Pay.
//         </p>

//         {/* CTA Buttons */}
//         <div
//           className="flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-500"
//           style={{
//             opacity: visible ? 1 : 0,
//             transitionDelay: "300ms",
//           }}
//         >
//           <button
//             className="btn-primary w-full sm:w-auto text-base px-8 py-4"
//           >
//             Get My Free Clinic Growth Audit →
//           </button>
//           <button className="btn-ghost w-full sm:w-auto text-base px-8 py-4">
//             See How It Works
//           </button>
//         </div>

//         {/* Trust line */}
//         <p
//           className="mt-6 text-xs text-muted-foreground/50"
//           style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
//         >
//           No commitment • No hard sell • Reschedule anytime
//         </p>

//         {/* Floating Cards — hidden on mobile, visible from md up */}

//         {/* <div
//           aria-hidden="true"
//           className=" md:block relative mx-auto max-w-5xl h-96 lg:h-[500px] mt-12"
//         >
//           <FloatingCards />
//         </div> */}
//         <div className="relative mx-auto max-w-5xl h-96 lg:h-[500px]">
//           <FloatingCards />
//         </div>
//       </div>
//     </section>
//   );
// }

// ---------Safari------------

"use client";
import { useEffect, useState } from "react";
import { FloatingCards } from "@/components/sections/FloatingCards";

export function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden bg-[#0b0d11]!">
      <div className="container mx-auto px-4 text-center">
        {/* Badge */}
        {/* <div
          className="mb-6 transition-all duration-500"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(10px)" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full">
            <div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: "#cb8530", boxShadow: "0 0 8px rgba(203,133,48,0.6)" }}
            />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 500, color: "#cb8530" }}>
              Limited to 3 Clinics Per Month
            </span>
          </div>
        </div> */}

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6 text-[#F0EFE7] animate-in fade-in slide-in-from-bottom-6 duration-500">
          Your Clinic Deserves a{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Waiting List
          </span>{" "}
          — Not a Slow Month
        </h1>

        {/* Subheadline */}
        <p className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-6 duration-500 delay-100 px-4 sm:px-0">
          We Fill Med Spa Consultation Calendars in 30 Days — Or You Don&apos;t
          Pay.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center transition-opacity duration-500 px-4 sm:px-0"
          style={{ opacity: visible ? 1 : 0, transitionDelay: "300ms" }}
        >
          <button
            className="btn-primary w-full sm:w-auto text-sm sm:text-base"
            style={{
              fontSize: "16px",
              padding: "16px 32px",
              borderRadius: "8px",
            }}
          >
            Get My Free Clinic Growth Audit →
          </button>
          <button className="btn-ghost w-full sm:w-auto justify-center">
            See How It Works
          </button>
        </div>

        {/* Trust line */}
        <p
          className="mt-6"
          style={{
            fontSize: "13px",
            color: "rgba(240,239,231,0.5)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          No commitment &bull; No hard sell &bull; Reschedule anytime
        </p>

        {/* Floating Cards Scene */}
        {/* <div className="relative mx-auto max-w-5xl mt-6"
            style={{ height: "clamp(280px, 55vw, 500px)" }}>
            <FloatingCards />
            </div> */}
        <div className="relative mx-auto max-w-5xl h-96 lg:h-[500px]">
          <FloatingCards />
        </div>
        {/* <div className="relative mx-auto max-w-5xl h-64 sm:h-96 lg:h-[500px] mt-4">
          <FloatingCards />
        </div> */}
      </div>
    </section>
  );
}
