import "./globals.css";
import ScrollProgressBar from "@/components/page-scroll";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">

      <body>
        <ScrollProgressBar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
