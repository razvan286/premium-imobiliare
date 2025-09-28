import React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages";
import NotFound from "@/pages/NotFound";
import NavBar from "./components/NavBar";
import LandPlotDetail from "./pages/LandPlotDetail";
import Footer from "./components/Footer";

import ScrollToTop from "./components/ScrollToTop";
import RetailSpaceDetail from "./pages/RetailSpaceDetail";
import BuildingDetail from "./pages/BuildingDetail";

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/apartamente/:id" element={<BuildingDetail />} />
          <Route path="/terenuri/:id" element={<LandPlotDetail />} />
          <Route path="/spatii/:id" element={<RetailSpaceDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  );
}

export default App;
