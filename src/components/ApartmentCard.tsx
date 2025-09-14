import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Apartment } from "@/types/apartment";
import { Link } from "react-router-dom";

interface ApartmentCardProps {
  apartment: Apartment;
}

const ApartmentCard = ({ apartment }: ApartmentCardProps) => {
  return (
    <Card className="property-card bg-card border-border/50 overflow-hidden">
      <div className="image-overlay">
        <img
          src={apartment.images[0]}
          alt={apartment.type}
          className="w-full h-64 object-cover"
        />
      </div>

      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-luxury text-2xl">{apartment.type}</h3>
          <Badge
            variant="secondary"
            className="bg-accent/10 text-accent font-medium"
          >
            Floor {apartment.floor}
          </Badge>
        </div>

        <div className="flex items-center gap-4 text-muted-foreground">
          <span>{apartment.surface}m²</span>
          <span>•</span>
          <span>{apartment.rooms} rooms</span>
          <span>•</span>
          <span>{apartment.orientation}</span>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {apartment.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>

          <p className="text-muted-foreground text-sm line-clamp-2">
            {apartment.description}
          </p>

          <div className="flex justify-between items-center pt-4">
            <div>
              <span className="text-3xl font-playfair font-bold text-primary">
                €{apartment.price.toLocaleString()}
              </span>
            </div>

            <Link to={`/apartment/${apartment.id}`}>
              <Button className="btn-premium">View Details</Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApartmentCard;
