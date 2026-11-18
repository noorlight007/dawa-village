"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** After scrolling, put the cursor in the check-in field (for "Plan your stay"). */
  focusPlanner?: boolean;
};

/**
 * A link that smoothly scrolls to the very top of the page without adding
 * "#top" (or any hash) to the address bar — the URL stays the clean base URL.
 * Without JavaScript it still works as a normal link to "/".
 */
export default function TopLink({ focusPlanner, onClick, children, ...rest }: Props) {
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    // Let Ctrl/Cmd/Shift-click open a new tab as usual.
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });

    // Drop any existing hash so the address bar shows just the base URL.
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    if (focusPlanner) {
      // Focus only once scrolling has finished, so it never cuts the scroll short.
      const focus = () =>
        document.querySelector<HTMLInputElement>("#plan input")?.focus({ preventScroll: true });
      if (window.scrollY === 0 || reduce) {
        focus();
      } else {
        let done = false;
        const finish = () => {
          if (done) return;
          done = true;
          window.removeEventListener("scrollend", onEnd);
          focus();
        };
        // Ignore "scrollend" from an earlier scroll: only finish once we're at the top.
        const onEnd = () => window.scrollY <= 1 && finish();
        window.addEventListener("scrollend", onEnd);
        window.setTimeout(finish, 1600); // fallback for browsers without "scrollend"
      }
    }
  };

  return (
    <a href="/" onClick={handle} {...rest}>
      {children}
    </a>
  );
}
