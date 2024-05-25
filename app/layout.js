export const metadata = {
  title: "The Wild Oasis",
  description: "A beautiful oasis in the wild",
};

import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

// children prop will always be the current page component
function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ display: "flex", gap: "14px" }}>
          <Logo />
          <Navigation />
        </header>

        <main>{children}</main>

        <footer style={{ marginTop: "32px" }}>
          Copyright by the Wild Oasis
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
