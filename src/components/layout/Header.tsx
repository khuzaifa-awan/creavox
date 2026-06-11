// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/Button";

// const navLinks = [
//   { label: "Services", href: "#system" },
//   { label: "How It Works", href: "#process" },
//   { label: "Guarantee", href: "#guarantee" },
// ];

// export function Header() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container mx-auto flex h-16 items-center justify-between px-4">

//         <Link href="/" aria-label="Creavox Media Home">
//           <Image
//             src="/creavox-logo.svg"
//             alt="Creavox Media"
//             width={120}
//             height={36}
//             priority
//           />
//         </Link>

//         <nav aria-label="Main navigation" className="hidden md:flex items-center space-x-6">
//           {navLinks.map((link) => (
            
//               key={link.href}
//               href={link.href}
//               className="text-sm text-muted-foreground hover:text-foreground transition-colors"
//             >
//               {link.label}
//             </a>
//           ))}
//         </nav>

//         <div className="hidden md:flex items-center">
//           <Button size="default">Claim Your Spot</Button>
//         </div>

//         <button
//           className="md:hidden text-foreground p-2"
//           onClick={() => setMobileOpen(!mobileOpen)}
//           aria-label={mobileOpen ? "Close menu" : "Open menu"}
//           aria-expanded={mobileOpen}
//         >
//           {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//         </button>

//       </div>

//       {mobileOpen && (
//         <nav
//           aria-label="Mobile navigation"
//           className="md:hidden border-t border-border bg-background px-4 py-4 flex flex-col gap-4"
//         >
//           {navLinks.map((link) => (
            
//               key={link.href}
//               href={link.href}
//               onClick={() => setMobileOpen(false)}
//               className="text-sm text-muted-foreground hover:text-foreground transition-colors"
//             >
//               {link.label}
//             </a>
//           ))}
//           <Button size="default" className="w-full justify-center mt-2">
//             Claim Your Spot
//           </Button>
//         </nav>
//       )}
//     </header>
//   );
// }




// ----------Safari----------------

"use client";
import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#system", label: "Services" },
    { href: "#process", label: "How It Works" },
    { href: "#guarantee", label: "Guarantee" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo + Desktop Nav */}
        <div className="flex items-center space-x-8">
          <Link href="/" aria-label="Creavox Media home">
            <img
                src="/creavox-logo.svg"
                alt="Creavox Media"
                style={{ height: '36px', width: 'auto' }}
                />
          </Link>

          <nav className="hidden md:flex items-center space-x-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop CTA */}
        {/* <div className="hidden md:block"> */}
        <div>
          <button className="btn-primary px-5 py-2 text-[15px] rounded-md">
            Claim Your Spot
          </button>
        </div>

        {/* Mobile: CTA + Hamburger */}
        {/* <div className="flex md:hidden items-center gap-3">
          <button className="btn-primary px-4 py-2 text-xs rounded-md">
            Claim Your Spot
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="text-foreground p-1"
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav
          className="md:hidden border-t bg-background/98 px-4 py-4 flex flex-col space-y-4"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base text-muted-foreground hover:text-foreground transition-colors py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )} 
    </div>
    </header>
  );
}