import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";


export function MainBg() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center pb-20 -mt-10 overflow-hidden touch-none">
      <div className="w-full h-full fixed inset-0 pointer-events-none" />
      <Marquee pauseOnHover className="[--duration:20s] rotate-[-15deg]">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="p-2 border-2 border-gray-300 rounded-lg m-2">
            <Image src="/images/demo_nft.jpg" alt="main_bg" width={120} height={120} />
          </div>
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s] rotate-[-15deg]">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="p-2 border-2 border-gray-300 rounded-lg m-2">
            <Image src="/images/demo_nft.jpg" alt="main_bg" width={120} height={120} />
          </div>
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:20s] rotate-[-15deg]">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="p-2 border-2 border-gray-300 rounded-lg m-2">
            <Image src="/images/demo_nft.jpg" alt="main_bg" width={120} height={120} />
          </div>
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:20s] rotate-[-15deg]">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="p-2 border-2 border-gray-300 rounded-lg m-2">
            <Image src="/images/demo_nft.jpg" alt="main_bg" width={120} height={120} />
          </div>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
