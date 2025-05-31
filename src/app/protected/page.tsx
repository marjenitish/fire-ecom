import { getAuthenticatedUser } from '@/lib/supabase/utils';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default async function ProtectedPage() {
  const user = await getAuthenticatedUser();

  if (!user) {
    // This should ideally be handled by middleware, but as a fallback:
    redirect('/login');
  }

  return (
    <div className="flex flex-col items-center space-y-8">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
            <ShieldCheck className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-3xl font-headline">Protected Area</CardTitle>
          <CardDescription className="text-lg">
            Welcome, {user.email}! This content is exclusive to authenticated users.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <p className="text-foreground/80">
            You have successfully accessed a protected route. This demonstrates how authentication is
            set up in Next Starter.
          </p>
          <div className="rounded-lg overflow-hidden border">
             <Image 
                src="https://placehold.co/600x400.png" 
                alt="Abstract secure connection" 
                width={600} 
                height={400}
                className="w-full h-auto object-cover"
                data-ai-hint="secure connection"
              />
          </div>
          <p className="text-sm text-muted-foreground">
            User ID: {user.id}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
