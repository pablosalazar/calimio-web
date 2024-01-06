import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/layout/topnav";

const exo = Exo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Motorepuestos calimio",
  description:
    "Variedad en repuestos, accesorios, llantas, neumáticos, lubricantes y aceites para motos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={exo.className}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
