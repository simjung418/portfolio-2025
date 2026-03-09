"use client";

import Image from "next/image";

type Prop = {
  src: string;
  alt: string;
};

export default function ShowImage({ src, alt }: Prop) {
  return (
    <figure className="w-full">
      <div className="rounded-2xl bg-white/5 backdrop-blur-xs p-1 shadow-lg md:p-2">
        <div className="relative aspect-video overflow-hidden rounded-xl bg-transparent">
          <Image src={src} alt={alt} fill className="object-contain" />
        </div>
      </div>
      <figcaption className="mt-3 text-center text-sm text-neutral-500 md:text-base">
        {alt}
      </figcaption>
    </figure>
  );
}
