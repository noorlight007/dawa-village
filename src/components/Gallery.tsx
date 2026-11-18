"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { galleryOrder as photos } from "@/lib/photos";
import { IconChevronLeft, IconChevronRight, IconClose } from "./Icons";

export default function Gallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const n = photos.length;

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const prev = useCallback(() => setIndex((i) => (i - 1 + n) % n), [n]);
  const next = useCallback(() => setIndex((i) => (i + 1) % n), [n]);

  // Arrow keys move between photos while the viewer is open. Escape is handled by <dialog>.
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const onKey = (e: KeyboardEvent) => {
      if (!d.open) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    d.addEventListener("keydown", onKey);
    return () => d.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const current = photos[index];

  return (
    <section id="gallery" className="wrap gallery">
      <div className="gallery__head">
        <div>
          <p className="eyebrow">Gallery</p>
          <h2 className="h2">Around Dawa Village</h2>
        </div>
        <button type="button" className="btn btn--outline" onClick={() => open(0)}>
          View all {n} photos
        </button>
      </div>

      <div className="mosaic">
        {photos.map((p, i) => (
          <button
            key={p.caption}
            type="button"
            className={`mosaic__tile mosaic__tile--${i} zoom`}
            onClick={() => open(i)}
            aria-label={`Open photo: ${p.caption}`}
          >
            <Image
              src={p.src}
              alt=""
              placeholder="blur"
              sizes={i === 0 ? "(max-width: 900px) 100vw, 620px" : "(max-width: 620px) 100vw, (max-width: 900px) 50vw, 310px"}
            />
            <span className="mosaic__caption">{p.caption}</span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Photo viewer"
        onClick={(e) => {
          // Clicking the dark backdrop closes the viewer.
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="lightbox__inner">
          <div className="lightbox__top">
            <span>
              {current.caption} · {index + 1} of {n}
            </span>
            <button type="button" className="icon-btn" onClick={close} aria-label="Close photo viewer">
              <IconClose size={20} />
            </button>
          </div>
          <div className="lightbox__frame">
            <Image
              key={index}
              src={current.src}
              alt={current.alt}
              placeholder="blur"
              sizes="(max-width: 1100px) 100vw, 1100px"
              quality={85}
            />
          </div>
          <div className="lightbox__nav">
            <button type="button" className="icon-btn" onClick={prev} aria-label="Previous photo">
              <IconChevronLeft size={22} />
            </button>
            <button type="button" className="icon-btn" onClick={next} aria-label="Next photo">
              <IconChevronRight size={22} />
            </button>
          </div>
        </div>
      </dialog>
    </section>
  );
}
