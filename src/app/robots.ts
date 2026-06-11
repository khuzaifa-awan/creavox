/* ---------safari------------ */

import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://creavox.media/sitemap.xml',
  };
}


/* ---------Chrome------------ */
// import { MetadataRoute } from "next";

// export default function robots(): MetadataRoute.Robots {
//   return {
//     rules: {
//       userAgent: "*",
//       allow: "/",
//       disallow: "",
//     },
//     sitemap: "https://creavoxmedia.com/sitemap.xml",
//   };
// }