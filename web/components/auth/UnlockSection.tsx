"use client";
import { motion } from "framer-motion";
import { MainBg } from "@/components/features/main_bg";
import SlideToUnlock from "@/components/ui/SlideToUnlock";

export default function UnlockSection({ onUnlock }: { onUnlock: () => void }) {
  return (
    <motion.div
      key="main"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 flex flex-col items-center justify-center w-full h-full"
    >
      <MainBg />
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40, transition: { duration: 0.5 } }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold py-5">Boooop</h1>
        <p className="text-gray-300">Unlock the Future of NFTs</p>
        <SlideToUnlock onUnlock={onUnlock} />
      </motion.div>
    </motion.div>
  );
} 