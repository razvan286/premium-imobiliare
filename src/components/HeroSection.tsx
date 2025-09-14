import { Button } from "@/components/ui/button";
import heroBuildingImage from "@/assets/hero-section.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBuildingImage})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
          Luxury Living
          <br />
          <span className="text-accent">Redefined</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Discover exceptional apartments where modern design meets
          sophisticated living. Each residence is crafted with the finest
          materials and attention to detail.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="btn-premium text-lg px-10 py-4">
            Explore Apartments
          </Button>
          <Button
            variant="outline"
            className="btn-outline-premium text-lg px-10 py-4 border-white text-white hover:bg-white hover:text-primary"
          >
            Schedule Viewing
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
