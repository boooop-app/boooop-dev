"use client";

import { ShimmerButton } from "@/components/magicui/shimmer-button";

interface GlobeFooterProps {
    onLoginOrRegister: () => void;
}

export default function GlobeFooter({ onLoginOrRegister }: GlobeFooterProps) {
    return (
        <div className="w-full flex justify-center absolute bottom-10 left-0 z-10">
            <ShimmerButton background="rgba(46, 142, 255, 0.6)" onClick={onLoginOrRegister}>
                Login / Register to Boooop World
            </ShimmerButton>
        </div>
    );
} 