import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
    title: "Yash Aggarwal | Portfolio",
    description: "Explore Yash Aggarwal's personal portfolio showcasing skills, projects, and resume. Available for freelance Web Development and Machine Learning projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`container max-w-7xl mx-auto px-4`}
      >
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
