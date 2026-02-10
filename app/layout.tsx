import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['400', '600', '700', '800'],
  subsets: ["latin"],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Ömer Duman - Matematik Özel Ders | TYT AYT Geometri",
  description: "TYT, AYT, Geometri ve tüm matematik konularında uzman eğitim. Sınavlara Ömer Hoca ile hep bir adım önde! Özel kampanya: 1000 TL.",
  keywords: "matematik özel ders, TYT matematik, AYT matematik, geometri dersi, ömer duman, özel ders, ortaokul matematik",
  authors: [{ name: "Ömer Duman" }],
  openGraph: {
    title: "Ömer Duman - Matematik Özel Ders",
    description: "Sınavlara Ömer Hoca ile hep bir adım önde! TYT, AYT, Geometri - Tüm matematik konularında uzman eğitim.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
