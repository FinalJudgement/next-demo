import './globals.css';
import { Urbanist } from "next/font/google";
import { Providers } from '@/lib/providers';

const urbanist = Urbanist({subsets: ["latin"] });




export const metadata = {
  title: 'Next.js Demo',
  description: 'Created with Next.js App Router',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-900 text-slate-100">
      <body className={urbanist.className} >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
