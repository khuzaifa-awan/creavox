/* ---------safari------------ */


import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://creavox.media',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}


/* ---------Chrome(both are sane)------------ */
// import { MetadataRoute } from "next";

// export default function sitemap(): MetadataRoute.Sitemap {
//   return [
//     {
//       url: "https://creavoxmedia.com",
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 1,
//     },
//   ];
// }