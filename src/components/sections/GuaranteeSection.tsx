// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Shield } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/Card";

// export function GuaranteeSection() {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsVisible(true);
//       },
//       { threshold: 0.2 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       id="guarantee"
//       ref={sectionRef}
//       aria-label="Our 30-day performance guarantee"
//       className="py-20 md:py-28 bg-muted/50"
//     >
//       <div className="container mx-auto px-4">
//         <div className="max-w-3xl mx-auto">
//           <Card
//             className="border-4 border-primary/40 relative overflow-hidden transition-all duration-700 ease-out"
//             style={{
//               opacity: isVisible ? 1 : 0,
//               transform: isVisible ? "scale(1.02)" : "scale(1)",
//             }}
//           >
//             {/* Background glows */}
//             <div
//               className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none"
//               aria-hidden="true"
//             />
//             <div
//               className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none"
//               aria-hidden="true"
//             />

//             <CardContent className="p-8 md:p-12 text-center relative">

//               {/* Shield Icon */}
//               <div
//                 className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/20 border-4 border-primary/40 mb-6"
//                 aria-hidden="true"
//               >
//                 <Shield className="h-10 w-10 md:h-12 md:w-12 text-primary" />
//               </div>

//               {/* Heading */}
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight"
//                 style={{ fontFamily: "var(--font-poppins), sans-serif" }}
//               >
//                 The 30-Day Performance Guarantee
//               </h2>

//               {/* Subheading */}
//               <p
//                 className="text-xl md:text-2xl font-medium mb-8 text-primary"
//                 style={{ fontFamily: "var(--font-poppins), sans-serif" }}
//               >
//                 Measurable Results or We Work Free
//               </p>

//               {/* Body */}
//               <p
//                 className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto"
//                 style={{ fontFamily: "var(--font-poppins), sans-serif" }}
//               >
//                 If we don't generate a measurable increase in qualified
//                 consultation bookings within 30 days of launching your system —
//                 we work for free until we do. No excuses. No fine print. No
//                 ambiguous metrics.
//               </p>

//               {/* Quote */}
//               <div className="pt-6 border-t border-primary/20">
//                 <blockquote>
//                   <p
//                     className="text-sm md:text-base text-muted-foreground italic"
//                     style={{ fontFamily: "var(--font-poppins), sans-serif" }}
//                   >
//                     "We have never had to activate this guarantee. But it exists
//                     because we mean what we say."
//                   </p>
//                 </blockquote>
//               </div>

//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// }



// ----------Safari------------

"use client";
import { Card, CardContent } from "@/components/ui/Card";
import { Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function GuaranteeSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="guarantee" className="py-16 sm:py-20 bg-muted/50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card
            className="border-4 border-primary/40 relative overflow-hidden transition-all duration-700 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "scale(1.02)" : "scale(1)",
            }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <CardContent
              className="p-8 sm:p-12 text-center relative"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-primary/20 border-4 border-primary/40 mb-6">
                <Shield className="h-8 w-8 sm:h-12 sm:w-12 text-primary" aria-hidden="true" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 leading-tight">
                The 30-Day Performance Guarantee
              </h2>

              <p className="text-xl sm:text-2xl font-medium mb-6 sm:mb-8 text-primary">
                Measurable Results or We Work Free
              </p>

              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
                If we don&apos;t generate a measurable increase in qualified consultation bookings within 30 days of
                launching your system — we work for free until we do. No excuses. No fine print. No ambiguous metrics.
              </p>

              <div className="pt-6 border-t border-primary/20">
                <p className="text-sm sm:text-base text-muted-foreground italic">
                  &ldquo;We have never had to activate this guarantee. But it exists because we mean what we say.&rdquo;
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}