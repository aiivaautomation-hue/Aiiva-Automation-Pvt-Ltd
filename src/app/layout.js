import { Geist, Inter, Spline_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartProvider from "@/app/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import Toast from "@/components/Toast";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const spline = Spline_Sans({
  variable: "--font-spline",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "AIIVA Automation | Smart Home Automation in Hyderabad",
    template: "%s | AIIVA Automation",
  },

  description:
    "AIIVA Automation provides smart home and commercial automation solutions in Hyderabad. Control lights, locks, security, and appliances with advanced automation systems.",

  keywords: [
    "smart home automation Hyderabad",
    "home automation India",
    "smart switches",
    "smart locks",
    "IoT home solutions",
    "AIIVA Automation",
  ],

  authors: [{ name: "AIIVA Automation" }],
  creator: "AIIVA Automation",

  openGraph: {
    title: "AIIVA Automation | Smart Living Simplified",
    description:
      "Upgrade your lifestyle with smart automation systems for homes, offices, and commercial spaces.",
    url: `${siteUrl}`,
    siteName: "AIIVA Automation",
    images: [
      {
        url: "/logo-img.jpg", // create this
        width: 1200,
        height: 630,
        alt: "AIIVA Automation Smart Home",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AIIVA Automation",
    description: "Smart home automation solutions in Hyderabad",
    images: ["/logo-img.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${inter.variable} ${spline.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Header />
          <CartDrawer />
          {children}
          <Footer />
          <Toast />
        </CartProvider>

        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "AIIVA Automation Private Limited",
      image: `${siteUrl}/logo-img.jpg`,
      telephone: "+919000006000",
      email: "aiivaautomation@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "F-504, The Legend, Basheer Bagh",
        addressLocality: "Hyderabad",
        postalCode: "500063",
        addressCountry: "IN",
      },
      areaServed: "Hyderabad",
      url: `${siteUrl}`,
    }),
  }}
/>
      </body>
    </html>
  );
}