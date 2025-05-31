import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-primary/90 transition-colors">
      <ShoppingBag className="h-7 w-7 text-green-500" />
      <span className="font-headline">BoroBazar</span>
    </Link>
  );
}
