import React, { useEffect } from "react";
import { buildings } from "@/data/buildings";
import BuildingCard from "@/components/BuildingCard";
import HeroSection from "@/components/HeroSection";
import { Phone } from "lucide-react";
import { Location, useLocation } from "react-router-dom";

const Apartments = () => {
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

      {/* Apartments Section */}
      <section id="apartamente" className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold text-luxury mb-6">
              Apartamente
            </h2>
            <p className="text-lg text-muted-foreground mx-auto leading-relaxed">
              Descoperă apartamente de vânzare.
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8">
            {buildings.map((building) => (
              <BuildingCard key={building.id} building={building} />
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

export default Apartments;
