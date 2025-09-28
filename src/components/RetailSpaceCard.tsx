import React from "react";
import { RetailSpace } from "@/types/retailSpace";
import { Card, CardContent } from "./ui/card";
import { Download, MapPin, Square } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { handleDownloadBrochure } from "@/lib/utils";

interface RetailSpaceCardProps {
  retailSpace: RetailSpace;
}

const RetailSpaceCard = ({ retailSpace }: RetailSpaceCardProps) => {
  return (
    <Card className="property-card bg-card border-border shadow-soft hover:shadow-medium">
      <div className="image-overlay">
        <img
          src={retailSpace.mainImage}
          alt={retailSpace.title}
          className="w-full h-64 object-cover"
          loading="lazy"
        />
      </div>

      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          {/* Left side: title, subtitle, location */}
          <div className="flex-1 pr-4">
            <h3 className="text-lg font-playfair font-semibold text-primary leading-snug">
              {retailSpace.title}
            </h3>
            <div className="text-sm text-gray-500 mt-1">
              {retailSpace.subtitle}
            </div>
            <div className="flex items-center text-muted-foreground mt-2">
              <MapPin className="w-6 h-6 mr-1" />
              <span className="text-sm">{retailSpace.location}</span>
            </div>
          </div>

          {/* Right side: price + TVA + surface */}
          <div className="text-right min-w-[120px]">
            <div className="flex flex-col items-end">
              <span className="text-2xl font-extrabold text-accent">
                €{retailSpace.price.toLocaleString()}
              </span>
              {retailSpace.vat && (
                <span className="text-sm font-semibold text-accent/80 uppercase">
                  + TVA
                </span>
              )}
            </div>
            <div className="text-sm text-muted-foreground mt-3 flex flex-col items-end">
              <div className="flex items-end gap-2">
                <Square className="w-5 h-5" />
                <span className="">{retailSpace.surface}m²</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-2">
          {retailSpace.description}
        </p>

        <div className="flex gap-3">
          <Link to={`/spatii/${retailSpace.id}`} className="flex-1">
            <Button className="btn-premium w-full">Vezi Detalii</Button>
          </Link>

          {retailSpace.brochure && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleDownloadBrochure(retailSpace.brochure)}
                  className="shrink-0"
                >
                  <Download className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="text-muted-foreground text-xs">
                Descarcă plan spațiu
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RetailSpaceCard;
