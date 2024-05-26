import "@/app/_styles/globals.css";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

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
      <body className="bg-primary-950  text-primary-100 min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>

        <main>{children}</main>

        <footer>Copyright by the Wild Oasis</footer>
      </body>
    </html>
  );
}

export default RootLayout;
