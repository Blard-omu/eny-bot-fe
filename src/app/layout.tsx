import "./globals.css";
import { ReactNode } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

export const metadata = {
  title: "Eny Consult – AI-Powered Training & Business Solutions",
  description:
    "Eny Consult offers AI-driven training programs and business solutions to help individuals and companies grow through innovation and expertise.",
  keywords:
    "eny consult, AI assistant, business training, consulting, career growth, technology solutions",
  authors: [{ name: "Eny Consult Team" }],
  metadataBase: new URL("https://eny-bot-fe.vercel.app"),
  openGraph: {
    title: "Eny Consult – AI-Powered Training & Business Solutions",
    description:
      "Unlock growth and innovation with Eny Consult's AI-powered solutions and professional training programs.",
    url: "https://eny-bot-fe.vercel.app",
    siteName: "Eny Consult",
    images: [
      {
        url: "https://res.cloudinary.com/djkrhjgjd/image/upload/v1757065247/chatbot/eny-logo_ixmnva.png",
        width: 1200,
        height: 630,
        alt: "Eny Consult Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eny Consult – AI-Powered Training & Business Solutions",
    description:
      "Eny Consult provides AI-powered business solutions and professional training programs to help you achieve sustainable growth.",
    images: [
      "https://res.cloudinary.com/djkrhjgjd/image/upload/v1757065247/chatbot/eny-logo_ixmnva.png",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1e40af" /> 
      </head>
      <body>
        <AuthProvider>
          <main>{children}</main>
        </AuthProvider>

        {/* Toast Notifications */}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            success: {
              style: {
                background: "#4ade80", // Green
                color: "#000",
              },
            },
            error: {
              duration: 5000,
              style: {
                background: "#f87171", // Red
                color: "#fff",
              },
            },
            loading: {
              duration: Infinity,
              style: {
                background: "#e0e7ff", // Light Indigo
                color: "#1e40af", // Dark Blue
              },
            },
          }}
        />

        {/* JSON-LD Structured Data for SEO */}
        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Eny Consult",
            url: "https://eny-bot-fe.vercel.app",
            logo:
              "https://res.cloudinary.com/djkrhjgjd/image/upload/v1757065247/chatbot/eny-logo_ixmnva.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+2348000000000",
              contactType: "Customer Support",
            },
            sameAs: [
              "https://www.facebook.com/enyconsult",
              "https://www.twitter.com/enyconsult",
              "https://www.linkedin.com/company/enyconsult",
            ],
          })}
        </Script>
      </body>
    </html>
  );
}
