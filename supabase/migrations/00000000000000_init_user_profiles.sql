-- Create public.users table
CREATE TABLE public.users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'customer' NOT NULL CHECK (role IN ('customer', 'influencer', 'admin')),
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Add comments to the table and columns
COMMENT ON TABLE public.users IS 'Stores public user profile information linked to auth.users.';
COMMENT ON COLUMN public.users.id IS 'References auth.users.id.';
COMMENT ON COLUMN public.users.full_name IS 'User''s full name.';
COMMENT ON COLUMN public.users.avatar_url IS 'URL for user''s avatar image.';
COMMENT ON COLUMN public.users.role IS 'User role: customer, influencer, or admin.';

-- Enable RLS
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Policies for public.users table
CREATE POLICY "Allow individual user read access to their own profile"
ON public.users
FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Allow individual user update access to their own profile"
ON public.users
FOR UPDATE
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

CREATE POLICY "Allow admin full access to all profiles"
ON public.users
FOR ALL -- Allows SELECT, INSERT, UPDATE, DELETE for admins
USING (EXISTS (
  SELECT 1
  FROM public.users u
  WHERE u.id = auth.uid() AND u.role = 'admin'
))
WITH CHECK (EXISTS (
  SELECT 1
  FROM public.users u
  WHERE u.id = auth.uid() AND u.role = 'admin'
));


-- Function to create a public user profile when an auth user is created
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public -- Important for security
AS $$
BEGIN
  INSERT INTO public.users (id, full_name, avatar_url, role)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name', -- Attempt to get full_name if provided during signup options.data
    NEW.raw_user_meta_data->>'avatar_url', -- Attempt to get avatar_url if provided
    COALESCE((NEW.raw_user_meta_data->>'role')::text, 'customer')::text -- Allow role override during signup, else 'customer'
  );
  RETURN NEW;
END;
$$;

-- Trigger to call the function after a new user is inserted into auth.users
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update public.users.updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = timezone('utc'::text, now());
   RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update updated_at on row update
CREATE TRIGGER update_users_updated_at
BEFORE UPDATE ON public.users
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Seed an admin user (replace with your actual admin user's ID after they sign up)
-- Example: Assuming a user signs up and their auth.users.id is 'your-admin-user-uuid'
-- You would run this manually in your Supabase SQL editor after the admin user signs up.
-- INSERT INTO public.users (id, full_name, role) 
-- VALUES ('your-admin-user-uuid', 'Admin User', 'admin')
-- ON CONFLICT (id) DO UPDATE SET role = 'admin';

-- Make sure the handle_new_user function has the correct ownership
-- Usually defaults to the user creating it, which should be fine.
-- ALTER FUNCTION public.handle_new_user() OWNER TO supabase_admin; -- Or postgres if on local/self-hosted

