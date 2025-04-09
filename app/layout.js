import Footer from "./_components/Footer";
import Header from "./_components/Header";

import "./globals.css";

export const metadata = {
  title: "Brand Boost",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        <main className="bg-primary min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
