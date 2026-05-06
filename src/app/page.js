import AboutSection from "@/components/AboutSection"
import CtaSection from "@/components/CtaSection"
import Hero from "@/components/Hero"
import OurServices from "@/components/OurServices"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  title: {
    default: "Smart Home Automation in Hyderabad | AIIVA Automation",
    template: "%s | AIIVA Automation",
  },

  description:
    "Looking for smart home automation in Hyderabad? AIIVA Automation offers smart switches, lighting, security systems, and complete home automation solutions for homes, offices, and commercial spaces.",

  keywords: [
    "smart home automation Hyderabad",
    "home automation Hyderabad",
    "smart switches India",
    "smart lighting systems",
    "smart locks Hyderabad",
    "home automation company Hyderabad",
    "IoT home automation India",
    "AIIVA Automation",
  ],

  alternates: {
    canonical: `${siteUrl}/`,
  },

  openGraph: {
    title: "Smart Home Automation in Hyderabad | AIIVA Automation",
    description:
      "Upgrade your home with smart automation systems. Control lighting, security, and appliances with AIIVA Automation in Hyderabad.",
    url: `${siteUrl}/`,
    siteName: "AIIVA Automation",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo-img.jpg", // put inside /public
        width: 1200,
        height: 630,
        alt: "Smart Home Automation Setup",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Smart Home Automation in Hyderabad",
    description:
      "Smart switches, lighting, locks & automation systems by AIIVA Automation.",
    images: ["/logo-img.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",
};

function page() {
  return (
    <div>
      <Hero/>
      <AboutSection/>
      <OurServices/>
      <CtaSection/>
    </div>
  )
}
export default page