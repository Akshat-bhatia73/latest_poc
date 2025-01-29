"use client";

import React from 'react';

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  minHeight?: string;
  placeholder?: string;
}

export function MarkdownEditor({
  value,
  onChange,
  minHeight = "200px",
  placeholder
}: MarkdownEditorProps) {
  return (
    <div className="h-full relative">
      <textarea
        className="input-field font-mono text-sm w-full h-full resize-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{ minHeight }}
      />
    </div>
  );
}