import ContactPage from "./contactPage";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  title: {
    default: "Contact AIIVA Automation Hyderabad | Smart Home Experts",
    template: "%s | AIIVA Automation",
  },

  description:
    "Contact AIIVA Automation in Hyderabad for smart home automation services. Call, WhatsApp, or send your project details for installation, setup, and support.",

  keywords: [
    "contact AIIVA Automation",
    "home automation Hyderabad contact",
    "smart home installation Hyderabad",
    "automation company Hyderabad contact",
    "smart home service Hyderabad phone",
    "AIIVA Automation address",
  ],

  alternates: {
    canonical: `${siteUrl}/contact`,
  },

  openGraph: {
    title: "Contact AIIVA Automation | Smart Home Solutions Hyderabad",
    description:
      "Get in touch with AIIVA Automation for smart home installation, support, and automation services in Hyderabad.",
    url: `${siteUrl}/contact`,
    siteName: "AIIVA Automation",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo-img.jpg",
        width: 1200,
        height: 630,
        alt: "Contact AIIVA Automation Hyderabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact AIIVA Automation Hyderabad",
    description:
      "Call or message AIIVA Automation for smart home solutions in Hyderabad.",
    images: ["/logo-img.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "business",
};

export default function Page() {
  return <ContactPage />;
}