import { Link } from 'wouter';
import { Instagram, MapPin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import locationsData from '@/data/locations.json';
import type { Location } from '@/shared/schema';
import logo from '@/assets/logo/lil-green-logo-circle.png';

const locations = locationsData as Location[];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-sidebar border-t border-sidebar-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Lil Green Kitchen Logo"
                className="h-10 w-10 rounded-full shadow-sm"
              />
              <h3
                className="font-serif text-xl font-bold text-primary"
                data-testid="text-footer-title"
              >
                Lil Green Kitchen
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {t.footer.aboutText}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/lil_green_kitchen"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-footer-instagram"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

{/* Quick Links */}
<div>
  <h4 className="font-semibold text-foreground mb-4">
    {t.footer.quickLinks}
  </h4>
  <ul className="space-y-2">
    {/* Menü vorerst ausgeblendet */}
    {/*
    <li>
      <Link href="/menu">
        <span
          className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          data-testid="link-footer-menu"
        >
          {t.nav.menu}
        </span>
      </Link>
    </li>
    */}

    <li>
      <Link href="/locations">
        <span
          className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          data-testid="link-footer-locations"
        >
          {t.nav.locations}
        </span>
      </Link>
    </li>

    <li>
      <Link href="/story">
        <span
          className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          data-testid="link-footer-story"
        >
          {t.nav.story}
        </span>
      </Link>
    </li>

    <li>
      <Link href="/catering">
        <span
          className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          data-testid="link-footer-catering"
        >
          {t.nav.catering}
        </span>
      </Link>
    </li>

    {/* Karriere-Link */}
    <li>
      <Link href="/karriere">
        <span
          className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          data-testid="link-footer-karriere"
        >
          Karriere
        </span>
      </Link>
    </li>

    <li>
      <Link href="/contact">
        <span
          className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          data-testid="link-footer-contact"
        >
          {t.nav.contact}
        </span>
      </Link>
    </li>
  </ul>
</div>


{/* Locations */}
<div>
  <h4 className="font-semibold text-foreground mb-4">
    {t.footer.locations}
  </h4>
  <div className="space-y-4">
    {locations.map((location) => {
      // Benutzerdefinierte Google Maps-Links für bestimmte Orte
      const customUrl =
        location.city.toLowerCase().includes("starnberg")
          ? "https://www.google.com/maps/place/Lil.+Green+Kitchen+%7C+Starnberg/@47.9980739,11.3427536,17z/data=!4m15!1m8!3m7!1s0x479dd029c27e4081:0x859b1b486f030571!2sWittelsbacherstra%C3%9Fe+6,+82319+Starnberg!3b1!8m2!3d47.9980739!4d11.3427536!16s%2Fg%2F11js3c5gy3!3m5!1s0x479dd1779df9b3e9:0x9b4d7542504d280a!8m2!3d47.9981342!4d11.3427094!16s%2Fg%2F11jnqmgktz?entry=ttu"
          : location.city.toLowerCase().includes("berg")
          ? "https://www.google.com/maps/place/Lil.Green.Kitchen/@47.9664963,11.3558717,19z/data=!3m2!4b1!5s0x479dcf9099f54f03:0x12a830bed081474c!4m6!3m5!1s0x479dcf0001b1f035:0xccdf4c54945a1a49!8m2!3d47.9664954!4d11.3565154!16s%2Fg%2F11y3j4zpcz?entry=ttu"
          : location.gmapsUrl;

      return (
        <div key={location.id}>
          <h5 className="font-medium text-foreground text-sm mb-2">
            {location.city}
          </h5>
          <a
            href={customUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>
              {location.address}, {location.zip} {location.city}
            </span>
          </a>
        </div>
      );
    })}
  </div>
</div>


          {/* Contact & Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {t.footer.legal}
            </h4>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/impressum">
                  <span
                    className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    data-testid="link-footer-impressum"
                  >
                    {t.footer.impressum}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/datenschutz">
                  <span
                    className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    data-testid="link-footer-datenschutz"
                  >
                    {t.footer.datenschutz}
                  </span>
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <a
                href="mailto:info@lilgreen.de"
                className="hover:text-primary transition-colors"
              >
                info@lilgreen.de
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-sidebar-border text-center">
          <p className="text-sm text-muted-foreground">{t.footer.allRights}</p>
          <p className="text-xs text-muted-foreground mt-2">
            {t.footer.company}
          </p>
        </div>
      </div>
    </footer>
  );
}
