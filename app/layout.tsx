import { GeistSans } from "geist/font/sans";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Realtime Chat - Ciunek",
  description: "O melhor chat para se conversar!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-dark_purple text-foreground">
        <main className="min-h-screen flex flex-col items-center">{children}</main>
      </body>
    </html>
  );
}
