"use client";
import { motion } from "framer-motion";
import { MainBg } from "@/components/features/main_bg";
import Image from "next/image";

interface LoginOrRegisterSectionProps {
  onBack: () => void;
  onGoogleLogin: () => void;
  onSuiWalletLogin: () => void;
} 

export default function LoginOrRegisterSection({ onBack, onGoogleLogin, onSuiWalletLogin }: LoginOrRegisterSectionProps) {
  return (
    <motion.div
      key="loginOrRegister"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 flex flex-col items-center w-full h-full bg-white"
    >
      <MainBg />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/4 bg-gradient-to-t from-blue-500"></div>
      <div
        className="absolute left-0 bottom-0 w-full h-2/5 bg-bottom bg-no-repeat pointer-events-none z-0"
        style={{ backgroundImage: "url('/images/LoginOrRegister.png')", backgroundSize: "100% 100%" }}
      />
      <div className="relative z-10 flex flex-col items-center justify-start w-full max-w-sm mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-8 text-gray-800 drop-shadow-lg">Sign in / Sign up to Boooop</h2>
        <button onClick={onGoogleLogin} className="w-full flex items-center justify-center gap-2 bg-white/90 border border-gray-200 rounded-lg py-3 mb-4 text-gray-800 font-semibold shadow hover:bg-gray-50 transition">
          <Image src="/icons/google.svg" alt="Google" width={24} height={24} />
          Continue with Google
        </button>
        <div className="w-full flex items-center my-4">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>
        <button onClick={onSuiWalletLogin} className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg shadow transition">
          <Image src="/icons/sui-wallet.svg" alt="Sui Wallet" width={24} height={24} />
          Connect with Wallet
        </button>
        <button onClick={onBack} className="mt-8 text-gray-500 hover:underline text-sm">Back</button>
      </div>
    </motion.div>
  );
} 