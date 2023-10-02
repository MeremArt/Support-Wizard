import "./globals.css";
import { initializeApp } from "firebase/app";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/Footer/page";
import { useRouter } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });
import Sidebar from "@/components/Sidebar/Sidebar";
import {firebaseConfig} from "./server/config/firebaseConfig";

initializeApp(firebaseConfig);


export const metadata = {
  title: "SupportWizard",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
