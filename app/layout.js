import "./globals.css";

const siteName = "Kusuke SAKAMURA";
const description = "Generative Artist, Web Developer, and Designer";
const url = "https://sakamura.dev/";

import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description: description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: `${url}opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    site: "@menma275",
    creator: "@menma275",
    images: {
      url: `${url}opengraph-image.jpg`,
      width: 1200,
      height: 630,
      alt: siteName,
    },
  },
  alternates: {
    canonical: url,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics />
      <body className="relative w-full max-w-3xl mx-auto px-5 overflow-x-hidden">
        <div className="w-[300px] sm:w-[500px] aspect-square rounded-full absolute -top-1/4 left-0 -z-10 blur-3xl bg-gradient-to-tr from-amber-100 to-rose-100 bg-opacity-50"></div>
        <div className="w-[300px] sm:w-[400px] aspect-square rounded-full absolute top-0 right-0 -z-10 blur-3xl bg-gradient-to-r from-amber-100 to-rose-100"></div>
        <div className="w-[300px] sm:w-[500px] aspect-square rounded-full absolute bottom-1/4 left-0 -z-10 blur-3xl bg-gradient-to-tl from-amber-100 to-rose-100"></div>
        <div className="w-[300px] sm:w-[500px] aspect-square rounded-full absolute bottom-0 right-0 -z-10 blur-3xl bg-gradient-to-tl from-amber-100 to-rose-100"></div>
        {/* <Header /> */}
        <div className="mt-8">{children}</div>
        <footer>
          <div className="my-5 mx-auto w-fit">
            <p className="text-xs font-light text-[var(--font-secondary)]">
              © 2023 Kusuke SAKAMURA
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
