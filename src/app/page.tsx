import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { 
  Menu, 
  ChevronDown, 
  Percent, 
  CalendarDays, 
  Star, 
  ShoppingBag as FeatureShoppingBagIcon, // Renamed to avoid conflict with Logo's ShoppingBag
  ChevronRight,
  Search as SearchIcon // For mobile search
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Secondary Navigation Bar */}
      <nav className="bg-background border-b border-border/40 py-3">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4 lg:gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-10">
                  <Menu className="h-5 w-5 mr-2" /> All Categories
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Fruits & Vegetables</DropdownMenuItem>
                <DropdownMenuItem>Meat & Fish</DropdownMenuItem>
                <DropdownMenuItem>Dairy & Eggs</DropdownMenuItem>
                <DropdownMenuItem>Bakery</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="hidden lg:flex items-center gap-4 text-sm font-medium">
              {[ "Demos", "Categories", "Dietary", "Search", "Shops", "Pages"].map(item => (
                 <DropdownMenu key={item}>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="px-3 py-2 text-muted-foreground hover:text-foreground h-auto">
                            {item} <ChevronDown className="h-4 w-4 ml-1" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Sample Link 1</DropdownMenuItem>
                        <DropdownMenuItem>Sample Link 2</DropdownMenuItem>
                    </DropdownMenuContent>
                 </DropdownMenu>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm px-3 py-2 h-auto">
                  Delivery: <span className="font-semibold ml-1">Address</span> <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>123 Main St, Anytown</DropdownMenuItem>
                <DropdownMenuItem>Add New Address</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      {/* Mobile Search Bar - visible on smaller screens, hidden on md and up where header search is visible */}
      <div className="container md:hidden py-3">
        <div className="relative w-full">
          <Input
            type="search"
            placeholder="What are you looking..."
            className="pl-10 pr-4 h-11 rounded-md border-gray-300 focus:border-primary focus:ring-primary"
          />
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
      </div>


      {/* Hero Section */}
      <section className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Banner */}
          <div className="lg:col-span-2 relative rounded-lg overflow-hidden shadow-lg min-h-[300px] sm:min-h-[400px] flex items-center p-8 bg-gray-100">
            <Image
              src="https://placehold.co/1000x500.png"
              alt="Healthy Breakfast"
              layout="fill"
              objectFit="cover"
              className="z-0"
              data-ai-hint="healthy breakfast food"
            />
            <div className="relative z-10 max-w-md">
              <p className="text-sm font-semibold uppercase text-gray-700 tracking-wider mb-2">Breakfast Items</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                Try Fresh Healthy Breakfast on Morning
              </h1>
              <p className="text-gray-600 mb-6">
                Don't miss this opportunity at a special discount just for this week.
              </p>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-md">
                Explore More
              </Button>
            </div>
          </div>

          {/* Right Banner */}
          <div className="relative rounded-lg overflow-hidden shadow-lg min-h-[300px] sm:min-h-[400px] flex flex-col justify-center items-center text-center p-8 bg-gray-800">
            <Image
              src="https://placehold.co/600x800.png"
              alt="Today's Best Deal"
              layout="fill"
              objectFit="cover"
              className="z-0 opacity-40"
              data-ai-hint="pizza deal"
            />
            <div className="relative z-10">
              <div className="bg-yellow-400 text-gray-900 rounded-full h-24 w-24 sm:h-28 sm:w-28 flex items-center justify-center text-3xl sm:text-4xl font-bold mb-4 shadow-md">
                50%<span className="text-xl sm:text-2xl block -mt-2 ml-1">OFF</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-1">TODAY'S</h2>
              <h2 className="text-4xl sm:text-5xl font-bold text-yellow-400">BEST DEAL</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Percent className="h-8 w-8 text-orange-500" />}
            title="Digital Coupons"
            description="Save time & money, load before you go."
          />
          <FeatureCard
            icon={<CalendarDays className="h-8 w-8 text-orange-500" />}
            title="Weekly Newsfeed"
            description="Browse our weekly newsfeed and add items to your cart."
          />
          <FeatureCard
            icon={<Star className="h-8 w-8 text-orange-500" />}
            title="Digital Spotlight"
            description="Find products easily & navigate store with the app."
          />
          <FeatureCard
            icon={<FeatureShoppingBagIcon className="h-8 w-8 text-orange-500" />}
            title="Online Promotion"
            description="Select an online shopping store to see current offers."
          />
        </div>
        <div className="flex justify-end mt-4 lg:hidden">
            <Button variant="ghost" size="icon">
                <ChevronRight className="h-6 w-6" />
            </Button>
        </div>
      </section>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="text-left shadow-lg hover:shadow-xl transition-shadow bg-card flex items-center p-4 sm:p-6 rounded-lg">
      <div className="mr-4 p-3 bg-orange-100 rounded-full">
        {icon}
      </div>
      <div>
        <CardTitle className="font-headline text-md sm:text-lg mb-1">{title}</CardTitle>
        <CardDescription className="text-xs sm:text-sm">{description}</CardDescription>
      </div>
    </Card>
  );
}
