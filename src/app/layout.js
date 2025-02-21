import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`container max-w-7xl mx-auto px-4`}
      >
        {children}
      </body>
    </html>
  );
}
