import { Button } from "@/components/ui/button";
import heroBuildingImage from "@/assets/hero-section.webp";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen md:min-h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBuildingImage})`,
          backgroundPosition: "center 72%",
        }}
      >
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
          Proprietăți
          <br />
          <span className="text-accent">Premium</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Descoperă apartamente, terenuri și spații de închiriat disponible mai
          jos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="#apartamente">
            <Button className="btn-premium text-lg px-10 py-4">
              Descoperă Opțiuni
            </Button>
          </Link>

          <Link to="#contact">
            <Button
              variant="outline"
              className="text-primary text-lg px-10 py-4 hover:text-white"
            >
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
