import "./globals.css";
// import ShaderBackground from "@/components/background";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative w-full h-full text-white">
        {/* Background */}
        {/* <ShaderBackground className="fixed inset-0 -z-10" /> */}


        {/* Content on top */}
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
