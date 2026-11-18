import Image from "next/image";
import { photos } from "@/lib/photos";
import StayPlanner from "./StayPlanner";

export default function Hero() {
  return (
    <header id="top" className="hero">
      <Image
        src={photos.frontSteps.src}
        alt={photos.frontSteps.alt}
        fill
        preload
        fetchPriority="high"
        placeholder="blur"
        quality={75}
        sizes="100vw"
        className="hero__img"
      />
      <div className="hero__shade" aria-hidden="true" />
      <div className="hero__content wrap">
        <p className="hero__eyebrow">
          <span aria-hidden="true" />A family home stay in Kampala<span aria-hidden="true" />
        </p>
        <h1 className="hero__title">
          Luxury beyond home.
          <br />
          <em>Your elite cottage escape.</em>
        </h1>
        <p className="hero__intro">
          We&apos;ve opened a private room in our family home at Dawa Village to guests. Wake up to
          landscaped gardens, quiet courtyards and hosts who know Kampala well.
        </p>
        <StayPlanner />
      </div>
    </header>
  );
}
