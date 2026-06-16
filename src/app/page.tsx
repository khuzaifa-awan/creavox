// import { Header } from "@/components/layout/Header";
// import { Footer } from "@/components/layout/Footer";
// import { HeroSection } from "@/components/sections/HeroSection";
// import { ProblemSection } from "@/components/sections/ProblemSection";
// import { TrustParagraph } from "@/components/sections/TrustParagraph";
// import { MechanismSection } from "@/components/sections/MechanismSection";
// import { OfferStackSection } from "@/components/sections/OfferStackSection";
// import { ProcessSection } from "@/components/sections/ProcessSection";
// import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
// import { FinalCTASection } from "@/components/sections/FinalCTASection";

// export default function HomePage() {
//   return (
//     <>
//       <Header />
//       <main id="main-content">
//         <HeroSection />
//         <ProblemSection />
//         <TrustParagraph />
//         <MechanismSection />
//         <ProcessSection />
//         <OfferStackSection />
//         <GuaranteeSection />
//         <FinalCTASection />
//       </main>
//       <Footer />
//     </>
//   );
// }

"use client";
import { useState } from "react";
import { IntroAnimation } from "@/components/sections/IntroAnimation";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { TrustParagraph } from "@/components/sections/TrustParagraph";
import { MechanismSection } from "@/components/sections/MechanismSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { OfferStackSection } from "@/components/sections/OfferStackSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {!introComplete && (
        <IntroAnimation onComplete={() => setIntroComplete(true)} />
      )}
      <div
        style={{
          opacity: introComplete ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        <Header />
        <main id="main-content">
          <HeroSection/>
          <ProblemSection />
          <TrustParagraph />
          <MechanismSection />
          <ProcessSection />
          <OfferStackSection />
          <GuaranteeSection />
          <FinalCTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}