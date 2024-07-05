import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/navbar/Navbar";
import Sidebar from "@/components/navigation/sidebar/Sidebar";
import Footer from "@/components/footer/Footer";
import WhatsAppIcon from "@/components/whatapp/WhatsAppIcon";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Choroid",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Sidebar />
        {children}
        <WhatsAppIcon />
        <Footer />
      </body>
    </html>
  );
}
