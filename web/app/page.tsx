"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import UnlockSection from "@/components/auth/UnlockSection";
import LoginOrRegisterSection from "@/components/auth/LoginOrRegisterSection";
import GlobeSection from "@/components/globe/GlobeSection";

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);
  const [showLoginOrRegister, setShowLoginOrRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginOrRegister(false);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {!unlocked ? (
          <UnlockSection onUnlock={() => setUnlocked(true)} />
        ) : showLoginOrRegister ? (
          <LoginOrRegisterSection
            onBack={() => setShowLoginOrRegister(false)}
            onGoogleLogin={handleLogin}
            onSuiWalletLogin={handleLogin}
          />
        ) : (
          <GlobeSection isLoggedIn={isLoggedIn} onLoginOrRegister={() => setShowLoginOrRegister(true)} onBack={() => setUnlocked(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

