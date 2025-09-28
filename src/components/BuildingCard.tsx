import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building } from "@/types/building";
import { Link } from "react-router-dom";
import { MapPin, Home } from "lucide-react";

interface BuildingCardProps {
  building: Building;
}

const BuildingCard = ({ building }: BuildingCardProps) => {
  const priceRange =
    building.apartmentTypes.length > 0
      ? `€${Math.min(...building.apartmentTypes.map((apt) => apt.price)).toLocaleString()} - €${Math.max(...building.apartmentTypes.map((apt) => apt.price)).toLocaleString()}`
      : "Preț la cerere";

  return (
    <Card className="property-card bg-card border-border/50 overflow-hidden">
      <div className="image-overlay">
        <img
          src={building.mainImage}
          alt={building.name}
          className="w-full h-64 object-cover"
        />
      </div>

      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-luxury text-2xl">{building.name}</h3>
          <Badge
            variant="secondary"
            className="bg-accent/10 text-accent font-medium"
          >
            {building.totalApartments} apartamente
          </Badge>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground mb-3">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{building.location}</span>
        </div>

        <div className="flex items-center gap-4 text-muted-foreground">
          <Home className="w-4 h-4" />
          <span className="text-sm">
            {building.apartmentTypes.map((apt) => apt.type).join(", ")}
          </span>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm line-clamp-3">
            {building.description}
          </p>

          {/* Apartment Types Preview */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Tipuri disponibile:</h4>
            <div className="grid grid-cols-1 gap-2">
              {building.apartmentTypes.map((apt) => (
                <div
                  key={apt.id}
                  className="flex justify-between items-center p-2 bg-muted/50 rounded-md"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{apt.type}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">
                      {apt.surface}m²
                    </span>
                  </div>
                  <span className="text-sm font-medium text-primary">
                    {`€${apt.price.toLocaleString()}${apt.vat ? " + TVA" : null}`}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Preț de la</p>
              <span className="text-2xl font-playfair font-bold text-primary">
                {priceRange}
              </span>
            </div>

            <Link to={`/apartamente/${building.id}`}>
              <Button className="btn-premium">Vezi Detalii</Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BuildingCard;
