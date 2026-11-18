import Image from "next/image";
import { photos } from "@/lib/photos";

const privateItems = ["Private guest bedroom", "[Bathroom: en-suite or private?]", "Fresh linens and towels"];
const sharedItems = ["Landscaped garden and lawn", "Courtyard and parking", "[Kitchen / dining access?]"];

export default function Stay() {
  return (
    <section id="stay" className="wrap stay">
      <div className="stay__media">
        <Image
          src={photos.gardenSquare.src}
          alt={photos.gardenSquare.alt}
          placeholder="blur"
          sizes="(max-width: 900px) 100vw, 480px"
          className="stay__img"
        />
        <figure className="stay__quote">
          <blockquote>“Treat the garden as your own.”</blockquote>
          <figcaption>— Your hosts</figcaption>
        </figure>
      </div>

      <div className="stay__copy">
        <p className="eyebrow">The stay</p>
        <h2 className="h2">
          A room of your own.
          <br />
          <em>A home we share.</em>
        </h2>
        <p className="lead">
          Dawa Village is our family home, set within a residential development in Kampala. When a room
          sits empty, we open it to guests who&apos;d rather feel at home than check into a hotel.
        </p>
        <p className="lead">
          You&apos;ll have a private bedroom to retreat to, and you&apos;re welcome across the gardens,
          terraces and courtyard. We live here too, so there&apos;s always someone nearby for directions, a
          driver recommendation, or a cup of tea.
        </p>

        <div className="stay__lists">
          <div>
            <h3 className="stay__listTitle">Just for you</h3>
            <ul className="dots dots--accent">
              {privateItems.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="stay__listTitle">Shared with us</h3>
            <ul className="dots">
              {sharedItems.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
