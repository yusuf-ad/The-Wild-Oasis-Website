import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import Header from "./_components/Header";

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s - The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description: "Luxurious cabins in the heart of the wilderness",
};

// children prop will always be the current page component
function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950  text-primary-100 min-h-screen flex flex-col `}
      >
        <Header />

        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
