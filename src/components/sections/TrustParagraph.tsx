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

"use client";

export function TrustParagraph() {
  return (
    <section className="py-14 sm:py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-base sm:text-lg leading-relaxed text-muted-foreground"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            After studying how the top aesthetic clinics in the world acquire patients, we built a system
            that removes every bottleneck between a potential patient and a booked consultation.{" "}
            <span className="text-foreground font-medium">We don&apos;t work with everyone.</span>{" "}
            We work exclusively with clinics serious about predictable growth.
          </p>
        </div>
      </div>
    </section>
  );
}