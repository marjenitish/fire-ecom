import { NextResponse, type NextRequest } from 'next/server';
import { createServerClient } from '@/lib/supabase/server'; // Use the correct server client

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const next = requestUrl.searchParams.get('next') || '/'; // Default redirect to home or a protected page

  if (code) {
    const supabase = createServerClient(); // Use the correct server client that can handle cookies for server actions
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      return NextResponse.redirect(new URL(next, request.url).toString());
    }
  }

  // return the user to an error page with instructions
  console.error('Supabase auth callback error or no code');
  return NextResponse.redirect(new URL('/login?error=auth_callback_failed', request.url).toString());
}
