import "./globals.css";
import { ReactNode } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import { Toaster } from "react-hot-toast";
import Script from "next/script";



export const metadata = {
  title: "MentorMatch – Connect. Learn. Grow.",
  description:
    "MentorMatch helps you connect with expert mentors, schedule sessions, and grow your career with personalized guidance.",
  keywords:
    "mentorship, mentor platform, career guidance, mentor matching, mentee, tech mentors",
  authors: [{ name: "MentorMatch Team" }],
  metadataBase: new URL("https://mentor-dc23qxkbo-blardomus-projects.vercel.app"),
  openGraph: {
    title: "MentorMatch – Connect. Learn. Grow.",
    description:
      "Find your perfect mentor and elevate your career with MentorMatch.",
    url: "https://mentor-dc23qxkbo-blardomus-projects.vercel.app",
    siteName: "MentorMatch",
    images: [
      {
        url: "https://res.cloudinary.com/djkrhjgjd/image/upload/v1752053748/Macbook-Air-localhost_15_cr1ut0.png",
        width: 1200,
        height: 630,
        alt: "MentorMatch Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MentorMatch – Connect. Learn. Grow.",
    description:
      "MentorMatch helps you connect with expert mentors, schedule sessions, and grow your career.",
    images: [
      "https://res.cloudinary.com/djkrhjgjd/image/upload/v1752053748/Macbook-Air-localhost_15_cr1ut0.png",
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
    <html lang="en" >
      <head>
      <meta name="theme-color" content="#5c4efc" />
      </head>
      <body>
        <AuthProvider>
          <main>{children}</main>
        </AuthProvider>

        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            success: {
              style: {
                background: "#4ade80",
                color: "#000",
              },
            },
            error: {
              duration: 5000,
              style: {
                background: "#f87171",
                color: "#fff",
              },
            },
            loading: {
              duration: Infinity,
              style: {
                background: "#e0e7ff",
                color: "#4f46e5",
              },
            },
          }}
        />

        {/* JSON-LD Structured Data */}
        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MentorMatch",
            url: "https://mentor-dc23qxkbo-blardomus-projects.vercel.app",
            logo:
              "https://res.cloudinary.com/djkrhjgjd/image/upload/v1752053748/Macbook-Air-localhost_15_cr1ut0.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+2340000000000",
              contactType: "Customer Support",
            },
            sameAs: [
              "https://www.facebook.com/mentormatch",
              "https://www.twitter.com/mentormatch",
              "https://www.linkedin.com/company/mentormatch",
            ],
          })}
        </Script>
      </body>
    </html>
  );
}
