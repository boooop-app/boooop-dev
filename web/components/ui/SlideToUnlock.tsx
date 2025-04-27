"use client";

import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DndContext, useDraggable } from '@dnd-kit/core';

interface SlideToUnlockProps {
  onUnlock?: () => void;
  className?: string;
}

function DraggableButton({ maxX = 240, onUnlock, unlocked }: { maxX?: number; onUnlock?: () => void; unlocked: boolean }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: 'draggable',
    disabled: unlocked,
  });

  // 限制拖拽范围
  const limitedX = transform?.x ? Math.min(Math.max(transform.x, 0), maxX) : 0;
  const style = {
    transform: `translate3d(${limitedX}px, 0, 0)`,
    touchAction: 'none',
    zIndex: 10,
    transition: isDragging ? 'none' : 'transform 0.2s',
  };

  // 拖到最右侧自动解锁
  React.useEffect(() => {
    if (!unlocked && limitedX >= maxX) {
      onUnlock?.();
    }
  }, [limitedX, maxX, onUnlock, unlocked]);

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="w-14 h-14 bg-gradient-to-r from-blue-400 to-blue-500 border-4 border-white shadow-lg flex items-center justify-center cursor-pointer select-none absolute left-0 touch-none rounded-full"
    >
      {/* 渐变光晕 */}
      <div className="absolute right-[-18px] top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-200 opacity-40 rounded-full blur-lg z-[-1]" />
      <span className="text-white font-extrabold text-2xl drop-shadow-lg">→</span>
    </div>
  );
}

const SlideToUnlock = ({ onUnlock, className }: SlideToUnlockProps) => {
  const [unlocked, setUnlocked] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleUnlock = useCallback(() => {
    setUnlocked(true);
    onUnlock?.();
  }, [onUnlock]);

  return (
    <div className={`flex items-center justify-center w-full h-[200px] ${className || ''}`}>
      <div className="relative w-80 h-16 bg-white rounded-full shadow-lg overflow-hidden border-2 border-gray-100">
        <AnimatePresence>
          {!unlocked && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              className="absolute inset-0 flex items-center justify-center text-gray-400 text-lg font-semibold"
            >
              Slide to Unlock
            </motion.div>
          )}
        </AnimatePresence>
        {/* 只在客户端渲染拖拽按钮，避免hydration错误 */}
        {!unlocked && isClient && (
          <DndContext>
            <DraggableButton maxX={240} onUnlock={handleUnlock} unlocked={unlocked} />
          </DndContext>
        )}
        {unlocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center text-green-500 text-xl font-bold"
          >
            Unlocked!
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SlideToUnlock;
