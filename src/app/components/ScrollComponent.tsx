"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ScrollComponent() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const scrollHandler = () => {
    let st = window.scrollY;
    if (st > lastScrollTop){
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollTop(st <= 0 ? 0 : st);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [lastScrollTop]);

  return (
    <div className={`flex w-full h-[10vh] text-white justify-center items-center appear ${isVisible ? "" : "hidden"}`}>
      <Link href="/">
        <button className="p-1 transition-all duration-100 ease-in-out rounded border-b-2
        hover:bg-zinc-700 hover:border-b-4 hover:border-t-2 hover:border-white hover:border-l-2 hover:border-r-2
        active:transform active:border-b-0 active:translate-y-0 text-xl">
          Početna
        </button>
      </Link>
    </div>
  );
}