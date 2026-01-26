export const metadata = {
  title: "AcrossBay",
  description: "AcrossBay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
