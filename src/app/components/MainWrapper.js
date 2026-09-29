"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function MainWrapper({ children }) {
  const pathname = usePathname();
  const normalizedPath = pathname?.replace(/\/$/, "") || "/";

  // Non-game pages get pt-20, game pages (Hexcodle & Mini) get pt-16
  const isGamePage =
    normalizedPath === "/" ||
    normalizedPath === "/mini" ||
    (normalizedPath.startsWith("/archive/") && normalizedPath !== "/archive") ||
    (normalizedPath.startsWith("/mini/archive/") &&
      normalizedPath !== "/mini/archive");

  return (
    <main className={`${isGamePage ? "pt-16" : "pt-20"} min-h-screen`}>
      {children}
    </main>
  );
}
