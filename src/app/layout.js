import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  metadataBase: new URL("https://engvir.uz"),
  title:
    "ЭНГВИР® — энтекавир 0,5 мг и 1 мг таблетки | Лечение гепатита B | Best Med",
  description:
    "ЭНГВИР® (энтекавир) — противовирусный препарат для лечения хронического гепатита B у взрослых, в том числе при декомпенсированном поражении печени и циррозе. Таблетки 0,5 мг и 1 мг №30. Производитель: Best Med.",
  keywords: [
    "Энгвир",
    "Энгвир таблетки",
    "энтекавир",
    "гепатит B лечение",
    "хронический гепатит B",
    "противовирусный препарат",
    "энтекавир 0.5 мг",
    "энтекавир 1 мг",
    "цирроз печени лечение",
    "декомпенсированный гепатит",
    "нуклеозидный аналог",
    "лечение печени",
    "Best Med",
    "engvir",
    "engvir tabletkalari",
    "entekavir",
    "gepatit B davolash",
    "surunkali gepatit B",
    "jigar sirrozi davolash",
    "jigar dorisi",
    "Best Med preparati",
  ],
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
  verification: {
    google: "damr5dO7LoI_X_Q6Y9rFyrvjV8DB0LQSRLn8n3-z4wc",
  },
  alternates: {
    canonical: "https://engvir.uz",
  },
  openGraph: {
    type: "website",
    url: "https://engvir.uz",
    title:
      "ЭНГВИР® — энтекавир 0,5 мг и 1 мг таблетки | Лечение гепатита B | Best Med",
    description:
      "ЭНГВИР® (энтекавир) — противовирусный препарат для лечения хронического гепатита B у взрослых, в том числе при декомпенсированном поражении печени и циррозе. Таблетки 0,5 мг и 1 мг №30. Производитель: Best Med.",
    siteName: "ЭНГВИР",
    images: [
      {
        url: "/engvir.webp",
        width: 900,
        height: 800,
        alt: "ЭНГВИР",
      },
      {
        url: "/engvir-logo.svg",
        width: 800,
        height: 600,
        alt: "ЭНГВИР логотип",
      },
    ],
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ЭНГВИР® — энтекавир 0,5 мг и 1 мг таблетки | Лечение гепатита B | Best Med",
    description:
      "ЭНГВИР® (энтекавир) — противовирусный препарат для лечения хронического гепатита B у взрослых, в том числе при декомпенсированном поражении печени и циррозе. Таблетки 0,5 мг и 1 мг №30. Производитель: Best Med.",
    images: ["/engvir.webp"],
  },
  // other: {
  //   "telegram:channel": "@SpringPharmaceutic",
  //   "instagram:account": "@springpharmaceutic",
  //   "article:publisher": "https://www.facebook.com/spring.pharm.3/",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
