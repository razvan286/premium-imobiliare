import HeroSection from "@/components/HeroSection";
import ApartmentCard from "@/components/ApartmentCard";
import { apartments } from "@/data/apartments";
import { Button } from "@/components/ui/button";
import { Apartment } from "@/types/apartment";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Navigation Bar */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-playfair font-bold text-luxury">
              Luxury Residences
            </h2>
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#apartments"
                className="text-foreground hover:text-accent transition-colors"
              >
                Apartments
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-accent transition-colors"
              >
                Contact
              </a>
              <Button className="btn-premium">Schedule Visit</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Apartments Section */}
      <section id="apartments" className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold text-luxury mb-6">
              Available Apartments
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose from our carefully curated selection of luxury apartments,
              each designed with exceptional attention to detail and premium
              finishes throughout.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {apartments.map((apartment: Apartment) => (
              <ApartmentCard key={apartment.id} apartment={apartment} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-playfair font-bold text-luxury mb-8">
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our sales team is ready to help you discover the apartment that
            matches your lifestyle and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-premium text-lg px-10 py-4">
              Contact Sales Team
            </Button>
            <Button variant="outline" className="text-lg px-10 py-4">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
