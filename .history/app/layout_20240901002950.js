import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import s

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me a Chai- Fund your projects with a chai",
  description: "This website is a crowd funding platform for creators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className="min-h-[82.3vh] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
{/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div> */}