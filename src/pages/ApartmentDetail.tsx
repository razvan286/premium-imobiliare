import { useParams, Link } from "react-router-dom";
import { apartments } from "@/data/apartments";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Home,
  Square,
  Layers,
  MapPin,
  Car,
  Wind,
} from "lucide-react";

const ApartmentDetail = () => {
  const { id } = useParams();
  const apartment = apartments.find((apt) => apt.id === id);

  if (!apartment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-playfair font-bold mb-4">
            Apartamentul cautat nu a fost gasit.
          </h1>
          <Link to="/">
            <Button className="btn-premium">Back to Listings</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-playfair font-bold text-luxury mb-4">
            {apartment.type}
          </h1>
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Square className="w-5 h-5" />
              <span>{apartment.surface}m²</span>
            </div>
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              <span>{apartment.rooms} rooms</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5" />
              <span>Floor {apartment.floor}</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <h2 className="text-2xl font-playfair font-semibold text-luxury">
                Interior Views
              </h2>
              <div className="grid gap-4">
                {apartment.images.map((image, index) => (
                  <div key={index} className="image-overlay">
                    <img
                      src={image}
                      alt={`${apartment.type} view ${index + 1}`}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Floor Plan */}
            <div className="space-y-4">
              <h2 className="text-2xl font-playfair font-semibold text-luxury">
                Floor Plan
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-soft">
                <img
                  src={apartment.blueprint}
                  alt={`${apartment.type} floor plan`}
                  className="w-full max-w-2xl mx-auto"
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-playfair font-semibold text-luxury">
                Description
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {apartment.description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h2 className="text-2xl font-playfair font-semibold text-luxury">
                Features & Amenities
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {apartment.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-surface rounded-lg"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <Card className="border-accent/20">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div>
                    <span className="text-4xl font-playfair font-bold text-primary">
                      €{apartment.price.toLocaleString()}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <Button className="btn-premium w-full text-lg py-3">
                      Schedule Viewing
                    </Button>
                    <Button variant="outline" className="w-full">
                      Request Information
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-playfair font-semibold text-luxury">
                  Quick Facts
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Surface Area</span>
                    <span className="font-medium">{apartment.surface}m²</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rooms</span>
                    <span className="font-medium">{apartment.rooms}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Floor</span>
                    <span className="font-medium">{apartment.floor}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Balcony</span>
                    <Badge
                      variant={apartment.balcony ? "default" : "secondary"}
                    >
                      {apartment.balcony ? "Yes" : "No"}
                    </Badge>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Parking</span>
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4" />
                      <Badge
                        variant={apartment.parking ? "default" : "secondary"}
                      >
                        {apartment.parking ? "Included" : "Not Available"}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="surface-gradient">
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-luxury mb-4">
                  Contact Us
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">Sales Office</span>
                    <p className="font-medium">+32 2 123 45 67</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Email</span>
                    <p className="font-medium">info@luxuryresidences.be</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Address</span>
                    <p className="font-medium">
                      Avenue Louise 123
                      <br />
                      1050 Brussels
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetail;
