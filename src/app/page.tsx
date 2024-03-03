'use client'
import styles from './page.module.css'
import { useEffect } from 'react';
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

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  },[])

  return (
      <>
        <main className={styles.main}>
          <ZoomParallax/>
        </main>
          <div className="flex-col flex items-center justify-center text-white w-full">
              <div className="name min-w-[350px] mb-[50vh] stick flex items-center justify-center">
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
              <p className="text-center text-pretty md:max-w-[500px] mt-6 md:text-xl text-xs">
                  Student sam računarstva u Splitu. U svoje slobodno vrijeme volim
                  programirati i fotografirati te neke od mojih projekata i fotografija
                  možete pronaći na ovoj stranici. Na raspolaganju sam za više
                  informacija.
              </p>
              <div className="flex flex-col items-center gap-4 md:flex-row">
                  <Link href="/projekti">
                      <button className="p-1 transition-all duration-100 ease-in-out rounded border-b-2
                      hover:bg-zinc-700 hover:border-b-4 hover:border-t-2 hover:border-white hover:border-l-2 hover:border-r-2
                      active:transform active:border-b-0 active:translate-y-0
                      mt-2 text-xl">
                          Projekti
                      </button>
                  </Link>
                  <Link href="/galerija" scroll={true}>
                      <button className="p-1 transition-all duration-100 ease-in-out rounded border-b-2
                      hover:bg-zinc-700 hover:border-b-4 hover:border-t-2 hover:border-white hover:border-l-2 hover:border-r-2
                      active:transform active:border-b-0 active:translate-y-0
                      mt-2 text-xl">
                          Galerija
                      </button>
                  </Link>
              </div>
        <h2 className="md:text-3xl text-xl font-bold mt-4">Lokacija</h2>
        <div className="flex flex-col items-center gap-2 md:flex-row">
            <div className="flex gap-1">
                <RiMapPin2Line className="text-xl"/>
                <h3 className="text-md underline">Split</h3>
            </div>
            <div className="flex gap-1">
                      <RiMapPin2Line className="text-xl"/>
                      <h3 className="text-md underline">Livno</h3>
                  </div>
              </div>
              <h2 className="md:text-3xl text-xl font-bold mt-6">Kontakt</h2>
              <div className="flex flex-col items-center gap-2 md:flex-row mb-2">
                  <Copy value="+385 99 373 2936">
                      <RiPhoneLine className="md:text-xl text-md mr-1"/>
                      <h3 className="md:text-md text-sm ml-1">
                          HR:
                          <Link href="tel:+385993732936" className="md:text-md text-sm ml-1">
                              <button className="p-1 transition-all duration-100 ease-in-out rounded border-b-2
                  hover:bg-zinc-700 hover:border-b-4 hover:border-t-2 hover:border-white hover:border-l-2 hover:border-r-2
                  active:transform active:border-b-0 active:translate-y-0">
                                  +385 99 373 2936
                              </button>
                          </Link>
                      </h3>
                  </Copy>
                  <Copy value="+387 63 632 005">
                      <RiPhoneLine className="md:text-xl text-md mr-1"/>
                      <h3 className="md:text-md text-sm ml-1">
                          BiH:
                          <Link href="tel:+38763632005" className="md:text-md text-sm ml-1 ">
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
                  <RiMailLine className="md:text-xl text-md mr-1"/>
                  <h3 className="md:text-md text-sm ml-1">
                      Email:
                      <Link
                          href="mailto:petarpopovic719@gmail.com"
                          className="md:text-md text-sm ml-1"
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
                  <RiInstagramLine className="md:size-12 size-10 mt-7 p-1 transition-all duration-100 ease-in-out rounded
                  hover:bg-zinc-700 hover:border-b-4 hover:border-t-2 hover:border-white hover:border-l-2 hover:border-r-2
                  active:transform active:border-b-0 active:translate-y-0
                  md:mb-[18vh] mb-4"/>
              </Link>
          </div>
      </>
  )
}