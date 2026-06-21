import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0d11",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://creavox"),
  title: {
    default: "Creavox — Patient Acquisition for Aesthetic & Med Spa Clinics",
    template: "%s | Creavox",
  },
  description:
    "We fill med spa and aesthetic clinic consultation calendars in 30 days — or you don't pay. Precision paid media, AI follow-up, and qualified lead generation for aesthetic practices.",
  keywords: [
    "med spa marketing agency",
    "aesthetic clinic patient acquisition",
    "plastic surgery marketing",
    "med spa lead generation",
    "aesthetic clinic advertising",
    "AI patient follow-up automation",
    "medical spa marketing",
    "cosmetic clinic marketing agency",
    "Creavox",
  ],
  authors: [{ name: "Creavox", url: "https://creavox" }],
  creator: "Creavox",
  publisher: "Creavox",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://creavox.media",
    siteName: "Creavox Media",
    title:
      "Creavox Media — Patient Acquisition for Aesthetic & Med Spa Clinics",
    description:
      "We fill med spa and aesthetic clinic consultation calendars in 30 days — or you don't pay.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Creavox Media — Patient Acquisition System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creavox Media — Patient Acquisition for Aesthetic Clinics",
    description:
      "We fill med spa consultation calendars in 30 days — or you don't pay.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://creavox.media",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

// -----Chrome-------

// import type { Metadata } from "next";
// import { Poppins, DM_Sans } from "next/font/google";
// import "./globals.css";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-poppins",
//   display: "swap",
// });

// const dmSans = DM_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   variable: "--font-dm-sans",
//   display: "swap",
// });

// export const metadata: Metadata = {
//   metadataBase: new URL("https://creavoxmedia.com"),
//   title: {
//     default: "Creavox Media | Patient Acquisition for Aesthetic & Plastic Surgery Clinics",
//     template: "%s | Creavox Media",
//   },
//   description:
//     "We fill med spa and plastic surgery consultation calendars in 30 days — or you don't pay. Precision paid media, AI follow-up automation, and qualified lead generation exclusively for aesthetic clinics.",
//   keywords: [
//     "patient acquisition for plastic surgery clinics",
//     "med spa marketing agency",
//     "aesthetic clinic lead generation",
//     "plastic surgery advertising",
//     "med spa paid media",
//     "cosmetic clinic patient booking",
//     "aesthetic practice growth",
//     "surgery clinic marketing Pakistan",
//   ],
//   authors: [{ name: "Creavox Media" }],
//   creator: "Creavox Media",
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://creavoxmedia.com",
//     siteName: "Creavox Media",
//     title: "Creavox Media | Patient Acquisition for Aesthetic & Plastic Surgery Clinics",
//     description:
//       "We fill med spa and plastic surgery consultation calendars in 30 days — or you don't pay.",
//     images: [
//       {
//         url: "/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Creavox Media — Patient Acquisition for Aesthetic Clinics",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Creavox Media | Patient Acquisition for Aesthetic Clinics",
//     description:
//       "We fill med spa consultation calendars in 30 days — or you don't pay.",
//     images: ["/og-image.jpg"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   alternates: {
//     canonical: "https://creavoxmedia.com",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className={`${poppins.variable} ${dmSans.variable}`}>
//       <head>
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "MarketingAgency",
//               name: "Creavox Media",
//               url: "https://creavoxmedia.com",
//               description:
//                 "Patient acquisition systems built exclusively for aesthetic and plastic surgery practices.",
//               serviceType: "Patient Acquisition & Digital Marketing",
//               areaServed: "Worldwide",
//               hasOfferCatalog: {
//                 "@type": "OfferCatalog",
//                 name: "Patient Acquisition Services",
//                 itemListElement: [
//                   {
//                     "@type": "Offer",
//                     itemOffered: {
//                       "@type": "Service",
//                       name: "Precision Paid Media",
//                       description: "Meta and Google ad campaigns for aesthetic clinics",
//                     },
//                   },
//                   {
//                     "@type": "Offer",
//                     itemOffered: {
//                       "@type": "Service",
//                       name: "AI Follow-Up Automation",
//                       description: "Automated WhatsApp and email lead nurturing",
//                     },
//                   },
//                   {
//                     "@type": "Offer",
//                     itemOffered: {
//                       "@type": "Service",
//                       name: "Qualified Lead Generation",
//                       description: "Pre-qualified patient leads delivered to your calendar",
//                     },
//                   },
//                 ],
//               },
//             }),
//           }}
//         />
//       </head>
//       <body className="min-h-full flex flex-col">{children}</body>
//     </html>
//   );
// }
