import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import { Phone } from "lucide-react";
import { useLocation } from "react-router-dom";
import { landPlots } from "@/data/landPlots";
import LandPlotCard from "@/components/LandPlotCard";

const LandPlots = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);

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
              Descoperă terenuri de vânzare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8">
            {landPlots.map((landPlot) => (
              <LandPlotCard key={landPlot.id} landPlot={landPlot} />
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-playfair font-bold text-luxury mb-8">
            Contact
          </h2>
          <div className="flex flex-col items-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-4xl font-bold text-accent">
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

export default LandPlots;
