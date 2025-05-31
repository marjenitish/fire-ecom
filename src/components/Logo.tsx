import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function Logo() {
  const LogoIcon = siteConfig.logo;

  return (
    <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-primary/90 transition-colors">
      <LogoIcon className={cn("h-7 w-7", siteConfig.logoColor)} />
      <span className="font-headline">{siteConfig.name}</span>
    </Link>
  );
}
