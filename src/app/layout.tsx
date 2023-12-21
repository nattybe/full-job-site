import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahadu Jobs",
  description:
    "Welcome to Ahadu Jobs, the ultimate destination for ambitious professionals seeking new opportunities and employers eager to discover top talent. Our job searching website is meticulously designed to streamline the job-hunting process, connecting skilled individuals with their dream careers and helping companies build exceptional teams.",
};
// TODO: First check if you can make pupeeter and mongodb work on the Vercel or Github page before geting to it
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-background ${inter.className}`}>
        <Header />
        <div className="md:flex">
          <NavBar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
