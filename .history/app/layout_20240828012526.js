import { Inter } from "next/font/google";
import "./globals.css";
imp

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
        {children}
        <Footer/>
      </body>
    </html>
  );
}