// import { Separator } from "@/components/ui/Separator";

// const serviceLinks = [
//   { label: "Patient Acquisition System", href: "#system" },
//   { label: "How It Works", href: "#process" },
//   { label: "30-Day Guarantee", href: "#guarantee" },
// ];

// const companyLinks = [
//   { label: "About", href: "#" },
//   { label: "Contact", href: "#" },
//   { label: "Privacy Policy", href: "#" },
// ];

// export function Footer() {
//   return (
//     <footer className="border-t border-border bg-muted/50">
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

//           <div className="lg:col-span-2">
//             <div className="flex items-center space-x-2 mb-4">
//               <div className="h-8 w-8 rounded-lg bg-primary" aria-hidden="true" />
//               <span className="font-semibold text-foreground">Creavox</span>
//             </div>
//             <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
//               Patient acquisition systems built exclusively for aesthetic and
//               plastic surgery practices. Precision paid media, AI-powered
//               follow-up, and qualified lead generation.
//             </p>
//           </div>

//           <nav aria-label="Footer services links">
//             <h3 className="text-sm font-medium text-foreground mb-4">Services</h3>
//             <ul className="space-y-2">
//               {serviceLinks.map((link) => (
//                 <li key={link.label}>
//                   <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           <nav aria-label="Footer company links">
//             <h3 className="text-sm font-medium text-foreground mb-4">Company</h3>
//             <ul className="space-y-2">
//               {companyLinks.map((link) => (
//                 <li key={link.label}>
//                   <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//         </div>

//         <Separator className="my-8" />

//         <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-sm text-muted-foreground">
//             © {new Date().getFullYear()} Creavox Media. All rights reserved.
//           </p>
//           <div className="flex space-x-6">
//             <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
//               Privacy Policy
//             </a>
//             <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
//               Terms of Service
//             </a>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// }

// -------safari------------

"use client";
import Link from "next/link";
import { Separator } from "@/components/ui/Separator";

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t bg-[#070707]"
      role="contentinfo"
    >
      {/* Background CREAVOX */}
      <div
        aria-hidden="true"
        className="
      pointer-events-none

      absolute
      inset-0

      flex
      items-center
      justify-center

      z-0
      overflow-hidden
      select-none
    "
      >
        <h1
          className="
        whitespace-nowrap

        font-black
        uppercase

        text-[24vw]
        leading-none

        tracking-[-0.08em]

        text-transparent

        bg-[linear-gradient(180deg,rgba(255,255,255,0.035)_0%,rgba(255,255,255,0.018)_45%,rgba(255,255,255,0)_100%)]

        bg-clip-text
      "
        >
          CREAVOX
        </h1>
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand col — spans 2 cols on md+ */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
             
              <span className="font-semibold text-foreground">Creavox</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Patient acquisition systems built exclusively for aesthetic and
              Med Spa Clinic.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-medium mb-4 text-sm text-foreground">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="#system"
                  className="hover:text-foreground transition-colors"
                >
                  Patient Acquisition System
                </Link>
              </li>
              <li>
                <Link
                  href="#process"
                  className="hover:text-foreground transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#guarantee"
                  className="hover:text-foreground transition-colors"
                >
                  30-Day Guarantee
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-medium mb-4 text-sm text-foreground">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Creavox · Design and developed by{" "}
            <i>our</i> Team · All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// "use client";

// import Link from "next/link";

// export function Footer() {
//   return (
//     <footer
//       className="relative overflow-hidden border-t bg-[#070707]"
//       role="contentinfo"
//     >
//       {/* Giant background word */}
//       <div
//         aria-hidden="true"
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           flex
//           items-center
//           justify-center
//           select-none
//         "
//       >
//         <h1
//   className="
//     font-black
//     uppercase
//     whitespace-nowrap

//     text-[24vw]
//     leading-none

//     tracking-[-0.08em]

//     text-transparent

//     bg-gradient-to-b
//     from-white/[0.035]
//     via-white/[0.01]
//     to-transparent

//     bg-clip-text
//   "
// >
//   CREAVOX
// </h1>
//       </div>

//       {/* Content */}
//       <div className="relative z-10">

//         {/* Top spacing */}
//         <div className="h-52 sm:h-64 md:h-72" />

//         {/* Bottom row */}
//         <div className="container mx-auto px-6 pb-10">

//           <div className="flex flex-col md:flex-row items-center justify-between gap-6">

//             <p className="text-sm text-zinc-500 text-center md:text-left">
//               © {new Date().getFullYear()} All Rights Reserved to Creavox.
//             </p>

//             <div className="flex items-center gap-6">

//               <Link
//                 href="#"
//                 className="text-sm text-zinc-500 hover:text-white transition-colors"
//               >
//                 Privacy Policy
//               </Link>

//               <Link
//                 href="#"
//                 className="text-sm text-zinc-500 hover:text-white transition-colors"
//               >
//                 Terms
//               </Link>

//               <Link
//                 href="#"
//                 className="text-sm text-zinc-500 hover:text-white transition-colors"
//               >
//                 Contact
//               </Link>

//             </div>

//           </div>

//         </div>

//       </div>
//     </footer>
//   );
// }
