// "use client";

// import { useEffect, useRef, useState } from "react";

// const deliverables = [
//   {
//     name: "Meta + Google Ad Campaigns",
//     description: "Done-for-you, full management",
//   },
//   {
//     name: "AI Patient Follow-Up Automation",
//     description: "WhatsApp, Email sequences",
//   },
//   {
//     name: "High-Converting Clinic Landing Page",
//     description: "Custom build, procedure-specific",
//   },
//   {
//     name: "Lead Generation System Setup",
//     description: "Full configuration & integration",
//   },
//   {
//     name: "Monthly Performance Reporting Dashboard",
//     description: "Real-time analytics",
//   },
// ];

// export function OfferStackSection() {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsVisible(true);
//       },
//       { threshold: 0.1 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       aria-label="What is included in our system"
//       className="py-20 md:py-28"
//     >
//       <div className="container mx-auto px-4">

//         {/* Eyebrow */}
//         <p
//           className="mb-4 text-center text-[11px] font-normal tracking-[0.18em] uppercase text-primary"
//         >
//           Value Presentation
//         </p>

//         {/* Heading */}
//         <div className="text-center mb-10 md:mb-12">
//           <h2 className="text-3xl md:text-4xl tracking-tight">
//             Here's Everything Included in the Creavox{" "}
//             <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
//               Patient Acquisition System
//             </span>
//           </h2>
//         </div>

//         {/* Deliverables List */}
//         <div className="max-w-3xl mx-auto flex flex-col gap-3">
//           {deliverables.map((item, index) => (
//             <div
//               key={item.name}
//               className="transition-all duration-500 ease-out flex items-center gap-4 px-5 py-4 md:px-6 md:py-5 rounded-xl"
//               style={{
//                 opacity: isVisible ? 1 : 0,
//                 transform: isVisible ? "translateY(0)" : "translateY(24px)",
//                 transitionDelay: `${index * 80}ms`,
//                 backgroundColor: "rgba(30, 31, 38, 0.5)",
//                 border: "1px solid rgba(203, 133, 48, 0.15)",
//               }}
//             >
//               {/* Checkmark */}
//               <div
//                 className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
//                 style={{ backgroundColor: "#cb8530" }}
//                 aria-hidden="true"
//               >
//                 <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
//                   <path
//                     d="M1 5.5L5 9.5L13 1.5"
//                     stroke="#27282f"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>

//               {/* Name */}
//               <p
//                 className="flex-1 text-sm md:text-base font-medium text-[#F0EFE7]"
//                 style={{ fontFamily: "var(--font-poppins), sans-serif" }}
//               >
//                 {item.name}
//               </p>

//               {/* Description */}
//               <p
//                 className="hidden sm:block text-xs md:text-sm text-muted-foreground text-right flex-shrink-0"
//               >
//                 {item.description}
//               </p>
//             </div>
//           ))}

//           {/* Total Banner */}
//           <div
//             className="transition-all duration-500 mt-2 px-6 py-5 rounded-xl text-center"
//             style={{
//               opacity: isVisible ? 1 : 0,
//               transitionDelay: "500ms",
//               backgroundColor: "rgba(203, 133, 48, 0.08)",
//               border: "2px solid #cb8530",
//             }}
//           >
//             <p
//               className="text-sm md:text-base font-bold text-primary tracking-wide"
//               style={{ fontFamily: "var(--font-poppins), sans-serif" }}
//             >
//               YOUR ENTIRE GROWTH ENGINE · DONE FOR YOU
//             </p>
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="mt-12 md:mt-16 flex flex-col items-center gap-3">
//           <button className="btn-primary w-full sm:w-auto text-sm md:text-base px-8 py-4">
//             Claim My Spot in the System →
//           </button>
//           <p className="text-xs text-muted-foreground/40">
//             No commitment · No hard sell · Reschedule anytime
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }





// ----safari------------
"use client";
import { useEffect, useRef, useState } from "react";

const deliverables = [
  { name: "Meta + Google Ad Campaigns", description: "Done-for-you, full management" },
  { name: "AI Patient Follow-Up Automation", description: "WhatsApp, Email sequences" },
  { name: "High-Converting Clinic Landing Page", description: "Custom build, procedure-specific" },
  { name: "Lead Generation System Setup", description: "Full configuration & integration" },
  { name: "Monthly Performance Reporting Dashboard", description: "Real-time analytics" },
];

export function OfferStackSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 sm:py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">

        <p className="mb-4 text-center text-[11px] font-normal tracking-[0.18em] uppercase text-primary">
          VALUE PRESENTATION
        </p>

        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl tracking-tight mb-4 px-4 sm:px-0">
            Here&apos;s Everything Included in the Creavox{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Patient Acquisition System
            </span>
          </h2>
        </div>

        <div className="max-w-[800px] mx-auto">
          <div className="flex flex-col gap-3">
            {deliverables.map((item, index) => (
              <div
                key={index}
                className="transition-all duration-500 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(24px)",
                  transitionDelay: `${index * 80}ms`,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  padding: "16px 20px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(30, 31, 38, 0.5)",
                  border: "1px solid rgba(203, 133, 48, 0.15)",
                }}
              >
                {/* Checkmark */}
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "#cb8530", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" aria-hidden="true">
                    <path d="M1 5.5L5 9.5L13 1.5" stroke="#27282f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Name */}
                <div className="flex-1 min-w-0">
                  <p style={{ fontSize: "15px", fontWeight: 500, color: "#F0EFE7", lineHeight: 1.5, margin: 0, fontFamily: "'Poppins', sans-serif" }}>
                    {item.name}
                  </p>
                </div>

                {/* Description — hidden on very small screens */}
                <div className="hidden sm:block" style={{ fontSize: "14px", fontWeight: 400, color: "#cb8530", flexShrink: 0, whiteSpace: "nowrap" }}>
                  {item.description}
                </div>
              </div>
            ))}

            {/* Footer banner */}
            <div
              className="transition-all duration-500 mt-2"
              style={{
                opacity: isVisible ? 1 : 0,
                transitionDelay: "500ms",
                padding: "22px 24px",
                borderRadius: "10px",
                backgroundColor: "rgba(203, 133, 48, 0.08)",
                border: "2px solid #cb8530",
                textAlign: "center",
              }}
            >
              <span style={{ fontSize: "15px", fontWeight: 700, fontFamily: "'Poppins', sans-serif", color: "#cb8530", letterSpacing: "0.04em" }}>
                YOUR ENTIRE GROWTH ENGINE · DONE FOR YOU
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 flex flex-col items-center gap-3 px-4 sm:px-0">
          <button
            className="btn-primary w-full sm:w-auto text-md sm:text-base"
            style={{ padding: "16px 36px" }}
          >
            Claim My Spot in the System →
          </button>
          <p style={{ fontSize: "12px", color: "rgba(240,239,231,0.4)", margin: 0 }}>
            No commitment · No hard sell · Reschedule anytime
          </p>
        </div>
      </div>
    </section>
  );
}