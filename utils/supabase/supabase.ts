import { createClient as client } from "@supabase/supabase-js";

export const createClient = () => client(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
