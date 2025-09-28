import PhotoGallery from "@/components/PhotoGallery";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WhatsApp from "@/components/ui/icons";
import { buildings } from "@/data/buildings";
import { handleContactWhatsApp } from "@/lib/utils";
import { Car, Home, MapPin } from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router-dom";

const BuildingDetail = () => {
  const { id } = useParams();
  const building = buildings.find((b) => b.id == id);

  if (!building) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-playfair font-bold mb-4">
            Apartamentele căutate nu au fost găsit.
          </h1>
          <Link to="/">
            <Button className="btn-premium">Inapoi la Pagina Principală</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-3 gap-8 pb-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Photo Gallery */}
            <Card className="card-premium mt-10 sm:p-3">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl font-playfair text-primary">
                      {building.name}
                    </CardTitle>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {building.location}
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-accent/10 text-accent font-medium"
                  >
                    {building.totalApartments} apartamente
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <PhotoGallery
                  images={building.images}
                  alt={building.name}
                  className="mb-10 sm:p-2"
                />
                <CardTitle>Descriere</CardTitle>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {building.description}
                </p>

                <div className="space-y-4">
                  <CardTitle>Dotări și Caracteristici</CardTitle>
                  <div className="grid gap-3">
                    {building.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Available Apartments */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-playfair font-bold">
                  Apartamente Disponibile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {building.apartmentTypes.map((apartment) => (
                    <Card key={apartment.id} className="border-border/50">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                          <div className="flex-1">
                            <h4 className="text-xl font-semibold mb-2">
                              {apartment.type}
                            </h4>
                            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-3">
                              <div className="flex items-center gap-1">
                                <Home className="w-4 h-4" />
                                <span>{apartment.surface}m²</span>
                              </div>
                              <span>•</span>
                              <span>{apartment.rooms} camere</span>
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="text-3xl font-playfair font-bold text-primary mb-2">
                              {`€${apartment.price.toLocaleString()}${apartment.vat ? " + TVA" : null}`}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Apartment floor plans */}
            <Card className="card-premium mt-10 sm:p-3">
              <CardHeader>
                <CardTitle>Planuri Apartamente</CardTitle>
              </CardHeader>
              <CardContent>
                <PhotoGallery
                  images={building.apartmentPlans}
                  alt={building.name}
                  className="mb-1 sm:p-2"
                  floorPlans
                  titles={building.planTitles}
                />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price and Actions */}
            <div className="sticky top-28">
              <Card className="card-premium ">
                <CardHeader>
                  <div className="text-center">
                    <div className="text-2xl font-playfair font-bold text-primary mb-1">
                      Preț de la €
                      {Math.min(
                        ...building.apartmentTypes.map((apt) => apt.price),
                      ).toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      până la €
                      {Math.max(
                        ...building.apartmentTypes.map((apt) => apt.price),
                      ).toLocaleString()}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    onClick={() => handleContactWhatsApp()}
                    className="w-full bg-whatsapp-dark hover:bg-whatsapp"
                  >
                    <WhatsApp className="w-5 h-5 mr-2" />
                    Contactează-ne pe WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingDetail;
