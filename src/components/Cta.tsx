import Image from "next/image";
import { photos } from "@/lib/photos";
import TopLink from "./TopLink";

export default function Cta() {
  return (
    <section aria-label="Book your stay" className="wrap wrap--wide cta-wrap">
      <div className="cta">
        <Image src={photos.houseGarden.src} alt="" fill placeholder="blur" sizes="(max-width: 1320px) 100vw, 1240px" className="cta__img" />
        <div className="cta__shade" aria-hidden="true" />
        <div className="cta__content">
          <h2 className="h2">
            Your room in Kampala is <em>waiting.</em>
          </h2>
          <p>Tell us your dates and we&apos;ll take it from there.</p>
          <div className="cta__buttons">
            <TopLink focusPlanner className="btn btn--accent">Plan your stay</TopLink>
            <a href="#gallery" className="btn btn--glass">See the gallery</a>
          </div>
        </div>
      </div>
    </section>
  );
}
