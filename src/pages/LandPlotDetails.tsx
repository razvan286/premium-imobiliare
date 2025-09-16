import { Button } from "@/components/ui/button";
import { landPlots } from "@/data/landPlots";
import { Link, useParams } from "react-router-dom";

const LandPlotDetail = () => {
  const { id } = useParams();
  const landPlot = landPlots.find((plot) => plot.id === id);

  if (!landPlot) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-playfair font-bold mb-4">
            Terenul cautat nu a fost gaist
          </h1>
          <Link to="/">
            <Button className="btn-premium">Inapoi la Pagina Principala</Button>
          </Link>
        </div>
      </div>
    );
  }
};

export default LandPlotDetail;
