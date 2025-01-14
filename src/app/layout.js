import { Anek_Latin } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Menu from "@/components/containers/Menu";
import Footer from "@/components/containers/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Drawer } from "vaul";

const anek = Anek_Latin({ subsets: ["latin"] });

export const metadata = {
  title: "Sridhar Chandrasekar.",
  description: "I'm a full stack developer and YouTuber behind "Code A Program." Check out my videos at youtube(https://youtube.com/@CodeAProgram) 🎥👨‍💻 ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("bg-background", anek.className)}>
        <Menu />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
