"use client";
import React, {useEffect, useRef, useState} from "react";
import PhotoAlbum, { Photo } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";
import Link from "next/link";
export function Photos({
                           photos,
                       }: {
    photos: (Photo & {
        description: string;
    })[];
}) {
    const [index, setIndex] = useState(-1);
    const [show, setShow] = useState(true);
    const prevScrollPos = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrollingUp = prevScrollPos.current > currentScrollPos;

            setShow(isScrollingUp);
            prevScrollPos.current = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            {show && (
                <div className={`flex w-full h-[8vh] text-white justify-center items-center appear sticky 
                top-0 z-50 color`}>
                    <Link href="/">
                        <button className="p-1 transition-all duration-100 ease-in-out rounded border-b-2
              hover:bg-zinc-700 hover:border-b-4 hover:border-t-2 hover:border-white hover:border-l-2 hover:border-r-2
              active:transform active:border-b-0 active:translate-y-0 text-xl">
                            Početna
                        </button>
                    </Link>
                </div>
            )}
            <div className="p-3 appear album">
                <PhotoAlbum
                    // @ts-ignore
                    renderPhoto={NextJsImage}
                    spacing={10}
                    photos={photos.map((p) => {
                        return {
                            ...p,
                            height: p.height / 12,
                            width: p.width / 12,
                        };
                    })}
                    layout="masonry"
                    columns={(containerWidth) => {
                        if (containerWidth < 1400) return 2;
                        return (containerWidth - 1400) / 300 + 2;
                    }}
                    targetRowHeight={150}
                    onClick={({index}) => setIndex(index)}
                />
            </div>

            <Lightbox
                slides={photos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
        </>
    );
}

interface NextJsImageProps extends RenderPhotoProps {
    photo: Photo & {
        description: string;
    };
}

export default function NextJsImage({
                                        photo,
                                        imageProps: {alt, title, sizes, className, onClick},
                                        wrapperStyle,
                                    }: NextJsImageProps) {
    return (
        <div
            className="wrapper group"
            style={{
                ...wrapperStyle,
                position: "relative",
            }}
        >
            <Image
                fill
                src={photo}
                placeholder={"blurDataURL" in photo ? "blur" : undefined}
                {...{ alt, title, className, onClick }}
                sizes={sizes}
                className={`${className} object-cover`}
            />
            {photo.description && (
                <div
                    className="w-full group-hover:h-16 h-6 transition-all bg-gradient-to-t
      from-black to-transparent absolute bottom-0 flex items-end justify-center opacity-0 group-hover:opacity-100"
                >
                    {photo.description}
                </div>
            )}
        </div>
    );
}
