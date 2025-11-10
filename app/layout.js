import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "AcrossBay – Coastal Lifestyle",
  description: "Coastal lifestyle meets minimal design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-sky-50 to-white text-gray-800">
        <Header />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
