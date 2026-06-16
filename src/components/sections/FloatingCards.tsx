// -------------safari------------

// "use client";
// import { useEffect, useRef } from "react";
// import type { CSSProperties } from "react";

// export function FloatingCards() {
//   const sceneRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const scene = sceneRef.current;
//     if (!scene) return;
//     const cards = scene.querySelectorAll<HTMLElement>(".floating-card");
//     let animationId: number;

//     const animateCards = () => {
//       const time = Date.now() * 0.001;
//       cards.forEach((card, index) => {
//         const offset = index * 0.5;
//         const x = Math.sin(time * 0.3 + offset) * 20;
//         const y = Math.cos(time * 0.3 + offset * 1.2) * 12;
//         const rotateX = Math.sin(time * 0.6 + offset) * 5;
//         const rotateY = Math.cos(time * 0.5 + offset * 0.8) * 8;
//         card.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//       });
//       animationId = requestAnimationFrame(animateCards);
//     };

//     animateCards();
//     return () => cancelAnimationFrame(animationId);
//   }, []);

//   const cardBase: CSSProperties = {
//     background: "#1e1f26",
//     border: "1px solid rgba(203,133,48,0.25)",
//     borderRadius: "14px",
//     padding: "14px",
//     boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
//     transformStyle: "preserve-3d",
//     willChange: "transform",
//     transition: "transform 0.1s ease-out",
//     position: "absolute",
//   };

//   return (
//     <div
//       ref={sceneRef}
//       className="relative w-full h-full"
//       style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
//       aria-hidden="true"
//       role="presentation"
//     >
//       {/* Central Hub */}
//       <div
//         className="absolute left-1/2 top-1/2 z-10"
//         style={{
//           transform: "translate(-50%, -50%)",
//           width: "72px",
//           height: "72px",
//           borderRadius: "20px",
//           background: "linear-gradient(135deg, #cb8530, #e8a84a)",
//           boxShadow: "0 0 40px rgba(203,133,48,0.4)",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
//           <circle cx="16" cy="16" r="6" fill="white" opacity="0.9" />
//           <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="1.5" opacity="0.4" />
//           <circle cx="16" cy="16" r="15" stroke="white" strokeWidth="0.5" opacity="0.2" />
//         </svg>
//       </div>

//       {/* Connecting Lines */}
//       <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.1 }}>
//         <defs>
//           <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#cb8530" stopOpacity="0.1" />
//             <stop offset="50%" stopColor="#cb8530" stopOpacity="0.5" />
//             <stop offset="100%" stopColor="#cb8530" stopOpacity="0.1" />
//           </linearGradient>
//         </defs>
//         <line x1="50%" y1="50%" x2="28%" y2="26%" stroke="url(#lg1)" strokeWidth="1" />
//         <line x1="50%" y1="50%" x2="72%" y2="24%" stroke="url(#lg1)" strokeWidth="1" />
//         <line x1="50%" y1="50%" x2="28%" y2="70%" stroke="url(#lg1)" strokeWidth="1" />
//         <line x1="50%" y1="50%" x2="72%" y2="70%" stroke="url(#lg1)" strokeWidth="1" />
//         <line x1="50%" y1="50%" x2="42%" y2="66%" stroke="url(#lg1)" strokeWidth="1" />
//       </svg>

//       {/* Particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {Array.from({ length: 16 }).map((_, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full animate-pulse"
//             style={{
//               width: i % 3 === 0 ? "3px" : "2px",
//               height: i % 3 === 0 ? "3px" : "2px",
//               background: "rgba(203,133,48,0.3)",
//               left: `${10 + (i * 17) % 80}%`,
//               top: `${5 + (i * 23) % 90}%`,
//               animationDelay: `${i * 0.3}s`,
//               animationDuration: `${2 + (i % 3)}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Card 1 — Full-Stack Growth (top-left) */}
//       <div className="floating-card" style={{
//         top: '4%', left: '1%',
//         width: 'clamp(100px, 22vw, 168px)',
//         background: '#1e1f26',
//         border: '1px solid rgba(203,133,48,0.25)',
//         borderRadius: '14px',
//         padding: '14px',
//         boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
//         transformStyle: 'preserve-3d',
//         willChange: 'transform',
//         transition: 'transform 0.1s ease-out',
//       }}>
//         <div style={{ fontSize: "9px", letterSpacing: "0.14em", color: "#cb8530", textTransform: "uppercase", marginBottom: "8px", fontWeight: 600 }}>YOU GET</div>
//         <div style={{ fontSize: "12px", fontWeight: 600, color: "#F0EFE7", marginBottom: "10px" }}>Full-Stack Growth</div>
//         <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
//           {["Meta Ads", "Google Ads", "AI Automation", "Web Dev"].map((s) => (
//             <span key={s} style={{ fontSize: "9px", fontWeight: 500, background: "rgba(203,133,48,0.12)", color: "#cb8530", border: "1px solid rgba(203,133,48,0.25)", borderRadius: "999px", padding: "2px 7px" }}>{s}</span>
//           ))}
//         </div>
//         <div style={{ marginTop: "10px", display: "flex", gap: "3px", alignItems: "flex-end", height: "24px" }}>
//           {[60, 85, 45, 100, 70].map((h, i) => (
//             <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 3 ? "#cb8530" : "rgba(203,133,48,0.25)", borderRadius: "3px 3px 0 0" }} />
//           ))}
//         </div>
//       </div>

//       {/* Card 2 — AI Follow-Up (top-right) */}
//       <div className="floating-card" 
//       style={{
//         top: '2%', right: '1%',
//         width: 'clamp(100px, 22vw, 160px)',
//         background: '#1e1f26',
//         border: '1px solid rgba(203,133,48,0.25)',
//         borderRadius: '14px',
//         padding: '14px',
//         boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
//         transformStyle: 'preserve-3d',
//         willChange: 'transform',
//         transition: 'transform 0.1s ease-out',
//       }}>
//         <div style={{ fontSize: "9px", letterSpacing: "0.14em", color: "#cb8530", textTransform: "uppercase", marginBottom: "8px", fontWeight: 600 }}>AI Follow-Up</div>
//         <div style={{ fontSize: "12px", fontWeight: 600, color: "#F0EFE7", marginBottom: "10px" }}>Responds in seconds</div>
//         <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
//           {[{ side: "end", w: "70px" }, { side: "start", w: "55px" }, { side: "end", w: "45px" }].map(({ side, w }, i) => (
//             <div key={i} style={{ alignSelf: `flex-${side}`, background: side === "end" ? "rgba(203,133,48,0.15)" : "rgba(240,239,231,0.06)", border: `1px solid ${side === "end" ? "rgba(203,133,48,0.3)" : "rgba(240,239,231,0.1)"}`, borderRadius: side === "end" ? "8px 8px 2px 8px" : "8px 8px 8px 2px", padding: "5px 8px" }}>
//               <div style={{ width: w, height: "6px", background: side === "end" ? "rgba(203,133,48,0.5)" : "rgba(240,239,231,0.25)", borderRadius: "3px" }} />
//             </div>
//           ))}
//         </div>
//         <div style={{ marginTop: "8px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//           <span style={{ fontSize: "9px", color: "rgba(240,239,231,0.45)" }}>Response rate</span>
//           <span style={{ fontSize: "11px", fontWeight: 700, color: "#cb8530" }}>97%</span>
//         </div>
//       </div>

//       {/* Card 3 — Patient Pipeline (bottom-left) */}
//       <div className="floating-card" 
//       style={{
//         bottom: '8%', left: '1%',
//         width: 'clamp(100px, 22vw, 172px)',
//         background: '#1e1f26',
//         border: '1px solid rgba(203,133,48,0.25)',
//         borderRadius: '14px',
//         padding: '14px',
//         boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
//         transformStyle: 'preserve-3d',
//         willChange: 'transform',
//         transition: 'transform 0.1s ease-out',
//       }}>
//         <div style={{ fontSize: "9px", letterSpacing: "0.14em", color: "#cb8530", textTransform: "uppercase", marginBottom: "8px", fontWeight: 600 }}>What We Build</div>
//         <div style={{ fontSize: "12px", fontWeight: 600, color: "#F0EFE7", marginBottom: "10px" }}>Patient Pipeline</div>
//         {["Ad Campaign", "Landing Page", "Lead Capture", "Booked Call"].map((step, i) => (
//           <div key={step} style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: i < 3 ? "4px" : "0" }}>
//             <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: i === 3 ? "#cb8530" : "rgba(203,133,48,0.15)", border: `1px solid ${i === 3 ? "#cb8530" : "rgba(203,133,48,0.3)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//               {i === 3 ? (
//                 <svg width="8" height="8" viewBox="0 0 8 8"><path d="M1.5 4L3.5 6L6.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>
//               ) : (
//                 <span style={{ fontSize: "7px", color: "#cb8530", fontWeight: 700 }}>{i + 1}</span>
//               )}
//             </div>
//             <span style={{ fontSize: "9px", color: i === 3 ? "#F0EFE7" : "rgba(240,239,231,0.5)" }}>{step}</span>
//           </div>
//         ))}
//       </div>

//       {/* Card 4 — Ad Performance (bottom-right) */}
//       <div className="floating-card" style={{
//   bottom: '6%', right: '1%',
//   width: 'clamp(100px, 22vw, 160px)',
//   background: '#1e1f26',
//   border: '1px solid rgba(203,133,48,0.25)',
//   borderRadius: '14px',
//   padding: '14px',
//   boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
//   transformStyle: 'preserve-3d',
//   willChange: 'transform',
//   transition: 'transform 0.1s ease-out',
// }}>
//         <div style={{ fontSize: "9px", letterSpacing: "0.14em", color: "#cb8530", textTransform: "uppercase", marginBottom: "8px", fontWeight: 600 }}>Ad Performance</div>
//         <div style={{ fontSize: "12px", fontWeight: 600, color: "#F0EFE7", marginBottom: "2px" }}>Meta Campaign</div>
//         <div style={{ fontSize: "9px", color: "rgba(240,239,231,0.4)", marginBottom: "10px" }}>↑ 34%</div>
//         <svg width="100%" height="32" viewBox="0 0 130 32" preserveAspectRatio="none">
//           <polyline points="0,28 20,22 40,24 60,14 80,16 100,8 130,4" fill="none" stroke="rgba(203,133,48,0.4)" strokeWidth="1.5" />
//           <polyline points="0,28 20,22 40,24 60,14 80,16 100,8 130,4 130,32 0,32" fill="rgba(203,133,48,0.08)" />
//           <circle cx="130" cy="4" r="3" fill="#cb8530" />
//         </svg>
//         <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
//           <div>
//             <div style={{ fontSize: "13px", fontWeight: 700, color: "#cb8530" }}>$24</div>
//             <div style={{ fontSize: "8px", color: "rgba(240,239,231,0.4)" }}>Cost/Lead</div>
//           </div>
//           <div style={{ textAlign: "right" }}>
//             <div style={{ fontSize: "13px", fontWeight: 700, color: "#F0EFE7" }}>312</div>
//             <div style={{ fontSize: "8px", color: "rgba(240,239,231,0.4)" }}>Quality Leads</div>
//           </div>
//         </div>
//       </div>

//       {/* Card 5 — Built For Clinics (bottom-center) */}
//       <div className="floating-card" style={{
//   top: '65%', left: '36%',
//   width: 'clamp(100px, 22vw, 152px)',
//   background: '#1e1f26',
//   border: '1px solid rgba(203,133,48,0.25)',
//   borderRadius: '14px',
//   padding: '14px',
//   boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
//   transformStyle: 'preserve-3d',
//   willChange: 'transform',
//   transition: 'transform 0.1s ease-out',
// }}>
//         <div style={{ fontSize: "9px", letterSpacing: "0.14em", color: "#cb8530", textTransform: "uppercase", marginBottom: "8px", fontWeight: 600 }}>BUILT FOR</div>
//         <div style={{ fontSize: "12px", fontWeight: 600, color: "#F0EFE7", marginBottom: "10px" }}>CLINICS</div>
//         <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
//           {[{ icon: "◈", label: "Med Spas" }, { icon: "◈", label: "Cosmetic Clinic" }, { icon: "◈", label: "Aesthetic Clinics" }].map((item) => (
//             <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "7px", background: "rgba(203,133,48,0.06)", borderRadius: "6px", padding: "5px 8px" }}>
//               <span style={{ fontSize: "8px", color: "#cb8530" }}>{item.icon}</span>
//               <span style={{ fontSize: "10px", color: "rgba(240,239,231,0.75)", fontWeight: 500 }}>{item.label}</span>
//             </div>
//           ))}
//         </div>
//         <div style={{ marginTop: "8px", textAlign: "center", background: "rgba(203,133,48,0.1)", border: "1px solid rgba(203,133,48,0.25)", borderRadius: "999px", padding: "3px 8px" }}>
//           <span style={{ fontSize: "8px", color: "#cb8530", fontWeight: 600, letterSpacing: "0.08em" }}>EXCLUSIVELY</span>
//         </div>
//       </div>
//     </div>
//   );
// }






// ----------chrome-----------

// "use client";

// import { useEffect, useRef } from "react";

// export function FloatingCards() {
//   const sceneRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const scene = sceneRef.current;
//     if (!scene) return;

//     const cards = scene.querySelectorAll<HTMLElement>(".floating-card");
//     let animationId: number;

//     const animateCards = () => {
//       const time = Date.now() * 0.001;
//       cards.forEach((card, index) => {
//         const offset = index * 0.5;
//         const x = Math.sin(time * 0.3 + offset) * 20;
//         const y = Math.cos(time * 0.3 + offset * 1.2) * 12;
//         const rotateX = Math.sin(time * 0.6 + offset) * 5;
//         const rotateY = Math.cos(time * 0.5 + offset * 0.8) * 8;
//         card.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//       });
//       animationId = requestAnimationFrame(animateCards);
//     };

//     animateCards();
//     return () => cancelAnimationFrame(animationId);
//   }, []);

//   return (
//     <div
//       ref={sceneRef}
//       aria-hidden="true"
//       className="relative w-full h-full"
//       style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
//     >
//       {/* Central Hub */}
//       <div
//         className="absolute left-1/2 top-1/2 z-10"
//         style={{
//           transform: "translate(-50%, -50%)",
//           width: "72px",
//           height: "72px",
//           borderRadius: "20px",
//           // background: "linear-gradient(135deg, #cb8530, #e8a84a)",
//           boxShadow: "0 0 40px rgba(203,133,48,0.4)",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
//           <circle cx="16" cy="16" r="6" fill="white" opacity="0.9" />
//           <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="1.5" opacity="0.4" />
//           <circle cx="16" cy="16" r="15" stroke="white" strokeWidth="0.5" opacity="0.2" />
//         </svg>
//       </div>

//       {/* Connecting Lines */}
//       <svg
//         className="absolute inset-0 w-full h-full pointer-events-none"
//         style={{ opacity: 0.1 }}
//         aria-hidden="true"
//       >
//         <defs>
//           <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#cb8530" stopOpacity="0.1" />
//             <stop offset="50%" stopColor="#cb8530" stopOpacity="0.5" />
//             <stop offset="100%" stopColor="#cb8530" stopOpacity="0.1" />
//           </linearGradient>
//         </defs>
//         <line x1="50%" y1="50%" x2="28%" y2="26%" stroke="url(#lg1)" strokeWidth="1" />
//         <line x1="50%" y1="50%" x2="72%" y2="24%" stroke="url(#lg1)" strokeWidth="1" />
//         <line x1="50%" y1="50%" x2="28%" y2="70%" stroke="url(#lg1)" strokeWidth="1" />
//         <line x1="50%" y1="50%" x2="72%" y2="70%" stroke="url(#lg1)" strokeWidth="1" />
//         <line x1="50%" y1="50%" x2="42%" y2="66%" stroke="url(#lg1)" strokeWidth="1" />
//       </svg>

//       {/* Particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
//         {[...Array(16)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full animate-pulse"
//             style={{
//               width: i % 3 === 0 ? "3px" : "2px",
//               height: i % 3 === 0 ? "3px" : "2px",
//               background: "rgba(203,133,48,0.3)",
//               left: `${10 + (i * 17) % 80}%`,
//               top: `${5 + (i * 23) % 90}%`,
//               animationDelay: `${i * 0.3}s`,
//               animationDuration: `${2 + (i % 3)}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Card 1 — Full-Stack Growth (top-left) */}
//       <div
//         className="floating-card absolute"
//         style={{
//           top: "8%", left: "4%",
//           width: "168px",
//           background: "#1e1f26",
//           border: "1px solid rgba(203,133,48,0.25)",
//           borderRadius: "14px",
//           padding: "14px",
//           boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
//           transformStyle: "preserve-3d",
//           willChange: "transform",
//           transition: "transform 0.1s ease-out",
//         }}
//       >
//         <p style={{ fontSize: "9px", letterSpacing: "0.14em", color: "#cb8530", textTransform: "uppercase", marginBottom: "8px", fontWeight: 600 }}>
//           YOU GET
//         </p>
//         <p style={{ fontSize: "12px", fontWeight: 600, color: "#F0EFE7", marginBottom: "10px" }}>
//           Full-Stack Growth
//         </p>
//         <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
//           {["Meta Ads", "Google Ads", "AI Automation", "Web Dev"].map((s) => (
//             <span key={s} style={{
//               fontSize: "9px", fontWeight: 500,
//               background: "rgba(203,133,48,0.12)",
//               color: "#cb8530",
//               border: "1px solid rgba(203,133,48,0.25)",
//               borderRadius: "999px",
//               padding: "2px 7px",
//             }}>{s}</span>
//           ))}
//         </div>
//         <div style={{ marginTop: "10px", display: "flex", gap: "3px", alignItems: "flex-end", height: "24px" }}>
//           {[60, 85, 45, 100, 70].map((h, i) => (
//             <div key={i} style={{
//               flex: 1, height: `${h}%`,
//               background: i === 3 ? "#cb8530" : "rgba(203,133,48,0.25)",
//               borderRadius: "3px 3px 0 0",
//             }} />
//           ))}
//         </div>
//       </div>

//       {/* Card 2 — AI Follow-Up (top-right) */}
//       <div
//         className="floating-card absolute"
//         style={{
//           top: "5%", right: "5%",
//           width: "160px",
//           background: "#1e1f26",
//           border: "1px solid rgba(203,133,48,0.25)",
//           borderRadius: "14px",
//           padding: "14px",
//           boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
//           transformStyle: "preserve-3d",
//           willChange: "transform",
//           transition: "transform 0.1s ease-out",
//         }}
//       >
//         <p style={{ fontSize: "9px", letterSpacing: "0.14em", color: "#cb8530", textTransform: "uppercase", marginBottom: "8px", fontWeight: 600 }}>
//           AI Follow-Up
//         </p>
//         <p style={{ fontSize: "12px", fontWeight: 600, color: "#F0EFE7", marginBottom: "10px" }}>
//           Responds in seconds
//         </p>
//         <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
//           {[
//             { align: "flex-end", width: "70px" },
//             { align: "flex-start", width: "55px" },
//             { align: "flex-end", width: "45px" },
//           ].map((bubble, i) => (
//             <div key={i} style={{
//               alignSelf: bubble.align,
//               background: i % 2 === 0 ? "rgba(203,133,48,0.15)" : "rgba(240,239,231,0.06)",
//               border: `1px solid ${i % 2 === 0 ? "rgba(203,133,48,0.3)" : "rgba(240,239,231,0.1)"}`,
//               borderRadius: i % 2 === 0 ? "8px 8px 2px 8px" : "8px 8px 8px 2px",
//               padding: "5px 8px",
//             }}>
//               <div style={{ width: bubble.width, height: "6px", background: i % 2 === 0 ? "rgba(203,133,48,0.5)" : "rgba(240,239,231,0.25)", borderRadius: "3px" }} />
//             </div>
//           ))}
//         </div>
//         <div style={{ marginTop: "8px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//           <span style={{ fontSize: "9px", color: "rgba(240,239,231,0.45)" }}>Response rate</span>
//           <span style={{ fontSize: "11px", fontWeight: 700, color: "#cb8530" }}>97%</span>
//         </div>
//       </div>

//       {/* Card 3 — Patient Pipeline (bottom-left) */}
//       <div
//         className="floating-card absolute"
//         style={{
//           bottom: "12%", left: "3%",
//           width: "172px",
//           background: "#1e1f26",
//           border: "1px solid rgba(203,133,48,0.25)",
//           borderRadius: "14px",
//           padding: "14px",
//           boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
//           transformStyle: "preserve-3d",
//           willChange: "transform",
//           transition: "transform 0.1s ease-out",
//         }}
//       >
//         <p style={{ fontSize: "9px", letterSpacing: "0.14em", color: "#cb8530", textTransform: "uppercase", marginBottom: "8px", fontWeight: 600 }}>
//           What We Build
//         </p>
//         <p style={{ fontSize: "12px", fontWeight: 600, color: "#F0EFE7", marginBottom: "10px" }}>
//           Patient Pipeline
//         </p>
//         {["Ad Campaign", "Landing Page", "Lead Capture", "Booked Call"].map((step, i) => (
//           <div key={step} style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: i < 3 ? "4px" : "0" }}>
//             <div style={{
//               width: "16px", height: "16px", borderRadius: "50%",
//               background: i === 3 ? "#cb8530" : "rgba(203,133,48,0.15)",
//               border: `1px solid ${i === 3 ? "#cb8530" : "rgba(203,133,48,0.3)"}`,
//               display: "flex", alignItems: "center", justifyContent: "center",
//               flexShrink: 0,
//             }}>
//               {i === 3
//                 ? <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true"><path d="M1.5 4L3.5 6L6.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>
//                 : <span style={{ fontSize: "7px", color: "#cb8530", fontWeight: 700 }}>{i + 1}</span>
//               }
//             </div>
//             <span style={{ fontSize: "9px", color: i === 3 ? "#F0EFE7" : "rgba(240,239,231,0.5)" }}>{step}</span>
//           </div>
//         ))}
//       </div>

//       {/* Card 4 — Ad Performance (bottom-right) */}
//       <div
//         className="floating-card absolute"
//         style={{
//           bottom: "10%", right: "4%",
//           width: "160px",
//           background: "#1e1f26",
//           border: "1px solid rgba(203,133,48,0.25)",
//           borderRadius: "14px",
//           padding: "14px",
//           boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
//           transformStyle: "preserve-3d",
//           willChange: "transform",
//           transition: "transform 0.1s ease-out",
//         }}
//       >
//         <p style={{ fontSize: "9px", letterSpacing: "0.14em", color: "#cb8530", textTransform: "uppercase", marginBottom: "8px", fontWeight: 600 }}>
//           Ad Performance
//         </p>
//         <p style={{ fontSize: "12px", fontWeight: 600, color: "#F0EFE7", marginBottom: "2px" }}>
//           Meta Campaign
//         </p>
//         <p style={{ fontSize: "9px", color: "rgba(240,239,231,0.4)", marginBottom: "10px" }}>↑ 34%</p>
//         <svg width="100%" height="32" viewBox="0 0 130 32" preserveAspectRatio="none" aria-hidden="true">
//           <polyline points="0,28 20,22 40,24 60,14 80,16 100,8 130,4" fill="none" stroke="rgba(203,133,48,0.4)" strokeWidth="1.5" />
//           <polyline points="0,28 20,22 40,24 60,14 80,16 100,8 130,4 130,32 0,32" fill="rgba(203,133,48,0.08)" />
//           <circle cx="130" cy="4" r="3" fill="#cb8530" />
//         </svg>
//         <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px" }}>
//           <div>
//             <p style={{ fontSize: "13px", fontWeight: 700, color: "#cb8530", margin: 0 }}>$24</p>
//             <p style={{ fontSize: "8px", color: "rgba(240,239,231,0.4)", margin: 0 }}>Cost/Lead</p>
//           </div>
//           <div style={{ textAlign: "right" }}>
//             <p style={{ fontSize: "13px", fontWeight: 700, color: "#F0EFE7", margin: 0 }}>312</p>
//             <p style={{ fontSize: "8px", color: "rgba(240,239,231,0.4)", margin: 0 }}>Quality Leads</p>
//           </div>
//         </div>
//       </div>

//       {/* Card 5 — Built For Clinics (bottom-center) */}
//       <div
//         className="floating-card absolute"
//         style={{
//           top: "68%", left: "30%",
//           width: "152px",
//           background: "#1e1f26",
//           border: "1px solid rgba(203,133,48,0.25)",
//           borderRadius: "14px",
//           padding: "14px",
//           boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
//           transformStyle: "preserve-3d",
//           willChange: "transform",
//           transition: "transform 0.1s ease-out",
//         }}
//       >
//         <p style={{ fontSize: "9px", letterSpacing: "0.14em", color: "#cb8530", textTransform: "uppercase", marginBottom: "8px", fontWeight: 600 }}>
//           BUILT FOR
//         </p>
//         <p style={{ fontSize: "12px", fontWeight: 600, color: "#F0EFE7", marginBottom: "10px" }}>
//           CLINICS
//         </p>
//         <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
//           {[
//             { icon: "◈", label: "Med Spas" },
//             { icon: "◈", label: "Cosmetic Clinic" },
//             { icon: "◈", label: "Aesthetic Clinics" },
//           ].map((item) => (
//             <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "7px", background: "rgba(203,133,48,0.06)", borderRadius: "6px", padding: "5px 8px" }}>
//               <span style={{ fontSize: "8px", color: "#cb8530" }}>{item.icon}</span>
//               <span style={{ fontSize: "10px", color: "rgba(240,239,231,0.75)", fontWeight: 500 }}>{item.label}</span>
//             </div>
//           ))}
//         </div>
//         <div style={{ marginTop: "8px", textAlign: "center", background: "rgba(203,133,48,0.1)", border: "1px solid rgba(203,133,48,0.25)", borderRadius: "999px", padding: "3px 8px" }}>
//           <span style={{ fontSize: "8px", color: "#cb8530", fontWeight: 600, letterSpacing: "0.08em" }}>EXCLUSIVELY</span>
//         </div>
//       </div>
//     </div>
//   );
// }



// -------------OLD PROJECT ----------------

'use client'

import { useEffect, useRef } from 'react'

export function FloatingCards() {
  const sceneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
  const scene = sceneRef.current
  if (!scene) return

  const cards = scene.querySelectorAll('.floating-card')
  let animationId: number

  const animateCards = () => {
    cards.forEach((card, index) => {
      const element = card as HTMLElement
      const time = Date.now() * 0.001
      const offset = index * 0.5

    // Smooth floating
    //   const x = Math.sin(time * 0.4 + offset) * 12
    // const y = Math.cos(time * 0.3 + offset * 1.2) * 8
    // const rotateX = Math.sin(time * 0.4 + offset) * 4
    // const rotateY = Math.cos(time * 0.3 + offset * 0.8) * 6


    // Aggresive floating
    // const x = Math.sin(time + offset) * 30
    // const y = Math.cos(time + offset * 1.2) * 20
    // const rotateX = Math.sin(time + offset) * 10
    // const rotateY = Math.cos(time + offset * 0.8) * 15



    // Combo floating
    const x = Math.sin(time * 0.3 + offset) * 20
    const y = Math.cos(time * 0.3 + offset * 1.2) * 12
    const rotateX = Math.sin(time * 0.6 + offset) * 5
    const rotateY = Math.cos(time * 0.5 + offset * 0.8) * 8

      element.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    })
    animationId = requestAnimationFrame(animateCards)
  }

  animateCards()
  return () => cancelAnimationFrame(animationId)
}, [])

  return (
    <div
    ref={sceneRef}
    className="relative w-full h-full"
    style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
    >

      {/* Central Hub */}
      <div
        className="absolute left-1/2 top-1/2 z-10"
        style={{
          transform: 'translate(-50%, -50%)',
          width: '65px',
          height: '65px',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, #cb8530, #e8a84a)',
          boxShadow: '0 0 40px rgba(203,133,48,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="6" fill="white" opacity="0.9" />
          <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="1.5" opacity="0.4" />
          <circle cx="16" cy="16" r="15" stroke="white" strokeWidth="0.5" opacity="0.2" />
        </svg>
      </div>

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.10 }}>
        <defs>
          <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cb8530" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#cb8530" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#cb8530" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <line x1="50%" y1="50%" x2="28%" y2="26%" stroke="url(#lg1)" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="72%" y2="24%" stroke="url(#lg1)" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="28%" y2="70%" stroke="url(#lg1)" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="72%" y2="70%" stroke="url(#lg1)" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="42%" y2="66%" stroke="url(#lg1)" strokeWidth="1" />
      </svg>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: i % 3 === 0 ? '3px' : '2px',
              height: i % 3 === 0 ? '3px' : '2px',
              background: 'rgba(203,133,48,0.3)',
              left: `${10 + (i * 17) % 80}%`,
              top: `${5 + (i * 23) % 90}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* ── CARD 1 — Your Services (top-left) ── */}
      <div
        className="floating-card absolute"
        style={{
          top: '8%', left: '4%',
          width: '168px',
          background: '#1e1f26',
          border: '1px solid rgba(203,133,48,0.25)',
          borderRadius: '14px',
          padding: '14px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div style={{ fontSize: '9px', letterSpacing: '0.14em', color: '#cb8530', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 600 }}>
          YOU GET
        </div>
        <div style={{ fontSize: '12px', fontWeight: 600, color: '#F0EFE7', marginBottom: '10px' }}>
          Full-Stack Growth
        </div>
        {/* Service pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
          {['Meta Ads', 'Google Ads', 'AI Automation', 'Web Dev'].map((s) => (
            <span key={s} style={{
              fontSize: '9px', fontWeight: 500,
              background: 'rgba(203,133,48,0.12)',
              color: '#cb8530',
              border: '1px solid rgba(203,133,48,0.25)',
              borderRadius: '999px',
              padding: '2px 7px',
            }}>{s}</span>
          ))}
        </div>
        {/* Bar visual */}
        <div style={{ marginTop: '10px', display: 'flex', gap: '3px', alignItems: 'flex-end', height: '24px' }}>
          {[60, 85, 45, 100, 70].map((h, i) => (
            <div key={i} style={{
              flex: 1, height: `${h}%`,
              background: i === 3 ? '#cb8530' : 'rgba(203,133,48,0.25)',
              borderRadius: '3px 3px 0 0',
            }} />
          ))}
        </div>
      </div>

      {/* ── CARD 2 — AI Follow-Up (top-right) ── */}
      <div
        className="floating-card absolute"
        style={{
          top: '5%', right: '5%',
          width: '160px',
          background: '#1e1f26',
          border: '1px solid rgba(203,133,48,0.25)',
          borderRadius: '14px',
          padding: '14px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div style={{ fontSize: '9px', letterSpacing: '0.14em', color: '#cb8530', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 600 }}>
          AI Follow-Up
        </div>
        <div style={{ fontSize: '12px', fontWeight: 600, color: '#F0EFE7', marginBottom: '10px' }}>
          Responds in seconds
        </div>
        {/* Chat bubbles */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <div style={{ alignSelf: 'flex-end', background: 'rgba(203,133,48,0.15)', border: '1px solid rgba(203,133,48,0.3)', borderRadius: '8px 8px 2px 8px', padding: '5px 8px' }}>
            <div style={{ width: '70px', height: '6px', background: 'rgba(203,133,48,0.5)', borderRadius: '3px' }} />
          </div>
          <div style={{ alignSelf: 'flex-start', background: 'rgba(240,239,231,0.06)', border: '1px solid rgba(240,239,231,0.1)', borderRadius: '8px 8px 8px 2px', padding: '5px 8px' }}>
            <div style={{ width: '55px', height: '6px', background: 'rgba(240,239,231,0.25)', borderRadius: '3px' }} />
          </div>
          <div style={{ alignSelf: 'flex-end', background: 'rgba(203,133,48,0.15)', border: '1px solid rgba(203,133,48,0.3)', borderRadius: '8px 8px 2px 8px', padding: '5px 8px' }}>
            <div style={{ width: '45px', height: '6px', background: 'rgba(203,133,48,0.5)', borderRadius: '3px' }} />
          </div>
        </div>
        {/* Response rate */}
        <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '9px', color: 'rgba(240,239,231,0.45)' }}>Response rate</span>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#cb8530' }}>97%</span>
        </div>
      </div>

      {/* ── CARD 3 — What We Build (bottom-left) ── */}
      <div
        className="floating-card absolute"
        style={{
          bottom: '12%', left: '3%',
          width: '172px',
          background: '#1e1f26',
          border: '1px solid rgba(203,133,48,0.25)',
          borderRadius: '14px',
          padding: '14px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div style={{ fontSize: '9px', letterSpacing: '0.14em', color: '#cb8530', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 600 }}>
          What We Build
        </div>
        <div style={{ fontSize: '12px', fontWeight: 600, color: '#F0EFE7', marginBottom: '10px' }}>
          Patient Pipeline
        </div>
        {/* Pipeline flow */}
        {['Ad Campaign', 'Landing Page', 'Lead Capture', 'Booked Call'].map((step, i) => (
          <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: i < 3 ? '4px' : '0' }}>
            <div style={{
              width: '16px', height: '16px', borderRadius: '50%',
              background: i === 3 ? '#cb8530' : 'rgba(203,133,48,0.15)',
              border: `1px solid ${i === 3 ? '#cb8530' : 'rgba(203,133,48,0.3)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              {i === 3
                ? <svg width="8" height="8" viewBox="0 0 8 8"><path d="M1.5 4L3.5 6L6.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>
                : <span style={{ fontSize: '7px', color: '#cb8530', fontWeight: 700 }}>{i + 1}</span>
              }
            </div>
            <span style={{ fontSize: '9px', color: i === 3 ? '#F0EFE7' : 'rgba(240,239,231,0.5)' }}>{step}</span>
          </div>
        ))}
      </div>

      {/* ── CARD 4 — Ad Performance (bottom-right) ── */}
      <div
        className="floating-card absolute"
        style={{
          bottom: '10%', right: '4%',
          width: '160px',
          background: '#1e1f26',
          border: '1px solid rgba(203,133,48,0.25)',
          borderRadius: '14px',
          padding: '14px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div style={{ fontSize: '9px', letterSpacing: '0.14em', color: '#cb8530', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 600 }}>
          Ad Performance
        </div>
        <div style={{ fontSize: '12px', fontWeight: 600, color: '#F0EFE7', marginBottom: '2px' }}>
          Meta Campaign
        </div>
        <div style={{ fontSize: '9px', color: 'rgba(240,239,231,0.4)', marginBottom: '10px' }}>
           ↑ 34%
        </div>
        {/* Sparkline */}
        <svg width="100%" height="32" viewBox="0 0 130 32" preserveAspectRatio="none">
          <polyline
            points="0,28 20,22 40,24 60,14 80,16 100,8 130,4"
            fill="none"
            stroke="rgba(203,133,48,0.4)"
            strokeWidth="1.5"
          />
          <polyline
            points="0,28 20,22 40,24 60,14 80,16 100,8 130,4 130,32 0,32"
            fill="rgba(203,133,48,0.08)"
          />
          <circle cx="130" cy="4" r="3" fill="#cb8530" />
        </svg>
        {/* Stats row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#cb8530' }}>$24</div>
            <div style={{ fontSize: '8px', color: 'rgba(240,239,231,0.4)' }}>Cost/Lead</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#F0EFE7' }}>312</div>
            <div style={{ fontSize: '8px', color: 'rgba(240,239,231,0.4)' }}>Quality Leads</div>
          </div>
        </div>
      </div>

      {/* ── CARD 6 — Niche (left-center) ── */}
      <div
        className="floating-card absolute"
        style={{
          top: '68%', left: '30%',
          width: '152px',
          background: '#1e1f26',
          border: '1px solid rgba(203,133,48,0.25)',
          borderRadius: '14px',
          padding: '14px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div style={{ fontSize: '9px', letterSpacing: '0.14em', color: '#cb8530', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 600 }}>
          BUILT FOR
        </div>
        <div style={{ fontSize: '12px', fontWeight: 600, color: '#F0EFE7', marginBottom: '10px' }}>
        CLINICS
        </div>
        {/* Specialty tags */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          {[
            { icon: '◈', label: 'Med Spas' },
            { icon: '◈', label: 'Cosmetic Clinic' },
            { icon: '◈', label: 'Aesthetic Clinics' },
          ].map((item) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '7px', background: 'rgba(203,133,48,0.06)', borderRadius: '6px', padding: '5px 8px' }}>
              <span style={{ fontSize: '8px', color: '#cb8530' }}>{item.icon}</span>
              <span style={{ fontSize: '10px', color: 'rgba(240,239,231,0.75)', fontWeight: 500 }}>{item.label}</span>
            </div>
          ))}
        </div>
        {/* Exclusive badge */}
        <div style={{ marginTop: '8px', textAlign: 'center', background: 'rgba(203,133,48,0.1)', border: '1px solid rgba(203,133,48,0.25)', borderRadius: '999px', padding: '3px 8px' }}>
          <span style={{ fontSize: '8px', color: '#cb8530', fontWeight: 600, letterSpacing: '0.08em' }}>EXCLUSIVELY</span>
        </div>
      </div>

    </div>
  )
}