import type { Metadata } from "next";
import { Onest, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const displayFont = Onest({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "cyrillic"],
});

// Absolute base for link previews. On Vercel Next.js finds the domain itself;
// elsewhere set NEXT_PUBLIC_SITE_URL (e.g. https://avgrosheva.ru).
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl && { metadataBase: new URL(siteUrl) }),
  title: "avgrosheva",
  description:
    "Разрабатываю цифровые продукты для бизнеса: web apps, telegram bots, ai tools, crm, internal systems.",
  openGraph: {
    title: "avgrosheva",
    description:
      "Разрабатываю цифровые продукты для бизнеса: web apps, telegram bots, ai tools, crm, internal systems.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${displayFont.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-ink font-display">{children}</body>
    </html>
  );
}
