import PhotoGallery from "@/components/PhotoGallery";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WhatsApp from "@/components/ui/icons";
import { landPlots } from "@/data/landPlots";
import { handleContactWhatsApp, handleDownloadBrochure } from "@/lib/utils";
import { Download, MapPin } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const LandPlotDetail = () => {
  const { id } = useParams();
  const landPlot = landPlots.find((plot) => plot.id === id);

  if (!landPlot) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-playfair font-bold mb-4">
            Terenul căutat nu a fost găsit.
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
                  {landPlot.title}
                </CardTitle>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  {landPlot.location}
                </div>
              </CardHeader>
              <CardContent>
                <PhotoGallery
                  images={landPlot.images}
                  alt={landPlot.title}
                  className="mb-1 sm:p-2"
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
                <p className="text-muted-foreground leading-relaxed">
                  {landPlot.description}
                </p>
              </CardContent>
            </Card>

            {/* Technical Characteristics */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="font-playfair text-primary">
                  Caracteristici Tehnice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-3 ">
                  {landPlot.technicalCharacteristics.map(
                    (technicalChar, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full shrink-0"></div>
                        <span className="text-foreground">{technicalChar}</span>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Technical Characteristics */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="font-playfair text-primary">
                  Status Urbanistic
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-3 ">
                  {landPlot.urbanStatuses.map((urbanStatus, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full shrink-0"></div>
                      <span className="text-foreground">{urbanStatus}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Functions */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="font-playfair text-primary">
                  Funcțiuni aprobate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-3">
                  {landPlot.functions.map((funct, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full shrink-0"></div>
                      <span className="text-foreground">{funct}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Advantages */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="font-playfair text-primary">
                  Avantaje
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-3">
                  {landPlot.advantages.map((adv, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full shrink-0"></div>
                      <span className="text-foreground">{adv}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Oportunities */}

            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="font-playfair text-primary">
                  Destinații posibile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-3">
                  {landPlot.oportunities.map((oport, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full shrink-0"></div>
                      <span className="text-foreground">{oport}</span>
                    </div>
                  ))}
                </div>
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
                    <div className="text-3xl font-bold text-primary mb-2">
                      €{landPlot.price.toLocaleString()}
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

                  {landPlot.brochure && (
                    <Button
                      onClick={() => handleDownloadBrochure(landPlot.brochure)}
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

export default LandPlotDetail;
