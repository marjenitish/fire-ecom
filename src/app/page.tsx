
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { 
  Menu, 
  ChevronDown, 
  Percent, 
  CalendarDays, 
  Star, 
  ShoppingBag as FeatureShoppingBagIcon,
  ChevronRight,
  Search as SearchIcon,
  Plus,
  Eye
} from "lucide-react";
import { bestSellerProducts, type Product } from "@/data/demo";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Secondary Navigation Bar */}
      <nav className="bg-background border-b border-border/40 py-3">
        <div className="container mx-auto flex items-center justify-between">
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

      {/* Mobile Search Bar */}
      <div className="container mx-auto md:hidden py-3">
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
      <section className="container mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 relative rounded-lg overflow-hidden shadow-lg min-h-[300px] sm:min-h-[400px] flex items-center p-8 bg-gray-100">
            <Image
              src="https://chinabazaar.silkinv.com/storage/v1/object/sign/tasteme/banner-10.png?token=eyJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ0YXN0ZW1lL2Jhbm5lci0xMC5wbmciLCJpYXQiOjE3NDg3MjA4OTUsImV4cCI6MTc4MDI1Njg5NX0.EfVh3WOqMJg9A4Jt_hWJyuTAhLfM_vt43ZkKjKx7BKU"
              alt="Healthy Breakfast"
              layout="fill"
              objectFit="cover"
              className="z-0"
              data-ai-hint="healthy breakfast food"
            />
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg min-h-[300px] sm:min-h-[400px] flex flex-col justify-center items-center text-center p-8 bg-gray-800">
            <Image
              src="https://chinabazaar.silkinv.com/storage/v1/object/sign/tasteme/banner-11.png?token=eyJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ0YXN0ZW1lL2Jhbm5lci0xMS5wbmciLCJpYXQiOjE3NDg3MjA5MTUsImV4cCI6MTc4MDI1NjkxNX0.7iZ_xgzY09FPy1pA-RHhv0h1wsYSNcNHVHCqMaIMFgU"
              alt="Today's Best Deal"
              layout="fill"
              objectFit="cover"
              className="z-0 opacity-40"
              data-ai-hint="pizza deal"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-8 md:py-12">
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

      {/* Best Sellers Section */}
      <section className="container mx-auto py-8 md:py-12">
        <h2 className="text-2xl font-semibold text-center text-foreground mb-2">Best seller grocery near you</h2>
        <p className="text-muted-foreground text-center mb-8">We provide best quality & fresh grocery items near your location</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {bestSellerProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
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

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const showPlusIcon = product.onSale || !product.price.includes('-');

  return (
    <Card className="group overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
      <CardContent className="p-3 sm:p-4 relative">
        <div className="aspect-square relative bg-gray-50 rounded-md overflow-hidden mb-3">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="contain" // Changed to contain to better show products
            className="group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={product.aiHint}
          />
          {product.onSale && (
            <Badge className="absolute top-2 left-2 bg-teal-500 text-white px-2 py-1 text-xs">
              ON SALE
            </Badge>
          )}
        </div>
        
        <div className="flex justify-between items-start mb-1.5">
          <div>
            <span className="text-base sm:text-lg font-semibold text-foreground">{product.price}</span>
            {product.originalPrice && (
              <span className="text-xs sm:text-sm text-muted-foreground line-through ml-1.5">{product.originalPrice}</span>
            )}
          </div>
          <Button 
            size="icon" 
            variant="outline"
            className="rounded-full bg-teal-500 hover:bg-teal-600 text-white border-teal-500 hover:border-teal-600 h-7 w-7 sm:h-8 sm:w-8 shrink-0"
            aria-label={showPlusIcon ? "Add to cart" : "View product"}
          >
            {showPlusIcon ? <Plus className="h-4 w-4 sm:h-5 sm:w-5" /> : <Eye className="h-4 w-4 sm:h-5 sm:w-5" />}
          </Button>
        </div>
        
        <h3 className="text-xs sm:text-sm font-medium text-foreground mb-0.5 truncate" title={product.name}>
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground">{product.unit}</p>
      </CardContent>
    </Card>
  );
}
