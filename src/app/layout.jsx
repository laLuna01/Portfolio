import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export const metadata = {
  title: "Luana Matos — Desenvolvedora Fullstack",
  description: "Luana Matos — Desenvolvedora Fullstack",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={`${inter.variable} ${jetBrainsMono.variable}`}>
        <LanguageProvider>
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
