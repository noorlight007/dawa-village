import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 24, children, ...rest }: P) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const IconHome = (p: P) => (
  <Base {...p}><path d="M3 20V9l9-6 9 6v11" /><path d="M9 20v-6h6v6" /></Base>
);
export const IconLeaf = (p: P) => (
  <Base {...p}><path d="M12 22V12" /><path d="M12 12c-4 0-7-3-7-7 4 0 7 3 7 7z" /><path d="M12 15c3 0 6-2.5 6-6-3 0-6 2.5-6 6z" /></Base>
);
export const IconCar = (p: P) => (
  <Base {...p}><rect x="3" y="10" width="18" height="7" rx="2" /><path d="M6 10l2-4h8l2 4" /><circle cx="7.5" cy="17.5" r="1.5" /><circle cx="16.5" cy="17.5" r="1.5" /></Base>
);
export const IconPeople = (p: P) => (
  <Base {...p}><circle cx="9" cy="8" r="3.5" /><circle cx="17" cy="9.5" r="2.5" /><path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5" /><path d="M15.5 14.6c2.6-.4 4.9 1.2 5.8 4.4" /></Base>
);
export const IconPlus = (p: P) => <Base {...p}><path d="M12 5v14M5 12h14" /></Base>;
export const IconMinus = (p: P) => <Base {...p}><path d="M5 12h14" /></Base>;
export const IconArrowRight = (p: P) => <Base {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Base>;
export const IconChevronLeft = (p: P) => <Base {...p}><path d="M15 6l-6 6 6 6" /></Base>;
export const IconChevronRight = (p: P) => <Base {...p}><path d="M9 6l6 6-6 6" /></Base>;
export const IconClose = (p: P) => <Base {...p}><path d="M6 6l12 12M18 6L6 18" /></Base>;
export const IconMenu = (p: P) => <Base {...p}><path d="M4 7h16M4 12h16M4 17h16" /></Base>;
export const IconChat = (p: P) => (
  <Base {...p}><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.3A8.4 8.4 0 1 1 21 11.5z" /><path d="M9 9.5c.3 1.9 2.6 4.3 4.6 4.8l1.2-1.2 1.7.8" /></Base>
);
