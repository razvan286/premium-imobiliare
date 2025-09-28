import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            <h2 className="text-4xl font-playfair font-bold text-luxury">PP</h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to={"/apartamente#apartamente"}
              className="text-foreground hover:text-accent transition-colors"
            >
              Apartamente
            </Link>
            <Link
              to={"/terenuri#terenuri"}
              className="text-foreground hover:text-accent transition-colors"
            >
              Terenuri
            </Link>
            <Link
              to={"/spatii#spatii"}
              className="text-foreground hover:text-accent transition-colors"
            >
              Spații
            </Link>
            <Link to={isHome ? "#contact" : "/#contact"}>
              <Button className="btn-premium">Contact</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-accent hover:text-accent transition-colors p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-accent">
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                to={"/apartamente#apartamente"}
                className="text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Apartamente
              </Link>
              <Link
                to={isHome ? "#terenuri" : "/#terenuri"}
                className="text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Terenuri
              </Link>
              <Link
                to={isHome ? "#spatii" : "/#spatii"}
                className="text-foreground hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Spații
              </Link>
              <Link to={isHome ? "#contact" : "/#contact"}>
                <Button
                  className="btn-premium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
