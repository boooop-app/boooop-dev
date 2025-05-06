import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import { useState, useEffect } from "react";

// 使用HSL颜色空间生成协调的颜色
const generateColor = (baseHue: number, variation: number = 30) => {
  const hue = (baseHue + Math.random() * variation) % 360;
  const saturation = 70 + Math.random() * 20; // 70-90% 饱和度
  const lightness = 50 + Math.random() * 10; // 50-60% 亮度
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

// 生成渐变背景
const generateGradient = (baseHue: number) => {
  const color1 = generateColor(baseHue);
  const color2 = generateColor((baseHue + 60) % 360); // 互补色
  return `linear-gradient(135deg, ${color1}, ${color2})`;
};

// 预定义一些基础色相
const BASE_HUES = [
  0,    // 红色
  120,  // 绿色
  240,  // 蓝色
  60,   // 黄色
  300,  // 紫色
  180,  // 青色
];

export function MainBg() {
  const [backgrounds, setBackgrounds] = useState<string[]>([]);

  useEffect(() => {
    // 生成20个背景样式
    const newBackgrounds = Array.from({ length: 20 }, () => {
      const baseHue = BASE_HUES[Math.floor(Math.random() * BASE_HUES.length)];
      return generateGradient(baseHue);
    });
    setBackgrounds(newBackgrounds);
  }, []);

  return (
    <div className="relative flex w-full flex-col items-center justify-center pb-20 -mt-10 overflow-hidden touch-none">
      <div className="w-full h-full fixed inset-0 pointer-events-none" />
      <Marquee pauseOnHover className="[--duration:20s] rotate-[-15deg]">
        {Array.from({ length: 5 }).map((_, index) => (
          <div 
            key={index} 
            className="p-2 border-2 border-gray-300 rounded-lg m-2 w-32 h-32 transition-all duration-500 hover:scale-105" 
            style={{ 
              background: backgrounds[index] || "linear-gradient(135deg, #ffffff, #f0f0f0)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
            }}
          >
            <Image src="/images/boooop.png" alt="main_bg" width={120} height={120} className="w-full h-full object-contain" />
          </div>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s] rotate-[-15deg]">
        {Array.from({ length: 5 }).map((_, index) => (
          <div 
            key={index} 
            className="p-2 border-2 border-gray-300 rounded-lg m-2 w-32 h-32 transition-all duration-500 hover:scale-105" 
            style={{ 
              background: backgrounds[index + 5] || "linear-gradient(135deg, #ffffff, #f0f0f0)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
            }}
          >
            <Image src="/images/boooop.png" alt="main_bg" width={120} height={120} className="w-full h-full object-contain" />
          </div>
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:20s] rotate-[-15deg]">
        {Array.from({ length: 5 }).map((_, index) => (
          <div 
            key={index} 
            className="p-2 border-2 border-gray-300 rounded-lg m-2 w-32 h-32 transition-all duration-500 hover:scale-105" 
            style={{ 
              background: backgrounds[index + 10] || "linear-gradient(135deg, #ffffff, #f0f0f0)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
            }}
          >
            <Image src="/images/boooop.png" alt="main_bg" width={120} height={120} className="w-full h-full object-contain" />
          </div>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s] rotate-[-15deg]">
        {Array.from({ length: 5 }).map((_, index) => (
          <div 
            key={index} 
            className="p-2 border-2 border-gray-300 rounded-lg m-2 w-32 h-32 transition-all duration-500 hover:scale-105" 
            style={{ 
              background: backgrounds[index + 15] || "linear-gradient(135deg, #ffffff, #f0f0f0)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
            }}
          >
            <Image src="/images/boooop.png" alt="main_bg" width={120} height={120} className="w-full h-full object-contain" />
          </div>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
