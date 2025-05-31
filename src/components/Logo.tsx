import { Rocket } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-primary hover:text-primary/90 transition-colors">
      <Rocket className="h-6 w-6" />
      <span className="font-headline">Next Starter</span>
    </Link>
  );
}
