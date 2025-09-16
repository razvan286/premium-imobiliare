import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { landPlots } from "@/data/landPlots";
import { Square } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const LandPlotDetail = () => {
  const { id } = useParams();
  const landPlot = landPlots.find((plot) => plot.id === id);

  if (!landPlot) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-playfair font-bold mb-4">
            Terenul cautat nu a fost gasit.
          </h1>
          <Link to="/">
            <Button className="btn-premium">Inapoi la Pagina Principala</Button>
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
            {landPlot.title}
          </h1>
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Square className="w-5 h-5" />
              <span>{landPlot.surface}m²</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 pb-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* <h2 className="text-2xl font-playfair font-semibold text-luxury">
                Interior Views
              </h2> */}
              <div className="grid gap-4">
                <div className="image-overlay">
                  <img
                    src={landPlot.image}
                    alt={`${landPlot.id} view ${landPlot.id + 1}`}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Price Card */}
            <Card className="border-accent/20">
              <CardContent className="p-3">
                <div className="text-center space-y-4">
                  <div>
                    <span className="text-3xl font-playfair font-bold text-primary">
                      €{landPlot.price.toLocaleString()}
                    </span>
                  </div>

                  {/* <div className="space-y-3">
                    <Button className="btn-premium w-full text-lg py-3">
                      Contacteaza-ne
                    </Button>
                  </div> */}
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <div className="space-y-4 bg-muted p-3 rounded-lg">
              <h2 className="text-2xl font-playfair font-semibold text-luxury">
                Descriere
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {landPlot.description}
              </p>
            </div>

            {/* Technical Characteristics */}
            <div className="space-y-4 bg-muted p-3 rounded-lg">
              <h2 className="text-2xl font-playfair font-semibold text-luxury">
                Caracteristici Tehnice
              </h2>
              <div className="grid sm:grid-cols-2 gap-3 ">
                {landPlot.technicalCharacteristics.map(
                  (technicalChar, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-surface rounded-lg"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full shrink-0"></div>
                      <span className="text-foreground">{technicalChar}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Functions */}
            <div className="space-y-4 bg-muted p-3 rounded-lg">
              <h2 className="text-2xl font-playfair font-semibold text-luxury">
                Funcțiuni aprobate:
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {landPlot.functions.map((funct, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-surface rounded-lg"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full shrink-0"></div>
                    <span className="text-foreground">{funct}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Advantages */}
            <div className="space-y-4 bg-muted p-3 rounded-lg">
              <h2 className="text-2xl font-playfair font-semibold text-luxury">
                Avantaje
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {landPlot.advantages.map((adv, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-surface rounded-lg"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full shrink-0"></div>
                    <span className="text-foreground">{adv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Oportunities */}
            <div className="space-y-4 bg-muted p-3 rounded-lg">
              <h2 className="text-2xl font-playfair font-semibold text-luxury">
                Destinații posibile:
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {landPlot.oportunities.map((oport, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-surface rounded-lg"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full shrink-0"></div>
                    <span className="text-foreground">{oport}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="surface-gradient">
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-luxury mb-4">
                  Contact
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">WhatsApp</span>
                    <p className="font-medium">+40 729 536 731</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Adresa</span>
                    <p className="font-medium">Craiova, Romania</p>
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

export default LandPlotDetail;
