import Link from 'next/link';
import { Logo } from './Logo';
import { UserNav } from './UserNav';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Logo />
        <nav className="ml-6 flex items-center space-x-4 lg:space-x-6">
          <Button variant="link" asChild className="text-muted-foreground hover:text-foreground">
            <Link href="/">Home</Link>
          </Button>
          <Button variant="link" asChild className="text-muted-foreground hover:text-foreground">
            <Link href="/protected">Protected</Link>
          </Button>
          <Button variant="link" asChild className="text-muted-foreground hover:text-foreground">
            <Link href="/admin">Admin</Link>
          </Button>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <UserNav />
        </div>
      </div>
    </header>
  );
}
