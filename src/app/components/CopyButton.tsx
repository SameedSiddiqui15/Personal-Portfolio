"use client";

import { useState } from "react";

export default function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard refused; the address is still selectable text next to the button.
    }
  }
  return (
    <button type="button" className="chip" onClick={copy} aria-live="polite">
      {copied ? "Copied" : label}
    </button>
  );
}
