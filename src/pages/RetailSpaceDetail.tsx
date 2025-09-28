import PhotoGallery from "@/components/PhotoGallery";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WhatsApp from "@/components/ui/icons";
import { retailSpaces } from "@/data/retailSpaces";
import { handleContactWhatsApp, handleDownloadBrochure } from "@/lib/utils";
import { Download, MapPin } from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router-dom";

const RetailSpaceDetail = () => {
  const { id } = useParams();
  const retailSpace = retailSpaces.find((retailSpace) => retailSpace.id === id);

  if (!retailSpace) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-playfair font-bold mb-4">
            Spațiul căutat nu a fost găsit.
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
                <CardTitle className="text-2xl font-playfair text-primary">
                  {retailSpace.title}
                </CardTitle>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  {retailSpace.location}
                </div>
              </CardHeader>
              <CardContent>
                <PhotoGallery
                  images={retailSpace.floorPlans}
                  alt={retailSpace.title}
                  className="mb-1 sm:p-2"
                  floorPlans
                  titles={retailSpace.planTitles}
                />
              </CardContent>
            </Card>

            {/* Description */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="font-playfair text-primary">
                  Descriere
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {retailSpace.description}
                </p>
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
                    {/* <div className="text-3xl font-bold text-primary mb-2">
                      €{retailSpace.price.toLocaleString()}{retailSpace.vat ? " + TVA" : null}
                    </div> */}
                    <span className="text-3xl font-extrabold">
                      €{retailSpace.price.toLocaleString()}
                    </span>
                    {retailSpace.vat && (
                      <span className="text-2xl font-bold uppercase">
                        {` + TVA`}
                      </span>
                    )}
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

                  {retailSpace.brochure && (
                    <Button
                      onClick={() =>
                        handleDownloadBrochure(retailSpace.brochure)
                      }
                      className="w-full bg-secondary-foreground hover:bg-dark"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Descarcă Planul
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailSpaceDetail;
