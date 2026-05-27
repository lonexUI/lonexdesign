"use client";

import { useState } from "react";

export default function TerminalCopy({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className="copy-btn"
      style={{ cursor: 'pointer', color: 'inherit', fontFamily: 'inherit' }}
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
