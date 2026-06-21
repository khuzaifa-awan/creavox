// ------------safari------------

// "use client";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
// import { Megaphone, Zap, Globe, Target } from "lucide-react";

// const pillars = [
//   {
//     icon: Megaphone,
//     title: "Precision Paid Media Engine",
//     description: "Before your competitor even loads their page, your clinic is already the first face potential patients see and trust.",
//   },
//   {
//     icon: Zap,
//     title: "AI Follow-Up Automation",
//     description: "Someone scrolls past your ad at midnight — by morning they're confirmed on your calendar without you lifting a finger. Every lead contacted within 60 seconds.",
//   },
//   {
//     icon: Globe,
//     title: "Conversion Infrastructure",
//     description: "We position your clinic so aggressively online that choosing anyone else over you genuinely feels like a risk to patients.",
//   },
//   {
//     icon: Target,
//     title: "Qualified Lead Systems",
//     description: "Pre-qualified patients with genuine interest and financial capacity delivered to your calendar — every lead is serious and showing up ready to commit.",
//   },
// ];

// export function MechanismSection() {
//   return (
//     <section id="system" className="py-16 sm:py-20">
//       <div className="container mx-auto px-4">

//         <div className="text-center mb-12 sm:mb-16">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
//             Other Agencies Run Ads.{" "}
//             <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
//               We Build a Patient Acquisition Machine.
//             </span>
//           </h2>
//           <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground px-4 sm:px-0">
//             A system so precise, each touchpoint is engineered to move patients closer to booking.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 max-w-6xl mx-auto">
//           {pillars.map((pillar, index) => (
//             <Card
//               key={index}
//               className="relative group hover:border-primary/50 hover:shadow-[0_0_40px_rgba(203,133,48,0.08)] hover:-translate-y-1 transition-all duration-300"
//               style={{ fontFamily: "'Poppins', sans-serif" }}
//             >
//               <CardHeader>
//                 <pillar.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4" aria-hidden="true" />
//                 <CardTitle className="text-lg sm:text-xl">{pillar.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-muted-foreground text-sm sm:text-base">{pillar.description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <div className="text-center mt-10 sm:mt-12">
//           <p className="text-xs sm:text-sm uppercase tracking-wider text-primary font-medium">
//             The Creavox Patient Acquisition System
//           </p>
//         </div>

//         <div className="mt-10 sm:mt-12 flex justify-center">
//           <button
//             className="btn-primary text-md sm:text-base w-full sm:w-auto"
//             style={{ padding: "14px 28px" }}
//           >
//             See If My Clinic Qualifies →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// -------------Safari Gsap------------

// "use client";
// import { useEffect, useRef } from "react";
// import { Megaphone, Zap, Globe, Target } from "lucide-react";

// const pillars = [
//   {
//     icon: Megaphone,
//     title: "Precision Paid Media Engine",
//     description: "Before your competitor even loads their page, your clinic is already the first face potential patients see and trust.",
//   },
//   {
//     icon: Zap,
//     title: "AI Follow-Up Automation",
//     description: "Someone scrolls past your ad at midnight — by morning they're confirmed on your calendar without you lifting a finger. Every lead contacted within 60 seconds.",
//   },
//   {
//     icon: Globe,
//     title: "Conversion Infrastructure",
//     description: "We position your clinic so aggressively online that choosing anyone else over you genuinely feels like a risk to patients.",
//   },
//   {
//     icon: Target,
//     title: "Qualified Lead Systems",
//     description: "Pre-qualified patients with genuine interest and financial capacity delivered to your calendar — every lead is serious and showing up ready to commit.",
//   },
// ];

// export function MechanismSection() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const slidesRef = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     const init = async () => {
//       const { gsap } = await import("gsap");
//       const { ScrollTrigger } = await import("gsap/ScrollTrigger");
//       gsap.registerPlugin(ScrollTrigger);

//       const slides = slidesRef.current;
//       const wrapper = wrapperRef.current;
//       if (!slides.length || !wrapper) return;

//       const delay = 0.5;

//       gsap.set(slides, {
//         rotationX: (i: number) => (i ? -90 : 0),
//         transformOrigin: "center center -150px",
//       });

//       const tl = gsap.timeline({
//         defaults: {
//           ease: "power1.inOut",
//           transformOrigin: "center center -150px",
//         },
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "+=" + (slides.length - 1) * 50 + "%",
//           pin: true,
//           scrub: true,
//         },
//       });

//       slides.forEach((slide, i) => {
//         const nextSlide = slides[i + 1];
//         if (!nextSlide) return;
//         tl.to(
//           slide,
//           {
//             rotationX: 90,
//             onComplete: () => gsap.set(slide, { rotationX: -90 }),
//           },
//           "+=" + delay
//         ).to(nextSlide, { rotationX: 0 }, "<");
//       });

//       tl.to({}, { duration: delay });
//     };

//     init();

//     return () => {
//       import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
//         ScrollTrigger.getAll().forEach((t) => t.kill());
//       });
//     };
//   }, []);

//   return (
//     <section ref={sectionRef} id="system" className="py-16 sm:py-20">
//       <div className="container mx-auto px-4">

//         {/* Heading */}
//         <div className="text-center mb-8 mt-4 pt-8 sm:mb-16">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
//             Other Agencies Run Ads.{" "}
//             <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
//               We Build a Patient Acquisition Machine.
//             </span>
//           </h2>
//           <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground px-4 sm:px-0">
//             A system so precise, each touchpoint is engineered to move patients closer to booking.
//           </p>
//         </div>

//         {/* Rolodex wrapper */}
//         <div
//           ref={wrapperRef}
//           className="relative flex items-center justify-center"
//           style={{ height: "min(400px, 60vh)" }}
//         >
//           <div
//             className="relative"
//             style={{
//               width: "min(500px, 90vw)",
//               height: "min(280px, 45vw)",
//               perspective: "800px",
//             }}
//           >
//             {/* Dashed outline */}
//             <div
//               style={{
//                 position: "absolute",
//                 top: "-1rem",
//                 bottom: "-1rem",
//                 left: "-1rem",
//                 right: "-1rem",
//                 outline: "1.5px dashed rgba(203,133,48,0.3)",
//                 borderRadius: "16px",
//                 pointerEvents: "none",
//               }}
//             />

//             {pillars.map((pillar, index) => {
//               const Icon = pillar.icon;
//               return (
//                 <div
//                   key={index}
//                   ref={(el) => {
//                     if (el) slidesRef.current[index] = el;
//                   }}
//                   className="absolute inset-0 flex flex-col justify-center px-8 sm:px-10 py-8"
//                   style={{
//                     backfaceVisibility: "hidden",
//                     background: "#1e1f26",
//                     border: "1px solid rgba(203,133,48,0.25)",
//                     borderRadius: "14px",
//                     boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
//                     fontFamily: "'Poppins', sans-serif",
//                   }}
//                 >
//                   <Icon
//                     className="text-primary mb-5"
//                     style={{ width: "36px", height: "36px" }}
//                     aria-hidden="true"
//                   />
//                   <h3
//                     className="text-[#F0EFE7] font-medium leading-snug mb-3"
//                     style={{ fontSize: "clamp(18px, 2.5vw, 24px)" }}
//                   >
//                     {pillar.title}
//                   </h3>
//                   <p
//                     className="leading-relaxed text-[#F0EFE7]/65"
//                     style={{ fontSize: "clamp(13px, 1.8vw, 16px)" }}
//                   >
//                     {pillar.description}
//                   </p>

//                   {/* Slide counter */}
//                   <div
//                     className="absolute bottom-5 right-6"
//                     style={{
//                       fontSize: "11px",
//                       letterSpacing: "0.12em",
//                       color: "rgba(203,133,48,0.5)",
//                       fontFamily: "'Poppins', sans-serif",
//                     }}
//                   >
//                     0{index + 1} / 0{pillars.length}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

// {/* Bottom label */}
// <div className="text-center mt-10 sm:mt-12">
//   <p className="text-xs sm:text-sm uppercase tracking-wider text-primary font-medium">
//     The Creavox Patient Acquisition System
//   </p>
// </div>

// {/* CTA */}
// <div className="mt-10 sm:mt-12 flex justify-center">
//   <button
//     className="btn-primary text-sm sm:text-base w-full sm:w-auto"
//     style={{ padding: "14px 28px" }}
//   >
//     See If My Clinic Qualifies →
//   </button>
// </div>
//       </div>
//     </section>
//   );
// }

// -------New Gsap---------

// "use client";
// import { useEffect, useRef } from "react";
// import Image from "next/image";

// const slides = [
//   {
//     id: 1,
//     title: "Precision\nPaid Media",
//     description:
//       "Before your competitor even loads their page, your clinic is already the first face potential patients see and trust.",
//     image: "/mechanism1.jpg",
//   },
//   {
//     id: 2,
//     title: "AI\nFollow-Up",
//     description:
//       "Someone scrolls past your ad at midnight — by morning they're confirmed on your calendar without you lifting a finger.",
//     image: "/mechanism2.jpg",
//   },
//   {
//     id: 3,
//     title: "Conversion\nInfrastructure",
//     description:
//       "We position your clinic so aggressively online that choosing anyone else over you genuinely feels like a risk to patients.",
//     image: "/mechanism3.jpg",
//   },
//   {
//     id: 4,
//     title: "Qualified\nLead Systems",
//     description:
//       "Pre-qualified patients with genuine interest and financial capacity delivered to your calendar — every lead serious and ready to commit.",
//     image: "/mechanism4.jpg",
//   },
// ];

// export function MechanismSection() {
//   const stageRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const init = async () => {
//       const { gsap } = await import("gsap");
//       const { ScrollTrigger } = await import("gsap/ScrollTrigger");
//       const { ScrollToPlugin } = await import("gsap/ScrollToPlugin");
//       const { SplitText } = await import("gsap/SplitText");

//       gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);

//       const stage = stageRef.current;
//       if (!stage) return;

//       // Split titles
//       const titles = stage.querySelectorAll<HTMLElement>(".mech-slide-title");
//       const splitTitles = new SplitText(titles, {
//         type: "lines,chars",
//         linesClass: "mech-line",
//         charsClass: "mech-char",
//       });

//       // Intro title split
//       const introSplit = new SplitText(".mech-intro-title", {
//         type: "lines",
//         linesClass: "mech-intro-line",
//       });

//       // Intro animation
//       const introTl = gsap.timeline({ delay: 0.3 });
//       introTl
//         .from(".mech-intro-line", {
//           y: 200,
//           ease: "power4",
//           duration: 2,
//         })
//         .from(
//           ".mech-intro-sub",
//           {
//             x: -60,
//             opacity: 0,
//             ease: "power4",
//             duration: 2,
//           },
//           0.5,
//         );

//       // Intro scroll out
//       const introScrollTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".mech-intro",
//           scrub: 1,
//           start: "top bottom",
//           end: "bottom top",
//         },
//       });
//       introScrollTl
//         .to(".mech-intro-title", { x: 200, ease: "power4.in", duration: 3 })
//         .to(".mech-intro-sub", { y: 80, ease: "power4.in", duration: 3 }, 0);

//       // Slide animations
//       const slideEls = stage.querySelectorAll<HTMLElement>(".mech-slide");
//       slideEls.forEach((slide) => {
//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: slide,
//             start: "40% 50%",
//           },
//         });

//         tl.from(slide.querySelectorAll(".mech-slide-title"), {
//           ease: "power4",
//           y: "+=5vh",
//           duration: 2.5,
//         })
//           .from(
//             slide.querySelectorAll(".mech-line-inner"),
//             {
//               y: 200,
//               duration: 2,
//               ease: "power4",
//               stagger: 0.1,
//             },
//             0,
//           )
//           .from(
//             slide.querySelectorAll(".mech-slide-desc"),
//             {
//               x: 80,
//               y: 40,
//               opacity: 0,
//               duration: 2,
//               ease: "power4",
//             },
//             0.4,
//           );
//       });

//       // Parallax on images
//       slideEls.forEach((slide) => {
//         const imageWrap = slide.querySelector<HTMLElement>(".mech-image-wrap");
//         if (!imageWrap) return;

//         gsap.fromTo(
//           imageWrap,
//           { y: "-30vh" },
//           {
//             y: "30vh",
//             scrollTrigger: {
//               trigger: slide,
//               scrub: true,
//               start: "top bottom",
//             },
//             ease: "none",
//           },
//         );
//       });

//       // Footer link animation
//       gsap.from(".mech-footer-link", {
//         scrollTrigger: {
//           trigger: ".mech-footer",
//           scrub: 2,
//           start: "50% 100%",
//           end: "0% 0%",
//         },
//         y: "20vh",
//         ease: "sine",
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
//     <div id="mech-smooth-wrapper" style={{ overflow: "hidden" }}>
//       <div ref={stageRef} style={{ background: "#0b0d11" }}>
//         {/* ── Intro ── */}
//         <section
//           className="mech-intro"
//           style={{
//             height: "60vh",
//             position: "relative",
//             padding: "5vw",
//             overflow: "hidden",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "flex-end",
//             background: "#0b0d11",
//             borderBottom: "1px solid rgba(203,133,48,0.15)",
//           }}
//         >
//           {/* Heading */}
//           <div
//             className="text-center mb-12 sm:mb-16 absolute top-1/3 left-1/2"
//             style={{ transform: "translate(-50%, -50%)", width: "90%" }}
//           >
//             <h1 className="text-3xl sm:text-6xl lg:text-7xl tracking-tight mb-4 text-[#F0EFE7]">
//               Other Agencies Run Ads.{" "}
//               <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
//                 We Build a Patient Acquisition Machine.
//               </span>
//             </h1>
//           </div>

//           {/* Animated intro text bottom */}
//           <div style={{ position: "absolute", right: "8%", bottom: "15%" }}>
//             <h2
//               className="mech-intro-title sm:top-3/4"
//               style={{
//                 fontSize: "14vw",
//                 margin: 0,
//                 lineHeight: 1,
//                 fontFamily: "'Poppins', sans-serif",
//                 fontWeight: 700,
//                 letterSpacing: "-0.05em",
//                 overflow: "hidden",
//                 color: "rgba(203,133,48,0.12)",
//               }}
//             >
//               THE FUNNEL
//             </h2>
//             <p
//               className="mech-intro-sub"
//               style={{
//                 marginTop: "2vw",
//                 maxWidth: "35vw",
//                 marginLeft: "25vw",
//                 fontSize: "clamp(14px, 1.2vw, 18px)",
//                 color: "rgba(240,239,231,0.55)",
//                 fontFamily: "'Poppins', sans-serif",
//                 lineHeight: 1.6,
//               }}
//             >
//               A system so precise, each touchpoint is engineered to move
//               patients closer to booking.
//             </p>
//           </div>
//         </section>

//         {/* ── Slides ── */}
//         {slides.map((slide, index) => (
//           <section
//             key={slide.id}
//             className="mech-slide"
//             style={{
//               display: "flex",
//               alignItems: "stretch",
//               height: "100vh",
//               overflow: "hidden",
//               background: index % 2 === 0 ? "#0b0d11" : "#13161c",
//             }}
//           >
//             {/* Left col — content */}
//             <div
//               style={{
//                 flexBasis: "50%",
//                 position: "relative",
//                 zIndex: 1,
//               }}
//             >
//               <div
//                 className="mech-slide-content"
//                 style={{
//                   position: "relative",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "flex-end",
//                   overflow: "hidden",
//                   height: "100%",
//                   padding: "6vw 6vw 10vw",
//                   background:
//                     index === 0
//                       ? "rgba(203,133,48,0.08)"
//                       : index === 1
//                         ? "rgba(203,133,48,0.06)"
//                         : index === 2
//                           ? "rgba(203,133,48,0.05)"
//                           : "rgba(203,133,48,0.04)",
//                   borderRight: "1px solid rgba(203,133,48,0.1)",
//                 }}
//               >
//                 {/* Step number */}
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: "6vw",
//                     left: "6vw",
//                     fontSize: "11px",
//                     letterSpacing: "0.2em",
//                     textTransform: "uppercase",
//                     color: "#CB8530",
//                     fontFamily: "'Poppins', sans-serif",
//                   }}
//                 >
//                   0{slide.id} /
//                 </div>

//                 {/* Title */}
//                 <h3
//                   className="mech-slide-title"
//                   style={{
//                     margin: "0 0 2vw",
//                     fontSize: "clamp(2rem, 7vw, 6rem)",
//                     letterSpacing: "-0.03em",
//                     fontFamily: "'Poppins', sans-serif",
//                     fontWeight: 600,
//                     color: "#F0EFE7",
//                     lineHeight: 1,
//                     whiteSpace: "pre-line",
//                   }}
//                 >
//                   {slide.title.split("\n").map((line, i) => (
//                     <span
//                       key={i}
//                       className="mech-line"
//                       style={{
//                         display: "block",
//                         overflow: "hidden",
//                         marginTop: i > 0 ? "-0.5vw" : 0,
//                       }}
//                     >
//                       <span
//                         className="mech-line-inner"
//                         style={{ display: "block" }}
//                       >
//                         {line}
//                       </span>
//                     </span>
//                   ))}
//                 </h3>

//                 {/* Description */}
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "flex-end",
//                   }}
//                 >
//                   <p
//                     className="mech-slide-desc"
//                     style={{
//                       maxWidth: "22vw",
//                       fontSize: "clamp(13px, 1.1vw, 16px)",
//                       color: "rgba(240,239,231,0.6)",
//                       lineHeight: 1.6,
//                       fontFamily: "'Poppins', sans-serif",
//                     }}
//                   >
//                     {slide.description}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Right col — image */}
//             <div
//               style={{
//                 flexBasis: "50%",
//                 position: "relative",
//                 overflow: "hidden",
//               }}
//             >
//               <div
//                 className="mech-image-wrap"
//                 style={{
//                   position: "absolute",
//                   left: 0,
//                   width: "100%",
//                   height: "160vh",
//                   top: 0,
//                 }}
//               >
//                 <Image
//                   src={slide.image}
//                   alt={slide.title.replace("\n", " ")}
//                   fill
//                   style={{ objectFit: "cover" }}
//                   sizes="50vw"
//                 />
//               </div>
//             </div>
//           </section>
//         ))}

//         {/* ── CTA / Footer ── */}
//         <section
//           className="mech-footer"
//           style={{
//             height: "35vh",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             flexDirection: "column",
//             background: "#0b0d11",
//             borderTop: "1px solid rgba(203,133,48,0.15)",
//             position: "relative",
//           }}
//         >
//           <p
//             className="mech-footer-link"
//             style={{
//               fontSize: "clamp(0.02rem, 0.1vw, 0.05vw)",
//               color: "#CB8530",
//               fontFamily: "'Poppins', sans-serif",
//               fontWeight: 600,
//               letterSpacing: "-0.02em",
//               marginBottom: "2rem",
//               textAlign: "center",
//             }}
//           >
//             The Creavox Patient
//             <br />
//             Acquisition System
//           </p>

//           <p
//             style={{
//               fontSize: "clamp(14px, 1.2vw, 18px)",
//               color: "rgba(240,239,231,0.55)",
//               fontFamily: "'Poppins', sans-serif",
//               maxWidth: "500px",
//               textAlign: "center",
//               lineHeight: 1.6,
//               marginBottom: "3rem",
//             }}
//           >
//             Every week without a system is a week your competitors are filling
//             the consultations that should be yours.
//           </p>

//           {/* Bottom label */}
//           <div className="text-center mt-10 sm:mt-12">
//             <p className="text-xs sm:text-sm uppercase tracking-wider text-primary font-medium">
//               The Creavox Patient Acquisition System
//             </p>
//           </div>

//           {/* CTA */}
//           <div className="mt-10 sm:mt-12 flex justify-center">
//             <button
//               className="btn-primary"
//               style={{
//                 padding: "clamp(13px, 1.4vw, 19px) clamp(20px, 2.5vw, 35px)",
//                 width: "clamp(200px, 40vw, 450px)",
//                 fontSize: "clamp(18px, 1.4vw, 18px)",
//               }}
//             >
//               See If My Clinic Qualifies →
//             </button>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }



"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Precision\nPaid Media",
    description:
      "Before your competitor even loads their page, your clinic is already the first face potential patients see and trust.",
    image: "/mechanism1.jpg",
  },
  {
    id: 2,
    title: "AI\nFollow-Up",
    description:
      "Someone scrolls past your ad at midnight — by morning they're confirmed on your calendar without you lifting a finger.",
    image: "/mechanism2.jpg",
  },
  {
    id: 3,
    title: "Conversion\nInfrastructure",
    description:
      "We position your clinic so aggressively online that choosing anyone else over you genuinely feels like a risk to patients.",
    image: "/mechanism3.jpg",
  },
  {
    id: 4,
    title: "Qualified\nLead Systems",
    description:
      "Pre-qualified patients with genuine interest and financial capacity delivered to your calendar — every lead serious and ready to commit.",
    image: "/mechanism4.jpg",
  },
];

export function MechanismSection() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const { ScrollToPlugin } = await import("gsap/ScrollToPlugin");
      const { SplitText } = await import("gsap/SplitText");

      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);

      const stage = stageRef.current;
      if (!stage) return;

      // Split titles
      const titles = stage.querySelectorAll<HTMLElement>(".mech-slide-title");
      const splitTitles = new SplitText(titles, {
        type: "lines,chars",
        linesClass: "mech-line",
        charsClass: "mech-char",
      });

      // Intro title split
      const introSplit = new SplitText(".mech-intro-title", {
        type: "lines",
        linesClass: "mech-intro-line",
      });

      // Intro animation
      const introTl = gsap.timeline({ delay: 0.3 });
      introTl
        .from(".mech-intro-line", {
          y: 200,
          ease: "power4",
          duration: 2,
        })
        .from(
          ".mech-intro-sub",
          {
            x: -60,
            opacity: 0,
            ease: "power4",
            duration: 2,
          },
          0.5,
        );

      // Intro scroll out
      const introScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".mech-intro",
          scrub: 1,
          start: "top bottom",
          end: "bottom top",
        },
      });
      introScrollTl
        .to(".mech-intro-title", { x: 200, ease: "power4.in", duration: 3 })
        .to(".mech-intro-sub", { y: 80, ease: "power4.in", duration: 3 }, 0);

      // Slide animations
      const slideEls = stage.querySelectorAll<HTMLElement>(".mech-slide");
      slideEls.forEach((slide) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: slide,
            start: "40% 50%",
          },
        });

        tl.from(slide.querySelectorAll(".mech-slide-title"), {
          ease: "power4",
          y: "+=5vh",
          duration: 2.5,
        })
          .from(
            slide.querySelectorAll(".mech-line-inner"),
            {
              y: 200,
              duration: 2,
              ease: "power4",
              stagger: 0.1,
            },
            0,
          )
          .from(
            slide.querySelectorAll(".mech-slide-desc"),
            {
              x: 80,
              y: 40,
              opacity: 0,
              duration: 2,
              ease: "power4",
            },
            0.4,
          );
      });

      // Parallax on images
      slideEls.forEach((slide) => {
        const imageWrap = slide.querySelector<HTMLElement>(".mech-image-wrap");
        if (!imageWrap) return;

        gsap.fromTo(
          imageWrap,
          { y: "-30vh" },
          {
            y: "30vh",
            scrollTrigger: {
              trigger: slide,
              scrub: true,
              start: "top bottom",
            },
            ease: "none",
          },
        );
      });

      // Footer link animation
      gsap.from(".mech-footer-link", {
        scrollTrigger: {
          trigger: ".mech-footer",
          scrub: 2,
          start: "50% 100%",
          end: "0% 0%",
        },
        y: "20vh",
        ease: "sine",
      });
    };

    init();

    return () => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      });
    };
  }, []);

  return (
    <div id="mech-smooth-wrapper" style={{ overflow: "hidden" }}>
      <div ref={stageRef} style={{ background: "#0b0d11" }}>
        {/* ── Intro ── */}
        <section
          className="mech-intro"
          style={{
            height: "60vh",
            position: "relative",
            padding: "5vw",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            background: "#0b0d11",
            borderBottom: "1px solid rgba(203,133,48,0.15)",
          }}
        >
          {/* Heading */}
          <div
            className="text-center mb-12 sm:mb-16 absolute top-1/3 left-1/2"
            style={{ transform: "translate(-50%, -50%)", width: "90%" }}
          >
            <h1 className="text-3xl sm:text-6xl lg:text-7xl tracking-tight mb-4 text-[#F0EFE7]">
              Other Agencies Run Ads.{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                We Build a Patient Acquisition Machine.
              </span>
            </h1>
          </div>

          {/* Animated intro text bottom */}
          <div style={{ position: "absolute", right: "8%", bottom: "15%" }}>
            <h2
              className="mech-intro-title sm:top-3/4"
              style={{
                fontSize: "14vw",
                margin: 0,
                lineHeight: 1,
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                letterSpacing: "-0.05em",
                overflow: "hidden",
                color: "rgba(203,133,48,0.12)",
              }}
            >
              THE FUNNEL
            </h2>
            <p
              className="mech-intro-sub"
              style={{
                marginTop: "2vw",
                maxWidth: "35vw",
                marginLeft: "25vw",
                fontSize: "clamp(14px, 1.2vw, 18px)",
                color: "rgba(240,239,231,0.55)",
                fontFamily: "'Poppins', sans-serif",
                lineHeight: 1.6,
              }}
            >
              A system so precise, each touchpoint is engineered to move
              patients closer to booking.
            </p>
          </div>
        </section>

        {/* ── Slides ── */}
        {slides.map((slide, index) => (
          <section
            key={slide.id}
            className="mech-slide"
            style={{
              display: "flex",
              alignItems: "stretch",
              height: "100vh",
              overflow: "hidden",
              background: index % 2 === 0 ? "#0b0d11" : "#13161c",
            }}
          >
            {/* Left col — content */}
            {/* Left col — content */}
                <div
                  style={{
                    flexBasis: "50%",
                    position: "relative",
                    zIndex: 1,
                    width: "100%",
                  }}
                  className="mech-col-left"
                >
                  <div
                    className="mech-slide-content"
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      overflow: "hidden",
                      height: "100%",
                      padding: "6vw 6vw 10vw",
                      background:
                        index === 0
                          ? "rgba(203,133,48,0.08)"
                          : index === 1
                          ? "rgba(203,133,48,0.06)"
                          : index === 2
                          ? "rgba(203,133,48,0.05)"
                          : "rgba(203,133,48,0.04)",
                      borderRight: "1px solid rgba(203,133,48,0.1)",
                    }}
                  >
                    {/* Step number */}
                    <div
                      style={{
                        position: "absolute",
                        top: "6vw",
                        left: "6vw",
                        fontSize: "15px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#CB8530",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      0{slide.id} /
                    </div>

                    {/* Title */}
                    <h3
                      className="mech-slide-title"
                      style={{
                        margin: "0 0 2vw",
                        fontSize: "clamp(2rem, 7vw, 6rem)",
                        letterSpacing: "-0.03em",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        color: "#F0EFE7",
                        lineHeight: 1,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {slide.title.split("\n").map((line, i) => (
                        <span
                          key={i}
                          className="mech-line"
                          style={{
                            display: "block",
                            overflow: "hidden",
                            marginTop: i > 0 ? "-0.5vw" : 0,
                          }}
                        >
                          <span className="mech-line-inner" style={{ display: "block" }}>
                            {line}
                          </span>
                        </span>
                      ))}
                    </h3>

                    {/* Description */}
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                      <p
                        className="mech-slide-desc"
                        style={{
                          maxWidth: "22vw",
                          fontSize: "clamp(13px, 1.1vw, 16px)",
                          color: "rgba(240,239,231,0.6)",
                          lineHeight: 1.6,
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>




            {/* Right col — image */}
            {/* Right col — image */}
              <div
                className="mech-col-right"
                style={{
                  flexBasis: "50%",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="mech-image-wrap"
                  style={{
                    position: "absolute",
                    left: 0,
                    width: "100%",
                    height: "160vh",
                    top: 0,
                  }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title.replace("\n", " ")}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="50vw"
                  />
                </div>
              </div>
          </section>
        ))}

        {/* ── CTA / Footer ── */}
        <section
          className="mech-footer"
          style={{
            height: "35vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            background: "#0b0d11",
            borderTop: "1px solid rgba(203,133,48,0.15)",
            position: "relative",
          }}
        >
          <p
            className="mech-footer-link"
            style={{
              fontSize: "clamp(0.02rem, 0.1vw, 0.05vw)",
              color: "#CB8530",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            The Creavox Patient
            <br />
            Acquisition System
          </p>

          <p
            style={{
              fontSize: "clamp(14px, 1.2vw, 18px)",
              color: "rgba(240,239,231,0.55)",
              fontFamily: "'Poppins', sans-serif",
              maxWidth: "500px",
              padding: "0 1.2rem",
              textAlign: "center",
              lineHeight: 1.6,
              marginBottom: "3rem",
            }}
          >
            Every week without a system is a week your competitors are filling
            the consultations that should be yours.
          </p>

          {/* Bottom label */}
          <div className="text-center mt-10 sm:mt-12">
            <p className="text-xs sm:text-sm uppercase tracking-wider text-primary font-medium">
              The Creavox Patient Acquisition System
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 sm:mt-12 flex justify-center">
            <button
              className="btn-primary"
              style={{
                padding: "clamp(13px, 1.4vw, 19px) clamp(20px, 2.5vw, 35px)",
                width: "clamp(260px, 40vw, 450px)",
                fontSize: "clamp(17px, 1.4vw, 18px)",
              }}
            >
              See If My Clinic Qualifies →
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
