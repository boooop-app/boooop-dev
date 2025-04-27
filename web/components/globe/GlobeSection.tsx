"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import GlobeFooter from "@/components/globe/GlobeFooter";
import Image from "next/image";
import { DockBar } from "../ui/dock_bar";

const SocialGlobe = dynamic(() => import("@/components/features/social_globe"), { ssr: false });

function Avatar() {
  return (
    <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
      <Image src="/icons/google.svg" alt="avatar" width={32} height={32} />
    </div>
  );
}

function TopRightButton({ onBack }: { onBack: () => void }) {
  return (
    <button className="absolute top-4 right-4 z-20 bg-white rounded-full px-4 py-2 shadow font-bold text-blue-500 hover:bg-blue-50" onClick={onBack}>Back To Home</button>
  );
}

function GlobeMenu() {
  return (
    <div className="w-full flex justify-center absolute bottom-6 left-0 z-20">
      <DockBar />
    </div>
  );
}

interface GlobeSectionProps {
  isLoggedIn: boolean;
  onLoginOrRegister: () => void;
  onBack: () => void;
} 

export default function GlobeSection({ isLoggedIn, onLoginOrRegister, onBack }: GlobeSectionProps) {
  return (
    <motion.div
      key="globe"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 w-full h-full"
    >
      {isLoggedIn && <Avatar />}
      {isLoggedIn && <TopRightButton onBack={onBack} />}
      <SocialGlobe />
      {isLoggedIn ? <GlobeMenu /> : <GlobeFooter onLoginOrRegister={onLoginOrRegister} />}
    </motion.div>
  );
} 