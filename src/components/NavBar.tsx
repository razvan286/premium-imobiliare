import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

const NavBar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            <h2 className="text-2xl font-playfair font-bold text-luxury">
              Proprietati Premium
            </h2>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {/* <a
                href="#apartments"
                className="text-foreground hover:text-accent transition-colors"
              >
                Apartments
              </a> */}
            <Link
              to={isHome ? "#terenuri" : "/#terenuri"}
              className="text-foreground hover:text-accent transition-colors"
            >
              Terenuri
            </Link>
            <Link
              to={isHome ? "#apartamente" : "/#apartamente"}
              className="text-foreground hover:text-accent transition-colors"
            >
              Apartamente
            </Link>
            <Link to={isHome ? "#contact" : "/#contact"}>
              <Button className="btn-premium">Contact</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
