'use client';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FuelProvider } from '@fuels/react'
import { defaultConnectors } from '@fuels/connectors'

const inter = Inter({ subsets: ['latin'] });

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <FuelProvider fuelConfig={{
        connectors: defaultConnectors(),
      }}>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
      </FuelProvider>
    </QueryClientProvider>
  );
}
