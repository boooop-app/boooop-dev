"use client";

import { useEffect, useRef } from "react";
import Globe from "globe.gl";

// 定义数据类型
interface SocialPoint {
  lat: number;
  lng: number;
  interactions: number;
}

// 模拟数据，生成一些社交交互数据（经纬度+交互次数）
const mockData: SocialPoint[] = Array.from({ length: 50 }, () => ({
  lat: (Math.random() - 0.5) * 180,   // 纬度 -90 ~ 90
  lng: (Math.random() - 0.5) * 360,   // 经度 -180 ~ 180
  interactions: Math.floor(Math.random() * 1000) + 1, // 交互次数
}));

export default function SocialGlobe() {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!globeRef.current) return;

    const globe = new Globe(globeRef.current)
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-night.jpg")
      .backgroundImageUrl("//unpkg.com/three-globe/example/img/night-sky.png")
      .pointsData(mockData)
      .pointLat("lat")
      .pointLng("lng")
      .pointAltitude((d) => 0.01 + (d as SocialPoint).interactions / 10000)
      .pointColor((d) => {
        const interactions = (d as SocialPoint).interactions;
        if (interactions > 800) return "rgba(255, 60, 0, 0.9)";      // 红色
        if (interactions > 500) return "rgba(255, 140, 0, 0.85)";     // 橙色
        if (interactions > 200) return "rgba(255, 200, 0, 0.8)";      // 黄色
        return "rgba(255, 255, 120, 0.7)";                            // 浅黄
      })
      .pointRadius((d) => 0.2 + (d as SocialPoint).interactions / 2000);

    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;
    globe.controls().enableZoom = true;
  }, []);

  return (
    <div
      ref={globeRef}
      style={{ width: "100%", height: "100vh", background: "black" }}
    />
  );
}
