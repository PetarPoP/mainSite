"use client";

import { ReactNode } from "react";

export function Copy({
      value,
      children,
    }: {
      value: string;
      children: ReactNode;
    }) {
      return (
        <div
          className="flex justify-center items-center"
          onClick={() => {
            navigator.clipboard.writeText(value);
          }}
        >
          {children}
    </div>
  );
}
