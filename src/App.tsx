import { useState } from "react";
// import "./App.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages";
import NotFound from "@/pages/NotFound";
import ApartmentDetail from "@/pages/ApartmentDetail";
import NavBar from "./components/NavBar";
import LandPlotDetail from "./pages/LandPlotDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/apartamente/:id" element={<ApartmentDetail />} />
          <Route path="/terenuri/:id" element={<LandPlotDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
}

export default App;
