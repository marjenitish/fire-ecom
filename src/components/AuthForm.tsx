'use client';

import { useState, type FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createBrowserClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from 'lucide-react';
import Link from 'next/link';

interface AuthFormProps {
  mode: 'login' | 'signup';
}

export function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createBrowserClient();

  const redirectTo = searchParams.get('redirect_to') || '/protected';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      if (mode === 'signup') {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            },
            // emailRedirectTo: `${window.location.origin}/auth/callback`, // For email confirmation
          },
        });
        if (signUpError) throw signUpError;
        // For now, direct login. If email confirmation is enabled, user needs to confirm.
        // router.push('/check-email'); // Or a page saying to check email
        // For simplicity in boilerplate, auto-login or redirect to login
        if (data.user) {
           router.push(redirectTo);
           router.refresh();
        } else {
          // This case might happen if email confirmation is required.
          // For this boilerplate, we assume it's not or handle it as a success.
          setError("Signup successful. Please check your email to confirm your account, or try logging in.");
        }

      } else { // login
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (signInError) throw signInError;
        router.push(redirectTo);
        router.refresh();
      }
    } catch (err: any) {
      setError(err.error_description || err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center py-8">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">
            {mode === 'login' ? 'Welcome Back!' : 'Create an Account'}
          </CardTitle>
          <CardDescription>
            {mode === 'login'
              ? 'Enter your credentials to access your account.'
              : 'Fill in the details below to get started.'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Authentication Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div className="space-y-1">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  placeholder="John Doe"
                  disabled={isLoading}
                />
              </div>
            )}
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                disabled={isLoading}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                placeholder="••••••••"
                disabled={isLoading}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (mode === 'login' ? 'Signing In...' : 'Creating Account...') : (mode === 'login' ? 'Sign In' : 'Create Account')}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 text-sm">
          {mode === 'login' ? (
            <p>
              Don&apos;t have an account?{' '}
              <Button variant="link" asChild className="p-0 h-auto">
                <Link href="/signup" className="text-primary hover:underline">
                  Sign up
                </Link>
              </Button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
               <Button variant="link" asChild className="p-0 h-auto">
                <Link href="/login" className="text-primary hover:underline">
                  Log in
                </Link>
              </Button>
            </p>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
