import Image from "next/image";
import whatsappIcon from "@/assets/whatsapp.png";
import { site, whatsappLink } from "@/lib/site";

export default function WhatsAppButton() {
  const external = Boolean(site.whatsapp);
  return (
    <a
      href={whatsappLink("Hello Dawa Village! I'd like to ask about a stay.")}
      className="wa-btn"
      aria-label="Chat with us on WhatsApp"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <Image src={whatsappIcon} alt="" width={44} height={44} unoptimized className="wa-btn__icon" />
    </a>
  );
}
