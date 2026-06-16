// export function TrustParagraph() {
//   return (
//     <section
//       aria-label="Our approach"
//       className="py-16 md:py-20 bg-muted/50"
//     >
//       <div className="container mx-auto px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <p
//             className="text-base md:text-lg leading-relaxed text-muted-foreground"
//             style={{ fontFamily: "var(--font-poppins), sans-serif" }}
//           >
//             After studying how the top aesthetic clinics in the world acquire
//             patients, we built a system that removes every bottleneck between a
//             potential patient and a booked consultation.{" "}
//             <strong className="text-foreground font-medium">
//               We don't work with everyone.
//             </strong>{" "}
//             We work exclusively with clinics serious about predictable growth.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }




// ---------safari------------

// "use client";

// export function TrustParagraph() {
//   return (
//     <section className="py-14 sm:py-16 bg-muted/50">
//       <div className="container mx-auto px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <p
//             className="text-base sm:text-lg leading-relaxed text-muted-foreground"
//             style={{ fontFamily: "'Poppins', sans-serif" }}
//           >
//             After studying how the top aesthetic clinics in the world acquire patients, we built a system
//             that removes every bottleneck between a potential patient and a booked consultation.{" "}
//             <span className="text-foreground font-medium">We don&apos;t work with everyone.</span>{" "}
//             We work exclusively with clinics serious about predictable growth.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }



// ---------safari gsap------------


// "use client";

// import { useEffect, useRef } from "react";

// export function TrustParagraph() {
//   const titleRef = useRef<HTMLParagraphElement>(null);

//   useEffect(() => {
//     const init = async () => {
//       const { gsap } = await import("gsap");
//       const { ScrollTrigger } = await import("gsap/ScrollTrigger");
//       const { SplitText } = await import("gsap/SplitText");

//       gsap.registerPlugin(ScrollTrigger, SplitText);

//       const el = titleRef.current;
//       if (!el) return;

//       const split = new SplitText(el, { type: "words,chars" });

//       gsap.from(split.chars, {
//         duration: 0.8,
//         opacity: 0,
//         y: 10,
//         ease: "circ.out",
//         stagger: 0.02,
//         scrollTrigger: {
//           trigger: el,
//           start: "top 85%",
//           end: "top 20%",
//           scrub: 0.5,
//         },
//         onComplete: () => split.revert(),
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
//     // <section className="py-10 sm:py-16 bg-muted/50">
//     <section className="py-6 sm:py-8 bg-muted/50 overflow-hidden">
//       <div className="container px-8 sm:px-8 lg:px-24">
//   <div>
//     <p
//       ref={titleRef}
//       className="text-base sm:text-lg leading-relaxed
//                   pt-[15px] pb-[27px] mt-[14px] mb-[14px]
//                   sm:pt-[20px] sm:pb-[20px] sm:mt-[12px] sm:mb-[12px]
//                   text-[20px] leading-[32px]
//                   tracking-[0.04em]
//                   md:text-[clamp(24px,3.5vw,42px)] md:leading-[clamp(32px,5vw,80px)]
//                   lg:text-[clamp(20px,2.5vw,36px)] lg:leading-[clamp(18px,3vw,48px)]"
//       style={{
//         fontFamily: "'Plus Jakarta Sans', sans-serif",
//         color: "rgba(240,239,231,0.55)",
//         width: "100%",
//         fontStyle: "italic",
//         fontWeight: "bolder",
//         textAlign: "left",
//       }}
//     >    After studying how the top aesthetic clinics in the world acquire patients, we built a system
//             that removes every bottleneck between a potential patient and a booked consultation.{" "}
//             <span style={{ color: "#CB8530", fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", }}>
//               We don&apos;t work with everyone.
//             </span>{" "}
//             We work exclusively with clinics serious about predictable growth.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }





// "use client";

// import { useEffect, useRef } from "react";
// import Image from "next/image";

// export function TrustParagraph() {
//   const titleRef = useRef<HTMLParagraphElement>(null);

//   useEffect(() => {
//     const init = async () => {
//       const { gsap } = await import("gsap");
//       const { ScrollTrigger } = await import("gsap/ScrollTrigger");
//       const { SplitText } = await import("gsap/SplitText");

//       gsap.registerPlugin(ScrollTrigger, SplitText);

//       const el = titleRef.current;
//       if (!el) return;

//       const split = new SplitText(el, { type: "words,chars" });

//       gsap.from(split.chars, {
//         duration: 0.8,
//         opacity: 0,
//         y: 10,
//         ease: "circ.out",
//         stagger: 0.02,
//         scrollTrigger: {
//           trigger: el,
//           start: "top 85%",
//           end: "top 20%",
//           scrub: 0.5,
//         },
//         onComplete: () => split.revert(),
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
//     <section
//       className="relative overflow-hidden bg-muted/50"
//       style={{ minHeight: "80vh" }}
//     >
//       <div className="container mx-auto px-6 sm:px-8 lg:px-16 h-full">
//         <div
//           className="relative flex items-center"
//           style={{ minHeight: "80vh" }}
//         >

//           {/* Left — Text (takes ~60% width) */}
//           <div className="w-full lg:w-[60%] relative z-10 py-16 lg:py-24">
//             <p
//               ref={titleRef}
//               className="
//                 text-[20px] leading-[32px]
//                 tracking-[0.04em]
//                 md:text-[clamp(24px,3.5vw,42px)] md:leading-[clamp(32px,5vw,80px)]
//                 lg:text-[clamp(20px,2.5vw,36px)] lg:leading-[clamp(28px,3vw,52px)]
//                 pt-[15px] pb-[27px] mt-[14px] mb-[14px]
//                 sm:pt-[20px] sm:pb-[20px] sm:mt-[12px] sm:mb-[12px]
//               "
//               style={{
//                 fontFamily: "'Plus Jakarta Sans', sans-serif",
//                 color: "rgba(240,239,231,0.55)",
//                 fontStyle: "italic",
//                 fontWeight: "bolder",
//                 textAlign: "left",
//               }}
//             >
//               After studying how the top aesthetic clinics in the world acquire
//               patients, we built a system that removes every bottleneck between
//               a potential patient and a booked consultation.{" "}
//               <span
//                 style={{
//                   color: "#CB8530",
//                   fontWeight: 700,
//                   fontFamily: "'Plus Jakarta Sans', sans-serif",
//                 }}
//               >
//                 We don&apos;t work with everyone.
//               </span>{" "}
//               We work exclusively with clinics serious about predictable growth.
//             </p>
//           </div>

//           {/* Right — Image (absolute, bleeds to right edge) */}
//           <div
//             className="hidden lg:block absolute right-0 bottom-0"
//             style={{
//               width: "42%",
//               height: "90%",
//             }}
//             aria-hidden="true"
//           >
//             {/* Fade gradient on left edge so image blends into text */}
//             <div
//               className="absolute inset-y-0 left-0 w-24 z-10"
//               style={{
//                 background:
//                   "linear-gradient(to right, var(--muted), transparent)",
//               }}
//             />

//             <Image
//               src="/org-peep.jpg"
//               alt=""
//               fill
//               sizes="42vw"
//               className="object-cover object-top"
//               style={{ borderRadius: "16px 16px 16px 16px" }}
//               priority={false}
//             />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function TrustParagraph() {
  const titleRef = useRef<HTMLParagraphElement>(null);

  // ── GSAP Animation — UNTOUCHED ───────────────────────────────────────────
  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const { SplitText } = await import("gsap/SplitText");

      gsap.registerPlugin(ScrollTrigger, SplitText);

      const el = titleRef.current;
      if (!el) return;

      const split = new SplitText(el, { type: "words,chars" });

      gsap.from(split.chars, {
        duration: 0.8,
        opacity: 0,
        y: 10,
        ease: "circ.out",
        stagger: 0.02,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 20%",
          scrub: 0.5,
        },
        onComplete: () => split.revert(),
      });
    };

    init();

    return () => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      });
    };
  }, []);
  // ─────────────────────────────────────────────────────────────────────────

  return (
    /*
      Section is full viewport height, no padding — the split goes edge to edge.
      On mobile we stack: text panel on top, image panel below.
    */
    <section className="relative overflow-hidden bg-muted/50 min-h-[70vh] md:min-h-[10vh] lg:min-h-[70vh]">
      <div className="flex flex-col lg:flex-row min-h-[80vh] md:min-h-[65vh] lg:min-h-[80vh]">

        {/*
          ══ LEFT PANEL — TEXT ════════════════════════════════════════════════
          Flat bg-muted/50 background (same as section), no border, no shadow.
          Takes exactly half the width on desktop — hard split like the reference.
          Content is vertically centred with flex, padded generously on the sides.
        */}
        <div
          className="
            w-full lg:w-1/2
            flex flex-col justify-center
            px-8 sm:px-14 lg:px-16 xl:px-24
            py-20 lg:py-0
          "
        >

          {/*
            Eyebrow — matches the reference's small uppercase label above the headline.
            Dim, tracked out, editorial.
          */}
          <p
            className="mb-8"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(240,239,231,0.3)",
              fontWeight: 500,
              paddingLeft: "24px",
            }}
          >
            Our Approach
          </p>

          
          <p
            ref={titleRef}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(32px, 3vw, 48px)",
              lineHeight: 1.08,
              letterSpacing: "0.02em",
              color: "rgba(240,239,231,0.88)",
              fontWeight: 800,
              fontStyle: "italic",
              // textTransform: "capitalize",
            }}
          >
            After studying the top clinics, we removed every bottleneck between
            a patient and a booked consultation.{" "}
            <span style={{ color: "#CB8530" }}>
              We don&apos;t work with everyone.
            </span>{" "}
            Only clinics serious about growth.
          </p>


        </div>

        {/*
          ══ RIGHT PANEL — IMAGE ══════════════════════════════════════════════
          Full-bleed, no border-radius, no padding, no gap.
          Image fills the entire right half of the viewport height.
          This is the key move from the reference — the image panel is a hard
          rectangle that sits flush against the text panel with zero separation.
        */}
       <div
  className="w-full lg:w-1/2 relative min-h-[50vh] md:min-h-[45vh] lg:min-h-[50vh]"
  aria-hidden="true"
>
          <Image
            src="/org-peep2.jpg"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top"
            priority={false}
          />

          {/*
            Subtle left-edge vignette — softens the hard join between
            the text panel and the image just enough. Not a heavy blend,
            just a whisper of depth. Matches the reference's soft transition.
          */}
          <div
            className="absolute inset-y-0 left-0 w-16 pointer-events-none"
            style={{
              // background: "linear-gradient(to right, var(--muted), transparent)",s
            }}
          />
        </div>

      </div>
    </section>
  );
}

// "use client";

// import { useEffect, useRef } from "react";
// import Image from "next/image";

// export function TrustParagraph() {
//   const titleRef = useRef<HTMLParagraphElement>(null);

//   // ─── GSAP Animation — DO NOT MODIFY ──────────────────────────────────────
//   useEffect(() => {
//     const init = async () => {
//       const { gsap } = await import("gsap");
//       const { ScrollTrigger } = await import("gsap/ScrollTrigger");
//       const { SplitText } = await import("gsap/SplitText");

//       gsap.registerPlugin(ScrollTrigger, SplitText);

//       const el = titleRef.current;
//       if (!el) return;

//       const split = new SplitText(el, { type: "words,chars" });

//       gsap.from(split.chars, {
//         duration: 0.8,
//         opacity: 0,
//         y: 10,
//         ease: "circ.out",
//         stagger: 0.02,
//         scrollTrigger: {
//           trigger: el,
//           start: "top 85%",
//           end: "top 20%",
//           scrub: 0.5,
//         },
//         onComplete: () => split.revert(),
//       });
//     };

//     init();

//     return () => {
//       import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
//         ScrollTrigger.getAll().forEach((t) => t.kill());
//       });
//     };
//   }, []);
//   // ─────────────────────────────────────────────────────────────────────────

//   return (
//     <section className="relative overflow-hidden bg-muted/50">

//       {/*
//         ── OUTER CONTAINER ──────────────────────────────────────────────────
//         Constrained max-width with generous asymmetric padding.
//         Vertical padding is generous — the section breathes.
//       */}
//       <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-20 xl:px-28 py-24 sm:py-28 lg:py-36">

//         {/*
//           ── GRID ────────────────────────────────────────────────────────────
//           Two-column editorial layout on large screens.
//           Text column is wider (~55%); image column is tighter (~38%).
//           A natural gap provides breathing room between them.
//         */}
//         <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20 xl:gap-28">

//           {/* ── LEFT: TEXT COLUMN ────────────────────────────────────────── */}
//           <div className="flex-1 min-w-0">

//             {/*
//               Eyebrow label + thin rule.
//               The rule is the signature editorial detail — quiet, intentional.
//             */}
//             <div className="flex items-center gap-4 mb-10 sm:mb-12">
//               <div
//                 className="h-px flex-shrink-0 w-10"
//                 style={{ backgroundColor: "#CB8530", opacity: 0.7 }}
//                 aria-hidden="true"
//               />
//               <span
//                 className="text-[11px] uppercase tracking-[0.2em] font-medium"
//                 style={{
//                   fontFamily: "'Plus Jakarta Sans', sans-serif",
//                   color: "#CB8530",
//                   opacity: 0.85,
//                 }}
//               >
//                 Our Approach
//               </span>
//             </div>

//             {/*
//               Main animated paragraph.
//               Tight leading, deliberate tracking for a luxury text-block feel.
//               Max-width constrains the measure to ~65ch — optimal for readability.
//             */}
//             <p
//               ref={titleRef}
//               className="max-w-[640px]"
//               style={{
//                 fontFamily: "'Plus Jakarta Sans', sans-serif",
//                 fontSize: "clamp(19px, 2.1vw, 32px)",
//                 lineHeight: "clamp(30px, 3.2vw, 50px)",
//                 letterSpacing: "-0.01em",
//                 color: "rgba(240, 239, 231, 0.55)",
//                 fontStyle: "italic",
//                 fontWeight: 600,
//                 textAlign: "left",
//               }}
//             >
//               After studying how the top aesthetic clinics in the world acquire
//               patients, we built a system that removes every bottleneck between
//               a potential patient and a booked consultation.{" "}
//               <span
//                 style={{
//                   color: "#CB8530",
//                   fontWeight: 700,
//                   fontStyle: "italic",
//                 }}
//               >
//                 We don&apos;t work with everyone.
//               </span>{" "}
//               We work exclusively with clinics serious about predictable growth.
//             </p>

//           </div>

//           {/* ── RIGHT: IMAGE COLUMN ──────────────────────────────────────── */}
//           {/*
//             Intentionally contained frame — no bleeding, no gradient hack.
//             The image sits in a fixed-aspect box with a slightly asymmetric
//             border-radius (tighter on the left, softer on the right) to create
//             a subtle sense of craft. Hidden on mobile/tablet; shows lg+.
//           */}
//           <div
//             className="hidden lg:block flex-shrink-0"
//             style={{
//               width: "clamp(260px, 32vw, 460px)",
//             }}
//             aria-hidden="true"
//           >
//             <div
//               className="relative w-full overflow-hidden"
//               style={{
//                 aspectRatio: "3 / 4",
//                 borderRadius: "4px 20px 20px 4px",
//               }}
//             >
//               <Image
//                 src="/org-peep.jpg"
//                 alt=""
//                 fill
//                 sizes="(max-width: 1440px) 32vw, 460px"
//                 className="object-cover object-top"
//                 priority={false}
//               />

//               {/*
//                 Subtle inner shadow on the bottom edge —
//                 keeps the image from feeling cut off.
//               */}
//               <div
//                 className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
//                 style={{
//                   background:
//                     "linear-gradient(to top, rgba(0,0,0,0.25), transparent)",
//                 }}
//                 aria-hidden="true"
//               />
//             </div>
//           </div>

//         </div>
//       </div>

//     </section>
//   );
// }



