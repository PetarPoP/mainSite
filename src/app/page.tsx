'use client'
import styles from './page.module.css'
import {useEffect, useRef} from 'react';
import Lenis from '@studio-freight/lenis'
import ZoomParallax from './components/ZoomParallax';
import Link from "next/link";
import {Copy} from "@/app/components/copy";
import {
    RiMapPin2Line,
    RiPhoneLine,
    RiMailLine,
    RiInstagramLine,
} from 'react-icons/ri';

export default function Home() {

  useEffect(() => {
  if (typeof window !== 'undefined') {
    const lenis = new Lenis()

    // @ts-ignore
      function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }
}, [])

  return (
      <>
        <main className={styles.main}>
          <ZoomParallax/>
        </main>
          <div className="flex-col flex items-center justify-center text-white w-full">
              <div id="stick" className="name min-w-[350px] mb-[50vh] stick flex items-center justify-center">
                  {'Petar Popović'.split('').map((letter, index) => {
                      return (
                          <span
                              key={index}
                              className="inline-block cursor-pointer md:text-7xl text-2xl font-bold"
                          >
                            {letter === ' ' ? '\u00A0' : letter}
                        </span>
                      )
                  })}
              </div>
              <div id="target"
                   className="flex-col flex items-center justify-center w-full
                   -mt-[20vh] mb-[20vh] md:mb-0 md:mt-0">
                  <div className="flex flex-row items-center gap-2">
                      <Link href="/projekti">
                          <button className="p-1 transition-all duration-100 ease-in-out rounded border-b-2
                      hover:bg-zinc-700 hover:border-b-4 hover:border-t-2 hover:border-white hover:border-l-2 hover:border-r-2
                      active:transform active:border-b-0 active:translate-y-0
                      mt-2 md:text-xl text-md font-bold">
                              Projekti
                          </button>
                      </Link>
                      <Link href="/galerija" scroll={true} className="flex flex-row">
                          <button className="p-1 transition-all duration-100 ease-in-out rounded border-b-2
                      hover:bg-zinc-700 hover:border-b-4 hover:border-t-2 hover:border-white hover:border-l-2 hover:border-r-2
                      active:transform active:border-b-0 active:translate-y-0
                      mt-2 md:text-xl text-md font-bold">
                              Galerija
                          </button>
                      </Link>
                  </div>
                  <p className="text-center text-pretty md:max-w-[500px] max-w-[200px] mt-6 md:text-xl text-xs">
                      Student sam računarstva u Splitu. U svoje slobodno vrijeme volim
                      programirati i fotografirati te neke od mojih projekata i fotografija
                      možete pronaći na ovoj stranici. Na raspolaganju sam za više
                      informacija.
                  </p>
                  <h2 className="md:text-3xl text-lg font-bold mt-4 md:mt-6 md:mb-2 mb-1">Lokacija</h2>
                  <div className="flex flex-row items-center gap-2">
                      <div className="flex gap-1">
                          <RiMapPin2Line className="md:text-lg text-xs mr-1 translate-y-1/4"/>
                          <h3 className="md:text-lg text-xs underline">Split</h3>
                      </div>
                      <div className="flex gap-1">
                          <RiMapPin2Line className="md:text-lg text-xs mr-1 translate-y-1/4"/>
                          <h3 className="md:text-lg text-xs underline">Livno</h3>
                      </div>
                  </div>
                  <h2 className="md:text-3xl text-lg font-bold mt-4 md:mt-6 md:mb-2 mb-1">Kontakt</h2>
                  <div className="flex flex-col items-center gap-2 md:flex-row mb-2">
                      <Copy value="+385 99 373 2936">
                          <RiPhoneLine className="md:text-xl text-xs mr-1"/>
                          <h3 className="md:text-md text-xs ml-1">
                              HR:
                              <Link href="tel:+385993732936" className="md:text-md text-xs ml-1">
                                  <button className="p-1 transition-all duration-100 ease-in-out rounded border-b-2
                  hover:bg-zinc-700 hover:border-b-4 hover:border-t-2 hover:border-white hover:border-l-2 hover:border-r-2
                  active:transform active:border-b-0 active:translate-y-0">
                                      +385 99 373 2936
                                  </button>
                              </Link>
                          </h3>
                      </Copy>
                      <Copy value="+387 63 632 005">
                          <RiPhoneLine className="md:text-xl text-xs mr-1"/>
                          <h3 className="md:text-md text-xs ml-1">
                              BiH:
                              <Link href="tel:+38763632005" className="md:text-md text-xs ml-1 ">
                                  <button className="p-1 transition-all duration-100 ease-in-out rounded border-b-2
                  hover:bg-zinc-700 hover:border-b-4 hover:border-t-2 hover:border-white hover:border-l-2 hover:border-r-2
                  active:transform active:border-b-0 active:translate-y-0">
                                      +387 63 632 005
                                  </button>
                              </Link>
                          </h3>
                      </Copy>
                  </div>
                  <Copy value="petarpopovic719@gmail.com">
                      <RiMailLine className="md:text-xl text-xs mr-1"/>
                      <h3 className="md:text-md text-xs ml-1">
                          Email:
                          <Link
                              href="mailto:petarpopovic719@gmail.com"
                              className="md:text-md text-xs ml-1"
                          >
                              <button className="p-1 transition-all duration-100 ease-in-out rounded border-b-2
                  hover:bg-zinc-700 hover:border-b-4 hover:border-t-2 hover:border-white hover:border-l-2 hover:border-r-2
                  active:transform active:border-b-0 active:translate-y-0">
                                  petarpopovic719@gmail.com
                              </button>
                          </Link>
                      </h3>
                  </Copy>
                  <Link href="https://www.instagram.com/pop_2110/" target="_blank">
                      <RiInstagramLine className="md:size-12 size-8 mt-4 p-1 transition-all duration-100 ease-in-out rounded
                  hover:bg-zinc-700 hover:border-b-4 hover:border-t-2 hover:border-white hover:border-l-2 hover:border-r-2
                  active:transform active:border-b-0 active:translate-y-0
                  md:mb-[18vh] mb-4"/>
                  </Link>
              </div>
          </div>
      </>
  )
}