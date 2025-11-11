import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "AcrossBay",
  description: "Smart finds from trusted marketplaces worldwide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
