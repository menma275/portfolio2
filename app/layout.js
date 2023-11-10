import "./globals.css";

export const metadata = {
  title: "sakamura",
  description: "Generative Artist, Web Developer, and Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative max-w-3xl mx-auto px-5">
        <div className="dark:hidden">
          <div className="w-[300px] sm:w-[500px] aspect-square rounded-full absolute -top-1/4 left-0 -z-10 blur-3xl bg-gradient-to-tr from-amber-100 to-rose-100 bg-opacity-50"></div>
          <div className="w-[300px] sm:w-[400px] aspect-square rounded-full absolute top-0 right-0 -z-10 blur-3xl bg-gradient-to-r from-amber-100 to-rose-100"></div>
          <div className="w-[300px] sm:w-[500px] aspect-square rounded-full absolute top-1/2 left-0 -z-10 blur-3xl bg-gradient-to-tl from-amber-100 to-rose-100"></div>
        </div>
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
