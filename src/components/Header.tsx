import Link from 'next/link';
import { Logo } from './Logo';
import { UserNav } from './UserNav';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Search, Globe, ShoppingCart, ChevronDown } from 'lucide-react';

export function Header() {
  return (
    <>
      <div className="bg-yellow-400 text-yellow-900 text-center py-2.5 text-sm px-4">
        35% Exclusive discount plus free next day delivery, excludes sale.{' '}
        <Link href="#" className="font-semibold underline hover:text-yellow-700">
          LEARN MORE <ArrowRightCircle className="inline h-4 w-4 ml-1" />
        </Link>
      </div>
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between gap-4">
          <Logo />
          <div className="relative flex-1 max-w-2xl hidden md:flex">
            <Input
              type="search"
              placeholder="What are you looking..."
              className="pl-10 pr-4 h-11 rounded-md border-gray-300 focus:border-primary focus:ring-primary"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm px-2 sm:px-3">
                  <Globe className="h-4 w-4 mr-0 sm:mr-1" /> 
                  <span className="hidden sm:inline">English - EN</span>
                  <ChevronDown className="h-4 w-4 ml-0 sm:ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English - EN</DropdownMenuItem>
                <DropdownMenuItem>Spanish - ES</DropdownMenuItem>
                <DropdownMenuItem>French - FR</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" asChild className="text-sm px-2 sm:px-3">
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5 mr-0 sm:mr-1" /> <span className="hidden sm:inline">Cart</span>
              </Link>
            </Button>
            <UserNav />
          </div>
        </div>
      </header>
    </>
  );
}

// Added ArrowRightCircle to imports, it was used in the JSX.
import { ArrowRightCircle } from 'lucide-react';
