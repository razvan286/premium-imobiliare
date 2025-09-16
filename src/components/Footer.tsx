import { MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <h3 className="text-2xl font-playfair font-bold mb-4 text-accent">
              Proprietati Premium
            </h3>
            {/* <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Oferim cele mai rafinate apartamente și terenuri din București.
              Fiecare proprietate este selectată cu grijă pentru a vă oferi
              standardul cel mai înalt de trai și investiție.
            </p> */}
            <div className="flex items-center text-primary-foreground/80">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Craiova, România</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4 text-accent">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-center text-primary-foreground/80">
                <Phone className="w-4 h-4 mr-2" />
                <span>WhatsApp: +40 729 536 731</span>
              </div>
              {/* <div className="flex items-center text-primary-foreground/80">
                <Mail className="w-4 h-4 mr-2" />
                <span>contact@rezidente-lux.ro</span>
              </div>
              <div className="flex items-center text-primary-foreground/80">
                <Clock className="w-4 h-4 mr-2" />
                <span>Luni - Vineri: 9:00 - 18:00</span>
              </div> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4 text-accent">
              Linkuri Rapide
            </h4>
            <div className="space-y-2">
              {/* <a
                href="#apartamente"
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Apartamente
              </a> */}
              <a
                href="#terenuri"
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Terenuri
              </a>
              <a
                href="#contact"
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Proprietati Premium. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
