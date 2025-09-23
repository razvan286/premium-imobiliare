import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LandPlot } from "@/types/landPlot";
import { MapPin, Download, TreePine, Square } from "lucide-react";
import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { handleDownloadBrochure } from "@/lib/utils";

interface LandPlotCardProps {
  landPlot: LandPlot;
}

const LandPlotCard = ({ landPlot }: LandPlotCardProps) => {
  return (
    <Card className="property-card bg-card border-border shadow-soft hover:shadow-medium">
      <div className="image-overlay">
        <img
          src={landPlot.mainImage}
          alt={landPlot.title}
          className="w-full h-64 object-cover"
          loading="lazy"
        />
      </div>

      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-playfair font-semibold text-primary">
              {landPlot.title}
            </h3>
            <div className="text-sm mb-3 text-gray-500">
              {landPlot.subtitle}
            </div>
            <div className="flex items-center text-muted-foreground mb-2">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">{landPlot.location}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-accent">
              €{landPlot.price.toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">
              {landPlot.surface} m²
            </p>
          </div>
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-3">
          {landPlot.description}
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2">
            <TreePine className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">
              Amplasare: {landPlot.zoning}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {landPlot.features.slice(0, 3).map((feature) => (
              <span
                key={feature}
                className="px-2 py-1 bg-accent-muted text-accent-foreground text-xs rounded-full"
              >
                {feature}
              </span>
            ))}
            {landPlot.features.length > 3 && (
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                +{landPlot.features.length - 3} mai multe
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-3">
          <Link to={`/terenuri/${landPlot.id}`} className="flex-1">
            <Button className="btn-premium w-full">Vezi Detalii</Button>
          </Link>

          {landPlot.brochure && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleDownloadBrochure(landPlot.brochure)}
                  className="shrink-0"
                >
                  <Download className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="text-muted-foreground text-xs">
                Descarcă plan teren
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default LandPlotCard;
