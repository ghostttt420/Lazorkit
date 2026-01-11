import { LazorkitProvider } from '@lazorkit/react';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* The LazorKit Provider wraps the app for Biometric Auth */}
        <LazorkitProvider 
          apiKey={process.env.NEXT_PUBLIC_LAZOR_KEY}
          chain="solana-devnet"
        >
          {children}
        </LazorkitProvider>
      </body>
    </html>
  );
}

