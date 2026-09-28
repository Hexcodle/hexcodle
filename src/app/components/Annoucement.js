"use client";

import React, { useState } from "react";
import InboxedModal, { InboxedPill } from "./InboxedModal";

export default function Announcement({ children, onClick }) {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    onClick?.(e);
    setOpen(true);
  };

  if (children) {
    return (
      <>
        <div onClick={handleClick} className="inline-block cursor-pointer">
          {children}
        </div>
        <InboxedModal open={open} onOpenChange={setOpen} />
      </>
    );
  }

  return (
    <>
      <InboxedPill onClick={() => setOpen(true)} />
      <InboxedModal open={open} onOpenChange={setOpen} />
    </>
  );
}

export { InboxedPill };
