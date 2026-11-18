import Image from "next/image";
import emblem from "@/assets/emblem.png";
import { site, whatsappLink } from "@/lib/site";
import TopLink from "./TopLink";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="footer">
      <div className="wrap">
        <div className="footer__main">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__emblem">
                <Image src={emblem} alt="" width={50} height={50} />
              </span>
              <span className="footer__name">Dawa Village</span>
            </div>
            <p>
              Luxury beyond home. A private room in our family home, in a residential development in{" "}
              {site.city}, {site.country}.
            </p>
          </div>

          <nav aria-label="Footer" className="footer__col">
            <h2 className="footer__heading">Explore</h2>
            <a href="#stay">The stay</a>
            <a href="#spaces">Spaces</a>
            <a href="#gallery">Gallery</a>
            <a href="#faq">Good to know</a>
          </nav>

          <div className="footer__col">
            <h2 className="footer__heading">Get in touch</h2>
            {site.whatsapp ? (
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                WhatsApp: {site.whatsappDisplay}
              </a>
            ) : (
              <p>WhatsApp: {site.whatsappDisplay}</p>
            )}
            {site.email.includes("@") && !site.email.startsWith("[") ? (
              <a href={`mailto:${site.email}`}>Email: {site.email}</a>
            ) : (
              <p>Email: {site.email}</p>
            )}
            <TopLink focusPlanner className="btn btn--sand footer__cta">Plan your stay</TopLink>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} Dawa Village · {site.city}, {site.country}</span>
          <TopLink>Back to top ↑</TopLink>
        </div>
      </div>
    </footer>
  );
}
