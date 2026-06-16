import Script from "next/script";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Book a Free Strategy Session",
  description:
    "Book your free 15-minute clinic growth audit with Creavox Media. No commitment, no hard sell.",
};

export default function BookPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-start px-4 py-16 md:py-24">

        {/* Heading */}
        <div className="text-center mb-10 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary mb-4 font-medium">
            Free Strategy Session
          </p>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#F0EFE7] leading-tight mb-4"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Book Your Free{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Clinic Growth Audit
            </span>
          </h1>
          <p
            className="text-base md:text-lg text-muted-foreground"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            15 minutes. No commitment. No hard sell. You'll leave with
            actionable insights regardless.
          </p>
        </div>

        {/* Trust points */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {[
            "✓ 15-Minute Call",
            "✓ No Commitment",
            "✓ Reschedule Anytime",
          ].map((point) => (
            <span
              key={point}
              className="text-sm font-medium text-primary"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              {point}
            </span>
          ))}
        </div>

        {/* Calendly Embed */}
        <div className="w-full max-w-4xl rounded-2xl overflow-hidden border border-border">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/creavoxm/30min?text_color=000000&primary_color=cb8530"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>

        <p className="mt-6 text-xs text-muted-foreground/50 text-center">
          We only work with clinics ready to scale. 3 spots available per month.
        </p>

      </main>

      <Footer />

      {/* Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
}