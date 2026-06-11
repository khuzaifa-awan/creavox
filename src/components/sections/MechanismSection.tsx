// import { Megaphone, Zap, Globe, Target } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

// const pillars = [
//   {
//     icon: Megaphone,
//     title: "Precision Paid Media Engine",
//     description:
//       "Before your competitor even loads their page, your clinic is already the first face potential patients see and trust.",
//   },
//   {
//     icon: Zap,
//     title: "AI Follow-Up Automation",
//     description:
//       "Someone scrolls past your ad at midnight — by morning they're confirmed on your calendar without you lifting a finger. Every lead contacted within 60 seconds.",
//   },
//   {
//     icon: Globe,
//     title: "Conversion Infrastructure",
//     description:
//       "We position your clinic so aggressively across online that choosing anyone else over you genuinely feels like a risk to patients.",
//   },
//   {
//     icon: Target,
//     title: "Qualified Lead Systems",
//     description:
//       "Pre-qualified patients with genuine interest and financial capacity delivered to your calendar — so every lead is serious and showing up ready to commit.",
//   },
// ];

// export function MechanismSection() {
//   return (
//     <section
//       id="system"
//       aria-label="Our patient acquisition system"
//       className="py-20 md:py-28"
//     >
//       <div className="container mx-auto px-4">

//         {/* Heading */}
//         <div className="text-center mb-12 md:mb-16">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">
//             Other Agencies Run Ads.{" "}
//             <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
//               We Build a Patient Acquisition Machine.
//             </span>
//           </h2>
//           <p
//             className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground"
//           >
//             A system so precise, each touchpoint is engineered to move patients
//             closer to booking.
//           </p>
//         </div>

//         {/* Pillars Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
//           {pillars.map((pillar) => (
//             <article key={pillar.title}>
//               <Card
//                 className="h-full group hover:border-primary/50 hover:shadow-[0_0_40px_rgba(203,133,48,0.08)] hover:-translate-y-1 transition-all duration-300"
//                 style={{ fontFamily: "var(--font-poppins), sans-serif" }}
//               >
//                 <CardHeader>
//                   <pillar.icon
//                     className="h-10 w-10 md:h-12 md:w-12 text-primary mb-2"
//                     aria-hidden="true"
//                   />
//                   <CardTitle className="text-lg md:text-xl">
//                     {pillar.title}
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-sm md:text-base text-muted-foreground">
//                     {pillar.description}
//                   </p>
//                 </CardContent>
//               </Card>
//             </article>
//           ))}
//         </div>

//         {/* Label */}
//         <p className="text-center mt-10 text-sm uppercase tracking-wider text-primary font-medium">
//           The Creavox Patient Acquisition System
//         </p>

//         {/* CTA */}
//         <div className="mt-10 flex justify-center">
//           <button className="btn-primary text-sm md:text-base px-7 py-3.5">
//             See If My Clinic Qualifies →
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }





// ------------safari------------ 

"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Megaphone, Zap, Globe, Target } from "lucide-react";

const pillars = [
  {
    icon: Megaphone,
    title: "Precision Paid Media Engine",
    description: "Before your competitor even loads their page, your clinic is already the first face potential patients see and trust.",
  },
  {
    icon: Zap,
    title: "AI Follow-Up Automation",
    description: "Someone scrolls past your ad at midnight — by morning they're confirmed on your calendar without you lifting a finger. Every lead contacted within 60 seconds.",
  },
  {
    icon: Globe,
    title: "Conversion Infrastructure",
    description: "We position your clinic so aggressively online that choosing anyone else over you genuinely feels like a risk to patients.",
  },
  {
    icon: Target,
    title: "Qualified Lead Systems",
    description: "Pre-qualified patients with genuine interest and financial capacity delivered to your calendar — every lead is serious and showing up ready to commit.",
  },
];

export function MechanismSection() {
  return (
    <section id="system" className="py-16 sm:py-20">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Other Agencies Run Ads.{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              We Build a Patient Acquisition Machine.
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground px-4 sm:px-0">
            A system so precise, each touchpoint is engineered to move patients closer to booking.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className="relative group hover:border-primary/50 hover:shadow-[0_0_40px_rgba(203,133,48,0.08)] hover:-translate-y-1 transition-all duration-300"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <CardHeader>
                <pillar.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4" aria-hidden="true" />
                <CardTitle className="text-lg sm:text-xl">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm sm:text-base">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <p className="text-xs sm:text-sm uppercase tracking-wider text-primary font-medium">
            The Creavox Patient Acquisition System
          </p>
        </div>

        <div className="mt-10 sm:mt-12 flex justify-center">
          <button
            className="btn-primary text-md sm:text-base w-full sm:w-auto"
            style={{ padding: "14px 28px" }}
          >
            See If My Clinic Qualifies →
          </button>
        </div>
      </div>
    </section>
  );
}
