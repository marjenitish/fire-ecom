import { type NextRequest, NextResponse } from 'next/server';
import { createMiddlewareClient } from '@/lib/supabase/middleware';

export async function middleware(request: NextRequest) {
  const { supabase, response } = createMiddlewareClient(request);

  // Refresh session if expired - required for Server Components
  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
  await supabase.auth.getSession();

  const { data: { user } } = await supabase.auth.getUser();
  const { pathname } = request.nextUrl;

  // Auth routes: if user is logged in and tries to access login/signup, redirect to protected page
  if (user && (pathname === '/login' || pathname === '/signup')) {
    return NextResponse.redirect(new URL('/protected', request.url));
  }

  // Protected routes: if user is not logged in and tries to access protected/admin, redirect to login
  if (!user && (pathname.startsWith('/protected') || pathname.startsWith('/admin'))) {
    return NextResponse.redirect(new URL(`/login?redirect_to=${pathname}`, request.url));
  }
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - api/ (API routes)
     * - auth/ (auth routes like callback)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|api/|auth/callback).*)',
  ],
};
