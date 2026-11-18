import { IconCar, IconHome, IconLeaf, IconPeople } from "./Icons";

const items = [
  { Icon: IconHome, title: "Private guest room", text: "Your own room in the main house" },
  { Icon: IconLeaf, title: "Terraced gardens", text: "Lawns, stone steps and greenery" },
  { Icon: IconCar, title: "Parking on site", text: "Inside the paved courtyard" },
  { Icon: IconPeople, title: "Hosted by family", text: "Local tips, a warm welcome" },
];

export default function Highlights() {
  return (
    <section aria-label="Highlights" className="wrap highlights">
      <ul className="highlights__list">
        {items.map(({ Icon, title, text }) => (
          <li key={title} className="highlights__item">
            <Icon size={26} strokeWidth={1.6} className="highlights__icon" />
            <div>
              <p className="highlights__title">{title}</p>
              <p className="highlights__text">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
