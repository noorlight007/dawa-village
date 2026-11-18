"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import emblem from "@/assets/emblem.png";
import { IconClose, IconMenu } from "./Icons";
import TopLink from "./TopLink";

const links = [
  { href: "#stay", label: "The stay" },
  { href: "#spaces", label: "Spaces" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Close the mobile menu on a tap/click outside it, on Escape, or when the screen gets wide.
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 901px)");
    const onMq = () => mq.matches && setOpen(false);
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  return (
    <nav ref={navRef} className={`nav${open ? " nav--open" : ""}`} aria-label="Main">
      <div className="nav__bar">
        <TopLink className="nav__brand" aria-label="Dawa Village — back to top" onClick={() => setOpen(false)}>
          <span className="nav__emblem">
            <Image src={emblem} alt="" width={40} height={40} preload />
          </span>
          <span className="nav__wordmark">
            <span className="nav__name">DAWA VILLAGE</span>
            <span className="nav__place">Kampala · Uganda</span>
          </span>
        </TopLink>

        <div className="nav__links">
          {links.map((l) => (
            <a key={l.href} className="nav__link" href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="nav__actions">
          <TopLink focusPlanner className="btn btn--white nav__cta">Plan your stay</TopLink>
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <IconClose size={22} /> : <IconMenu size={22} />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="nav__mobile" hidden={!open}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <TopLink focusPlanner className="btn btn--white" onClick={() => setOpen(false)}>
          Plan your stay
        </TopLink>
      </div>
    </nav>
  );
}
