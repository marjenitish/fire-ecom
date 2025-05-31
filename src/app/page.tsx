import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center px-4">
      <h1 className="text-5xl font-headline font-bold tracking-tight text-primary sm:text-6xl md:text-7xl">
        Welcome to Next Starter
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/80 sm:text-xl">
        Your foundation for building amazing Next.js applications with Supabase and Tailwind CSS.
        Jumpstart your project with pre-configured authentication, theming, and a modern UI.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button asChild size="lg">
          <Link href="/signup">Get Started</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/login">Sign In</Link>
        </Button>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl w-full">
        <FeatureCard
          icon={<CheckCircle className="h-6 w-6 text-accent" />}
          title="Next.js 15 Ready"
          description="Leverage the latest features of Next.js for optimal performance and developer experience."
        />
        <FeatureCard
          icon={<CheckCircle className="h-6 w-6 text-accent" />}
          title="Supabase Integrated"
          description="Full authentication and database setup with Supabase, including user roles."
        />
        <FeatureCard
          icon={<CheckCircle className="h-6 w-6 text-accent" />}
          title="Tailwind Themed"
          description="Professionally designed theme with Sky Blue, Light Gray, and Teal accents using Tailwind CSS."
        />
      </div>
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
    <Card className="text-left shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        {icon}
        <CardTitle className="font-headline text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
