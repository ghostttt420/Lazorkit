"use client";
import { useLazorAuth } from '@lazorkit/react';

export default function Home() {
  const { signInWithPasskey, isAuthenticated, userAddress } = useLazorAuth();

  const handleLogin = async () => {
    try {
      // Triggers FaceID / TouchID on the device
      await signInWithPasskey();
    } catch (error) {
      console.error("Biometric scan failed", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Solana Biometric Auth</h1>

      {!isAuthenticated ? (
        <button 
          onClick={handleLogin}
          className="bg-purple-600 text-white px-8 py-4 rounded-xl text-xl font-bold hover:bg-purple-700 transition"
        >
          🔑 Login with FaceID
        </button>
      ) : (
        <div className="text-center">
          <p className="text-green-500 text-xl mb-4">Biometric Verified ✅</p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono">
            {userAddress}
          </div>
        </div>
      )}
    </main>
  );
}

