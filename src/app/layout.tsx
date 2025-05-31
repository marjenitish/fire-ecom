import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'BoroBazar - Your Online Store', // Updated title
  description: 'A Next.js e-commerce starter with TailwindCSS and Supabase.', // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background">
        <Header />
        {/* Removed container classes from main to allow full-width sections if needed by pages */}
        <main className="flex-grow"> 
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
