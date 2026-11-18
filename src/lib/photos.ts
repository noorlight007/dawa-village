import type { StaticImageData } from "next/image";
import dawa1 from "@/assets/gallery/dawa_1.webp";
import dawa2 from "@/assets/gallery/dawa_2.webp";
import dawa3 from "@/assets/gallery/dawa_3.webp";
import dawa4 from "@/assets/gallery/dawa_4.webp";
import dawa5 from "@/assets/gallery/dawa_5.webp";
import gardenSquare from "@/assets/gallery/dawa_garden_square.webp";

export type Photo = { src: StaticImageData; caption: string; alt: string };

// Static imports give Next.js the size and an automatic blur placeholder.
export const photos = {
  frontSteps: {
    src: dawa1,
    caption: "Front steps",
    alt: "The Dawa Village family home seen from the lawn, with stone steps leading up to the house",
  },
  houseGarden: {
    src: dawa2,
    caption: "House & garden",
    alt: "The house above curved timber steps and stone-walled garden terraces",
  },
  courtyard: {
    src: dawa3,
    caption: "Courtyard",
    alt: "The paved courtyard in front of the house, shaded by trees",
  },
  aerial: {
    src: dawa4,
    caption: "From above",
    alt: "Aerial view of the two-storey house with its round balconies and tiled roof",
  },
  garden: {
    src: dawa5,
    caption: "The garden",
    alt: "The landscaped lawn with tall trees, a stepping-stone path and stone terraces",
  },
  gardenSquare: {
    src: gardenSquare,
    caption: "The garden",
    alt: "The landscaped lawn with tall trees, a stepping-stone path and stone-walled terraces leading up to the house",
  },
} satisfies Record<string, Photo>;

export const galleryOrder: Photo[] = [
  photos.houseGarden,
  photos.courtyard,
  photos.aerial,
  photos.garden,
  photos.frontSteps,
];
