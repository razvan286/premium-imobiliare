import { LandPlot } from "@/types/landPlot";
import { RetailSpace } from "@/types/retailSpace";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleDownloadBrochure = (brochurePdf: string) => {
  window.open(brochurePdf, "_blank");
};

export const handleContactWhatsApp = () => {
  const phoneNumber = "40729536731";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  window.open(whatsappUrl, "_blank");
};
