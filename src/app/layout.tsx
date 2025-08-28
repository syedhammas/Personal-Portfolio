import "./globals.css";
// import ShaderBackground from "@/components/background";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative w-full h-full text-white">

        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
