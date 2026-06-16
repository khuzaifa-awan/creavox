// import { ArrowRight, Calendar, Clock, Shield } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/Card";

// const trustPoints = [
//   {
//     icon: Clock,
//     title: "15-Minute Call",
//     description: "Quick clinic audit",
//   },
//   {
//     icon: Shield,
//     title: "No Commitment",
//     description: "No hard sell",
//   },
//   {
//     icon: Calendar,
//     title: "Reschedule Anytime",
//     description: "Flexible scheduling",
//   },
// ];

// export function FinalCTASection() {
//   return (
//     <section
//       aria-label="Book your free strategy session"
//       className="py-20 md:py-28 relative overflow-hidden"
//     >
//       {/* Background pulse */}
//       <div
//         className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 animate-pulse pointer-events-none"
//         style={{ animationDuration: "4s" }}
//         aria-hidden="true"
//       />

//       <div className="container mx-auto px-4 relative">
//         <div className="max-w-4xl mx-auto">

//           {/* Heading */}
//           <div className="text-center mb-10 md:mb-12">
//             <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6">
//               We Only Take 3 New Clinic Partners Per Month.{" "}
//               <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
//                 One Spot May Still Be Available.
//               </span>
//             </h2>
//             <p
//               className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
//               style={{ fontFamily: "var(--font-poppins), sans-serif" }}
//             >
//               Due to the hands-on nature of our work, new partnerships are
//               limited. This isn't a sales call — it's a free 15-minute clinic
//               audit. You'll leave with actionable insights, regardless.
//             </p>
//           </div>

//           {/* Card */}
//           <Card className="border-2 border-primary/30">
//             <CardContent className="p-6 md:p-8 lg:p-12">

//               {/* Trust Points */}
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8">
//                 {trustPoints.map((point) => (
//                   <div
//                     key={point.title}
//                     className="flex items-start gap-3"
//                   >
//                     <point.icon
//                       className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
//                       aria-hidden="true"
//                     />
//                     <div>
//                       <p className="font-medium text-sm text-foreground">
//                         {point.title}
//                       </p>
//                       <p className="text-xs text-muted-foreground">
//                         {point.description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* CTA */}
//               <div className="text-center">
//                 <button className="btn-primary w-full sm:w-auto text-base md:text-lg px-8 md:px-12 py-4 md:py-5">
//                   Book My Free Strategy Session
//                   <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
//                 </button>
//                 <p className="text-xs text-muted-foreground mt-4">
//                   We only work with clinics ready to scale
//                 </p>
//               </div>

//             </CardContent>
//           </Card>

//         </div>
//       </div>
//     </section>
//   );
// }





// -------safari----------


// "use client";
// import { Card, CardContent } from "@/components/ui/Card";
// import { ArrowRight, Calendar, Clock, Shield } from "lucide-react";

// export function FinalCTASection() {
//   return (
//     <section className="py-16 sm:py-24 relative overflow-hidden">
//       <div
//         className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 animate-pulse pointer-events-none"
//         style={{ animationDuration: "4s" }}
//         aria-hidden="true"
//       />

//       <div className="container mx-auto px-4 relative">
//         <div className="max-w-4xl mx-auto">

//           <div className="text-center mb-10 sm:mb-12">
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6 px-2 sm:px-0">
//               We Only Take 3 New Clinic Partners Per Month.{" "}
//               <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
//                 One Spot May Still Be Available.
//               </span>
//             </h2>
//             <p
//               className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0"
//               style={{ fontFamily: "'Poppins', sans-serif" }}
//             >
//               Due to the hands-on nature of our work, new partnerships are limited. This isn&apos;t a sales call —
//               it&apos;s a free 15-minute clinic audit. You&apos;ll leave with actionable insights, regardless.
//             </p>
//           </div>

//           <Card className="border-2 border-primary/30">
//             <CardContent className="p-6 sm:p-8 md:p-12">

//               {/* 3 trust signals */}
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
//                 {[
//                   { icon: Clock, title: "15-Minute Call", sub: "Quick clinic audit" },
//                   { icon: Shield, title: "No Commitment", sub: "No hard sell" },
//                   { icon: Calendar, title: "Reschedule Anytime", sub: "Flexible scheduling" },
//                 ].map(({ icon: Icon, title, sub }) => (
//                   <div key={title} className="flex items-start space-x-3">
//                     <Icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
//                     <div>
//                       <p className="font-medium text-sm">{title}</p>
//                       <p className="text-xs text-muted-foreground">{sub}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="text-center">
//                 <button
//                   className="btn-primary w-full sm:w-auto text-base sm:text-lg inline-flex items-center justify-center gap-2"
//                   style={{ padding: "16px 40px sm:48px", borderRadius: "8px" }}
//                 >
//                   Book My Free Strategy Session
//                   <ArrowRight className="h-5 w-5" aria-hidden="true" />
//                 </button>
//                 <p className="text-xs text-muted-foreground mt-4">
//                   We only work with clinics ready to scale
//                 </p>
//               </div>
//             </CardContent>
//           </Card>

//         </div>
//       </div>
//     </section>
//   );
// }

// -------New CTA----------

// "use client";

// export function FinalCTASection() {
//   return (
//     <section className="py-16 sm:py-24 overflow-hidden">
//       <div
//         className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 animate-pulse pointer-events-none"
//         style={{ animationDuration: "4s" }}
//         aria-hidden="true"
//       />

//       <div className="container mx-auto px-4 relative">
//         <div className="max-w-4xl mx-auto">

//           {/* Card */}
//           <div
//            style={{
//                 backgroundColor: "#13161c",
//                 border: "1px solid rgba(203,133,48,0.2)",
//                 borderRadius: "24px",
//                 padding: "clamp(40px, 6vw, 80px) clamp(24px, 5vw, 64px)",
//                 textAlign: "center",
//                 boxShadow: "inset 0 80px 60px -40px rgba(203,133,48,0.08)",
//                 }}
//           >
//             {/* Headline */}
//             <h2
//               style={{
//                 fontSize: "clamp(2rem, 5vw, 3.5rem)",
//                 fontWeight: 700,
//                 color: "#F0EFE7",
//                 lineHeight: 1.15,
//                 marginBottom: "24px",
//                 fontFamily: "'Poppins', sans-serif",
//               }}
//             >
//               Let&apos;s talk
//             </h2>

//             {/* Subheadline */}
//             <p
//               style={{
//                 fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
//                 color: "rgba(240,239,231,0.55)",
//                 lineHeight: 1.6,
//                 maxWidth: "560px",
//                 margin: "0 auto 48px",
//                 fontFamily: "'Poppins', sans-serif",
//               }}
//             >
//               Tell us what&apos;s not working. We&apos;ll tell you if we can help — honestly and quickly.
//             </p>

//             {/* Form fields */}
//             <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "640px", margin: "0 auto" }}>

//               {/* First + Last name row */}
//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
//                 <div style={{ textAlign: "left" }}>
//                   <label style={{ display: "block", fontSize: "14px", fontWeight: 500, color: "#F0EFE7", marginBottom: "10px", fontFamily: "'Poppins', sans-serif" }}>
//                     First name
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Jane"
//                     style={{
//                       width: "100%",
//                       backgroundColor: "#0b0d11",
//                       border: "1px solid rgba(255,255,255,0.1)",
//                       borderRadius: "10px",
//                       padding: "14px 16px",
//                       fontSize: "15px",
//                       color: "#F0EFE7",
//                       fontFamily: "'Poppins', sans-serif",
//                       outline: "none",
//                       boxSizing: "border-box",
//                     }}
//                     onFocus={(e) => e.currentTarget.style.borderColor = "rgba(203,133,48,0.6)"}
//                     onBlur={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
//                   />
//                 </div>
//                 <div style={{ textAlign: "left" }}>
//                   <label style={{ display: "block", fontSize: "14px", fontWeight: 500, color: "#F0EFE7", marginBottom: "10px", fontFamily: "'Poppins', sans-serif" }}>
//                     Last name
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Smith"
//                     style={{
//                       width: "100%",
//                       backgroundColor: "#0b0d11",
//                       border: "1px solid rgba(255,255,255,0.1)",
//                       borderRadius: "10px",
//                       padding: "14px 16px",
//                       fontSize: "15px",
//                       color: "#F0EFE7",
//                       fontFamily: "'Poppins', sans-serif",
//                       outline: "none",
//                       boxSizing: "border-box",
//                     }}
//                     onFocus={(e) => e.currentTarget.style.borderColor = "rgba(203,133,48,0.6)"}
//                     onBlur={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
//                   />
//                 </div>
//               </div>

//               {/* Email */}
//               <div style={{ textAlign: "left" }}>
//                 <label style={{ display: "block", fontSize: "14px", fontWeight: 500, color: "#F0EFE7", marginBottom: "10px", fontFamily: "'Poppins', sans-serif" }}>
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="you@company.com"
//                   style={{
//                     width: "100%",
//                     backgroundColor: "#0b0d11",
//                     border: "1px solid rgba(255,255,255,0.1)",
//                     borderRadius: "10px",
//                     padding: "14px 16px",
//                     fontSize: "15px",
//                     color: "#F0EFE7",
//                     fontFamily: "'Poppins', sans-serif",
//                     outline: "none",
//                     boxSizing: "border-box",
//                   }}
//                   onFocus={(e) => e.currentTarget.style.borderColor = "rgba(203,133,48,0.6)"}
//                   onBlur={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
//                 />
//               </div>

//               {/* Message */}
//               <div style={{ textAlign: "left" }}>
//                 <label style={{ display: "block", fontSize: "14px", fontWeight: 500, color: "#F0EFE7", marginBottom: "10px", fontFamily: "'Poppins', sans-serif" }}>
//                   Message
//                 </label>
//                 <textarea
//                   placeholder="Tell us about your problem..."
//                   rows={5}
//                   style={{
//                     width: "100%",
//                     backgroundColor: "#0b0d11",
//                     border: "1px solid rgba(255,255,255,0.1)",
//                     borderRadius: "10px",
//                     padding: "14px 16px",
//                     fontSize: "15px",
//                     color: "#F0EFE7",
//                     fontFamily: "'Poppins', sans-serif",
//                     outline: "none",
//                     resize: "vertical",
//                     boxSizing: "border-box",
//                   }}
//                   onFocus={(e) => e.currentTarget.style.borderColor = "rgba(203,133,48,0.6)"}
//                   onBlur={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
//                 />
//               </div>

//               {/* Submit button + fine print */}
//               <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
//                 <button
//                   className="btn-primary"
//                   style={{
//                     padding: "16px 48px",
//                     fontSize: "16px",
//                     borderRadius: "999px",
//                     width: "100%",
//                     maxWidth: "280px",
//                   }}
//                 >
//                   Send message
//                 </button>
//                 <p style={{ fontSize: "12px", color: "rgba(240,239,231,0.35)", margin: 0, fontFamily: "'Poppins', sans-serif" }}>
//                   Quick clinic audit. We only work with clinics ready to scale.
//                 </p>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";

export function FinalCTASection() {
  const [showPopup, setShowPopup] = useState(false);

  // Show popup after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 19000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setShowPopup(false);

  return (
    <>
      {/* ── Inline section (existing, before footer) ── */}
      <section className="py-16 sm:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 animate-pulse pointer-events-none"
          style={{ animationDuration: "4s" }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <CTACard />
          </div>
        </div>
      </section>

      {/* ── Popup Modal ── */}
      {showPopup && (
        <>
          {/* Backdrop */}
          <div
            onClick={closePopup}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.7)",
              zIndex: 9998,
              backdropFilter: "blur(4px)",
            }}
          />

          {/* Modal */}
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 9999,
              width: "min(680px, 92vw)",
              maxHeight: "90vh",
              overflowY: "auto",
              backgroundColor: "#13161c",
              border: "1px solid rgba(203,133,48,0.2)",
              borderRadius: "24px",
              padding: "clamp(32px, 5vw, 64px) clamp(20px, 4vw, 56px)",
              boxShadow:
                "0 32px 80px rgba(0,0,0,0.6), inset 0 80px 60px -40px rgba(203,133,48,0.08)",
            }}
          >
            {/* Close button */}
            <button
              onClick={closePopup}
              aria-label="Close"
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.1)",
                backgroundColor: "transparent",
                color: "rgba(240,239,231,0.5)",
                fontSize: "18px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: 1,
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(203,133,48,0.6)";
                e.currentTarget.style.color = "#CB8530";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.color = "rgba(240,239,231,0.5)";
              }}
            >
              ✕
            </button>

            <CTACard />
          </div>
        </>
      )}
    </>
  );
}

// ── Shared card content — used in both inline section and popup ──
function CTACard() {
  return (
    <div style={{ textAlign: "center" }}>
      {/* Headline */}
      <h2
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 700,
          color: "#F0EFE7",
          lineHeight: 1.15,
          marginBottom: "24px",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Let&apos;s talk
      </h2>

      {/* Subheadline */}
      <p
        style={{
          fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
          color: "rgba(240,239,231,0.55)",
          lineHeight: 1.6,
          maxWidth: "560px",
          margin: "0 auto 48px",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Tell us what&apos;s not working. We&apos;ll tell you if we can help —
        honestly and quickly.
      </p>

      {/* Form fields */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          maxWidth: "640px",
          margin: "0 auto",
        }}
      >
        {/* First + Last name row */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
        >
          <div style={{ textAlign: "left" }}>
            <label style={labelStyle}>First name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              style={inputStyle}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "rgba(203,133,48,0.6)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")
              }
            />
          </div>
          <div style={{ textAlign: "left" }}>
            <label style={labelStyle}>Last name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              style={inputStyle}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "rgba(203,133,48,0.6)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")
              }
            />
          </div>
        </div>

        {/* Email */}
        <div style={{ textAlign: "left" }}>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            placeholder="you@company.com"
            style={inputStyle}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor = "rgba(203,133,48,0.6)")
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")
            }
          />
        </div>

        {/* Message */}
        <div style={{ textAlign: "left" }}>
          <label style={labelStyle}>Message</label>
          <textarea
            placeholder="Tell us about your problem..."
            rows={5}
            style={{ ...inputStyle, resize: "vertical" }}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor = "rgba(203,133,48,0.6)")
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")
            }
          />
        </div>

        {/* Submit */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <button
            className="btn-primary"
            style={{
              padding: "16px 48px",
              fontSize: "16px",
              borderRadius: "999px",
              width: "100%",
              maxWidth: "280px",
            }}
          >
            Send message
          </button>
          <p
            style={{
              fontSize: "12px",
              color: "rgba(240,239,231,0.35)",
              margin: 0,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Quick clinic audit. We only work with clinics ready to scale.
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Shared styles ─────────────────────────────────────────────────────────────
const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "14px",
  fontWeight: 500,
  color: "#F0EFE7",
  marginBottom: "10px",
  fontFamily: "'Poppins', sans-serif",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "#0b0d11",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "10px",
  padding: "14px 16px",
  fontSize: "15px",
  color: "#F0EFE7",
  fontFamily: "'Poppins', sans-serif",
  outline: "none",
  boxSizing: "border-box",
};