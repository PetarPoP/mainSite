"use client";
import { useState } from "react";
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
import ScrollComponent from "@/app/components/ScrollComponent";
export function Photos({
                           photos,
                       }: {
    photos: (Photo & {
        description: string;
    })[];
}) {
    const [index, setIndex] = useState(-1);
    return (
        <>
            <ScrollComponent/>
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
