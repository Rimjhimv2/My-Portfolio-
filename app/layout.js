 import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";
import ConditionalLayout from "@/components/ConditionalLayout";
import RegisterSW from "@/components/RegisterSW";

export const metadata = {
  title: "Rimjhim Verma | Full-Stack Web Developer | TypeScript & Next.js Projects",
  description:
    "Explore Rimjhim Verma's portfolio of TypeScript and Next.js projects. View details of my full-stack web development work including SaaS applications and open-source contributions.",
  alternates: {
    canonical: "https://www.rimjhim.online",
  },
  keywords: [
    "Rimjhim Verma",
    "Full-Stack Developer",
    "Next.js Portfolio",
    "MERN Stack",
    "TypeScript Developer",
    "Web Developer Portfolio",
    "Tailwind CSS",
    "React Developer",
  ],
  authors: [{ name: "Rimjhim Verma" }],
  creator: "Rimjhim Verma",
  metadataBase: new URL("https://www.rimjhim.online"),
  openGraph: {
    title: "Rimjhim Verma | Full-Stack Web Developer",
    description:
      "Portfolio of Rimjhim Verma – building fast, modern full-stack apps using Next.js, TypeScript, and more.",
    url: "https://www.rimjhim.online",
    siteName: "Rimjhim Verma Portfolio",
    images: [
      {
        url: "https://www.rimjhim.online/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rimjhim Verma Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rimjhim Verma | Full-Stack Web Developer",
    description:
      "Explore the portfolio of Rimjhim Verma, showcasing projects, skills, and experience in full-stack development.",
    images: ["https://www.rimjhim.online/og-image.png"],
    creator: "@rimjhim_verma", // change if different
  },
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.className} min-h-screen bg-background text-foreground antialiased`}
      >
        <Analytics />
        <ConditionalLayout>
          <RegisterSW />
          {children}
        </ConditionalLayout>
        <Toaster />
      </body>
    </html>
  );
}
