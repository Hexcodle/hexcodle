"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import { ExternalLink } from "lucide-react";

export const INBOXED_STORAGE_KEY = "hasSeenInboxedModal_v1";

export function InboxedPill({ onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="View Inboxed game announcement"
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-serif font-bold bg-blue-50 text-blue-900 border border-blue-200 hover:bg-blue-100 hover:border-blue-300 hover:text-blue-950 transition-colors shadow-sm cursor-pointer select-none ${className}`}
    >
      <span className="text-sm leading-none">🎉</span>
      <span>We Made a New Game: Inboxed!</span>
      <span className="text-sm leading-none">🎉</span>
    </button>
  );
}

export default function InboxedModal({
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
}) {
  const [internalOpen, setInternalOpen] = useState(false);

  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const handleOpenChange = (newOpen) => {
    if (isControlled) {
      controlledOnOpenChange?.(newOpen);
    } else {
      setInternalOpen(newOpen);
    }
  };

  const handleLinkClick = () => {
    handleOpenChange(false);
  };

  // Inboxed brand tiles
  const tiles = [
    { letter: "I", rotate: "-rotate-6", bg: "bg-[#D8FFC5]" },
    { letter: "N", rotate: "rotate-6", bg: "bg-[#C4F7CA]" },
    { letter: "B", rotate: "-rotate-6", bg: "bg-[#D8FFC5]" },
    { letter: "O", rotate: "rotate-6", bg: "bg-[#C4F7CA]" },
    { letter: "X", rotate: "-rotate-6", bg: "bg-[#D8FFC5]" },
    { letter: "E", rotate: "rotate-6", bg: "bg-[#C4F7CA]" },
    { letter: "D", rotate: "-rotate-6", bg: "bg-[#D8FFC5]" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-sm:max-w-[425px] max-w-xl overflow-auto max-h-[90%] bg-cream-50 border-gray-200">
        <DialogHeader className="space-y-0">
          <DialogTitle className="font-serif text-2xl font-bold">
            We Made a New Game: Inboxed! 🎉
          </DialogTitle>
        </DialogHeader>

        <div className="font-sans space-y-4 text-gray-700">
          <p>
            Hey Hexcodlers! Thanks so much for all the love and support you show Hexcodle every day. We have exciting news to share: <strong>we made a brand new daily word game called{" "}
              <a
                href="https://inboxed.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-500 font-bold underline"
              >
                Inboxed
              </a>
            </strong>, and we think you&apos;re going to love it!
          </p>
          <p>
            Inboxed is <strong>a game fully playable inside your email</strong>, and if you're a serial morning email-checker like us, we think you'll love it.
          </p>

          <p>
            If you're a fan of Hexcodle and daily word games, you should give Inboxed a try and let us know what you think! Head over to{" "}
            <a
              href="https://inboxed.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-500 font-bold underline"
            >
              inboxed.fun
            </a>{" "}
            to check it out.
          </p>

          <div className="flex items-center justify-center gap-3 sm:gap-4 py-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hexparrot-animated.gif"
              alt="Hexavier the Parrot"
              width={75}
              height={75}
              className="object-contain"
            />
            <span className="text-gray-400 font-bold text-xl sm:text-2xl select-none">
              ✕
            </span>
            <div className="inline-flex items-center justify-center py-1" aria-label="INBOXED">
              {tiles.map((tile, i) => (
                <span
                  key={i}
                  className={`w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center font-extrabold text-xs sm:text-sm border-2 border-zinc-900 rounded-md shadow-sm select-none text-zinc-900 -mr-[3px] last:mr-0 ${tile.bg} ${tile.rotate}`}
                >
                  {tile.letter}
                </span>
              ))}
            </div>
          </div>

          <p>
            As always happy Hexcodle-ing! (and Inboxed-ing?)
            <br />
            <br />
            - Ekim &amp; Hannah 💚
          </p>
        </div>

        <DialogFooter className="flex flex-row justify-between sm:justify-between items-center gap-2 pt-2">
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              className="font-sans font-bold text-gray-600 border-gray-300"
            >
              Close
            </Button>
          </DialogClose>
          <Button
            asChild
            className="bg-blue-900 hover:bg-blue-800 text-white font-sans font-bold shadow-sm"
          >
            <a
              href="https://inboxed.fun"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="inline-flex items-center gap-1.5"
            >
              <span>Play Inboxed</span>
              <ExternalLink className="w-4 h-4 ml-0.5" />
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
