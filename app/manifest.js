// Web App Manifest. Next.js serves this at /manifest.webmanifest and injects
// <link rel="manifest">. Uses the android-chrome icons already in /public.
export default function manifest() {
  return {
    name: "ZUBR-2000 Ukrainian hardwood lumber",
    short_name: "ZUBR-2000",
    description:
      "Ukrainian manufacturer of hardwood lumber: oak, ash, birch, larch. Kiln-dried, planed, and exported across the EU.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4F4F2",
    theme_color: "#8CA600",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
