import type { LucideIcon } from 'lucide-react';
import { ShoppingBag } from 'lucide-react'; // Default icon, can be changed here

interface SiteConfig {
  name: string;
  description: string;
  logo: LucideIcon;
  logoColor: string; // Tailwind CSS class for the logo color
}

export const siteConfig: SiteConfig = {
  name: "TasteMe",
  description: "Discover the best tastes with TasteMe - your premium online food store.",
  logo: ShoppingBag, // The icon component for the logo
  logoColor: "text-green-500", // Tailwind class for the logo icon color
};
