import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { TrustParagraph } from "@/components/sections/TrustParagraph";
import { MechanismSection } from "@/components/sections/MechanismSection";
import { OfferStackSection } from "@/components/sections/OfferStackSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <ProblemSection />
        <TrustParagraph />
        <MechanismSection />
        <ProcessSection />
        <OfferStackSection />
        <GuaranteeSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}


// -------------CHROME-----------------

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
//     <div className="min-h-screen overflow-x-hidden">
//       <Header />
//       <main>
//         <HeroSection />
//         <ProblemSection />
//         <TrustParagraph />
//         <MechanismSection />
//         <OfferStackSection />
//         <ProcessSection />
//         <GuaranteeSection />
//         <FinalCTASection />
//       </main>
//       <Footer />
//     </div>
//   );
// }