import Image from "next/image";
import { photos } from "@/lib/photos";

const spaces = [
  {
    photo: photos.aerial,
    title: "The house",
    text: "Two storeys with curved, wraparound balconies — catch the breeze upstairs at sunset.",
  },
  {
    photo: photos.courtyard,
    title: "The courtyard",
    text: "A shaded, paved courtyard with space to park right by the front door.",
  },
  {
    photo: photos.houseGarden,
    title: "The terraces",
    text: "Stone-walled planters and sweeping steps that lead down to the lawn.",
  },
];

export default function Spaces() {
  return (
    <section id="spaces" className="spaces">
      <div className="wrap">
        <div className="spaces__head">
          <div>
            <p className="eyebrow eyebrow--light">Around the house</p>
            <h2 className="h2">Spaces to slow down in</h2>
          </div>
          <p className="spaces__intro">
            Stone terraces, a paved courtyard and wraparound balconies — the house was built for
            unhurried mornings and long Kampala evenings.
          </p>
        </div>
        <div className="spaces__grid">
          {spaces.map((s) => (
            <article key={s.title} className="space">
              <div className="space__media zoom">
                <Image
                  src={s.photo.src}
                  alt={s.photo.alt}
                  placeholder="blur"
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 400px"
                />
              </div>
              <h3 className="space__title">{s.title}</h3>
              <p className="space__text">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
