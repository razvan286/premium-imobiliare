import HeroSection from "@/components/HeroSection";
import { Phone } from "lucide-react";
import Footer from "@/components/Footer";
import { landPlots } from "@/data/landPlots";
import LandPlotCard from "@/components/LandPlotCard";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");

    const scrollToId = () => {
      const el = document.getElementById(id);
      if (!el) return false;
      // adjust for sticky navbar height (example: 72px)
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
      return true;
    };

    // try immediately + retry short delays (in case element mounts after navigation)
    if (scrollToId()) return;
    const t1 = setTimeout(scrollToId, 50);
    const t2 = setTimeout(scrollToId, 200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Terenuri Section */}
      <section id="terenuri" className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold text-luxury mb-6">
              Terenuri
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Descoperă terenuri de vanzare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {landPlots.map((landPlot) => (
              <LandPlotCard key={landPlot.id} landPlot={landPlot} />
            ))}
          </div>
        </div>
      </section>

      {/* Apartments Section */}
      <section id="apartamente" className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold text-luxury mb-6">
              Apartamente
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Disponibile în curând.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-surface">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-playfair font-bold text-luxury mb-8">
            Contact
          </h2>
          <div className="flex flex-col items-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-2xl font-bold text-accent">
              <Phone className="w-6 h-6" />
              <span>+40 729 536 731</span>
            </div>

            <p className="text-lg text-muted-foreground">
              Contactează-ne pe WhatsApp pentru informații rapide.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
