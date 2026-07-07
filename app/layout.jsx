// Passthrough root layout. The real <html>/<body>, fonts and next-intl
// provider live in app/[locale]/layout.jsx (so they can use the locale).
// This root exists only so that app/not-found.jsx (which renders its own
// <html>) has a valid root layout — otherwise Next.js fails to build.
export default function RootLayout({ children }) {
  return children;
}
