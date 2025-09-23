import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PhotoGalleryProps {
  images: string[];
  alt?: string;
  className?: string;
}

const PhotoGallery = ({
  images,
  alt = "Galerie",
  className,
}: PhotoGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  // Sync selectedIndex with carousel
  useEffect(() => {
    if (!api) return;
    api.scrollTo(selectedIndex);
  }, [api, selectedIndex]);

  // Sync carousel changes back to selectedIndex
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-video bg-muted rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">Nu sunt imagini disponibile</p>
      </div>
    );
  }

  return (
    <div className={cn("w-full space-y-4", className)}>
      {/* Main Carousel */}
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`${alt} ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      // onClick={() => setSelectedIndex(index)}
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {images.length > 1 && (
          <>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </>
        )}
      </Carousel>

      {/* Thumbnail Navigation - Only show if more than 1 image */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={cn(
                "flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all",
                selectedIndex === index
                  ? "border-accent shadow-lg"
                  : "border-border hover:border-primary/50",
              )}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="text-center text-sm text-muted-foreground">
          {selectedIndex + 1} din {images.length} imagini
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
