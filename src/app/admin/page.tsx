import { getCurrentUserRole, getAuthenticatedUser } from '@/lib/supabase/utils';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { UserCog, AlertTriangle, ShieldAlert } from 'lucide-react';
import Image from 'next/image';

export default async function AdminDashboardPage() {
  const user = await getAuthenticatedUser();
  
  if (!user) {
    // Should be caught by middleware, but as a fallback
    redirect('/login?redirect_to=/admin');
  }

  const userRole = await getCurrentUserRole();

  if (userRole !== 'admin') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
        <Card className="w-full max-w-md text-center shadow-lg">
          <CardHeader>
             <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 mb-4">
                <ShieldAlert className="h-8 w-8 text-destructive" />
            </div>
            <CardTitle className="text-2xl font-headline text-destructive">Access Denied</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80">
              You do not have the necessary permissions to view this page. This area is restricted to administrators only.
            </p>
             <Image 
                src="https://placehold.co/400x200.png" 
                alt="Access Denied" 
                width={400} 
                height={200}
                className="w-full h-auto object-cover mt-4 rounded-md"
                data-ai-hint="access denied"
              />
          </CardContent>
        </Card>
      </div>
    );
  }

  // Admin content
  return (
    <div className="flex flex-col items-center space-y-8">
      <Card className="w-full max-w-3xl shadow-xl">
        <CardHeader className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 mb-4">
            <UserCog className="h-8 w-8 text-accent" />
          </div>
          <CardTitle className="text-3xl font-headline">Administrator Dashboard</CardTitle>
          <CardDescription className="text-lg">
            Welcome, Admin {user.email}! Manage your application from here.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Admin Privileges Active</AlertTitle>
            <AlertDescription>
              You are currently operating with administrator privileges. Please proceed with caution.
            </AlertDescription>
          </Alert>
          <p className="text-foreground/80 text-center">
            This is the main control panel for administrators. Future admin-specific functionalities
            will be available here.
          </p>
          <div className="rounded-lg overflow-hidden border">
            <Image 
                src="https://placehold.co/600x300.png" 
                alt="Admin dashboard graphic" 
                width={600} 
                height={300}
                className="w-full h-auto object-cover"
                data-ai-hint="dashboard analytics"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
