import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

export const metadata = {
  title: "Portfolio",
  description: "Luana Matos portfolio",
};

const jetBrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="theme-color" content="#a238ee" />
        <meta name="msapplication-navbutton-color" content="#a238ee" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#a238ee" />
      </head>
      <body className={jetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
          { children }
        </PageTransition>
      </body>
    </html>
  );
}
