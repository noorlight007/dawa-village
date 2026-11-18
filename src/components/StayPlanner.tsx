"use client";

import { useEffect, useId, useState } from "react";
import { site, whatsappLink } from "@/lib/site";
import { IconArrowRight, IconMinus, IconPlus } from "./Icons";

const DAY = 86_400_000;

function toISO(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
function fromISO(s: string) {
  return new Date(`${s}T00:00:00`);
}
function pretty(s: string) {
  return fromISO(s).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export default function StayPlanner() {
  const id = useId();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [reviewed, setReviewed] = useState(false);

  // Set after mount, so the server render and the browser never disagree about "today".
  const [today, setToday] = useState<string | undefined>(undefined);
  useEffect(() => setToday(toISO(new Date())), []);
  const minOut = checkIn ? toISO(new Date(fromISO(checkIn).getTime() + DAY)) : today;

  const nights =
    checkIn && checkOut ? Math.round((fromISO(checkOut).getTime() - fromISO(checkIn).getTime()) / DAY) : 0;

  let error = "";
  if (reviewed) {
    if (!checkIn || !checkOut) error = "Please choose both a check-in and a check-out date.";
    else if (nights < 1) error = "Check-out needs to be at least one night after check-in.";
  }
  const ok = reviewed && !error;
  const guestsLabel = `${guests} ${guests === 1 ? "guest" : "guests"}`;
  const summary = ok
    ? `${nights} ${nights === 1 ? "night" : "nights"} · ${pretty(checkIn)} → ${pretty(checkOut)} · ${guestsLabel}`
    : "";
  const message = ok
    ? `Hello Dawa Village! I'd like to stay from ${pretty(checkIn)} to ${pretty(checkOut)} (${nights} ${
        nights === 1 ? "night" : "nights"
      }) for ${guestsLabel}. Is the room available?`
    : "";

  const reset = () => setReviewed(false);

  return (
    <form
      id="plan"
      className="planner"
      aria-label="Plan your stay"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        setReviewed(true);
      }}
    >
      <div className="planner__row">
        <label className="planner__field">
          <span>Check-in</span>
          <input
            type="date"
            value={checkIn}
            min={today}
            onChange={(e) => {
              const v = e.target.value;
              setCheckIn(v);
              if (checkOut && v && checkOut <= v) setCheckOut("");
              reset();
            }}
          />
        </label>
        <label className="planner__field">
          <span>Check-out</span>
          <input
            type="date"
            value={checkOut}
            min={minOut}
            onChange={(e) => {
              setCheckOut(e.target.value);
              reset();
            }}
          />
        </label>
        <div className="planner__field">
          <span id={`${id}-guests`}>Guests</span>
          <div className="stepper" role="group" aria-labelledby={`${id}-guests`}>
            <button
              type="button"
              aria-label="Fewer guests"
              disabled={guests <= 1}
              onClick={() => {
                setGuests((g) => Math.max(1, g - 1));
                reset();
              }}
            >
              <IconMinus size={18} />
            </button>
            <output aria-live="polite">{guestsLabel}</output>
            <button
              type="button"
              aria-label="More guests"
              disabled={guests >= site.maxGuests}
              onClick={() => {
                setGuests((g) => Math.min(site.maxGuests, g + 1));
                reset();
              }}
            >
              <IconPlus size={18} />
            </button>
          </div>
        </div>
        <button type="submit" className="btn btn--accent planner__submit">
          Review my stay <IconArrowRight size={18} />
        </button>
      </div>

      <div aria-live="polite" className="planner__status">
        {ok && (
          <div className="planner__summary">
            <p>{summary}</p>
            <a
              href={whatsappLink(message)}
              target={site.whatsapp ? "_blank" : undefined}
              rel={site.whatsapp ? "noopener noreferrer" : undefined}
            >
              Send this to us on WhatsApp →
            </a>
          </div>
        )}
        {error && <p className="planner__error">{error}</p>}
        {!reviewed && (
          <p className="planner__hint">
            Pick your dates and we&apos;ll confirm availability personally — usually within a few hours.
          </p>
        )}
      </div>
    </form>
  );
}
