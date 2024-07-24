import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <form action={signOut}>
      <button className="py-1 px-6 flex rounded-md no-underline bg-mint_cream hover:bg-licorice text-night font-bold uppercase hover:text-mint_cream hover:border hover:border-mint_cream">
        Logout
      </button>
    </form>
  ) : (
    <Link
      href="/login"
      className="py-1 px-6 flex rounded-md no-underline bg-mint_cream hover:bg-licorice text-night font-bold uppercase hover:text-mint_cream hover:border hover:border-mint_cream"
    >
      Login
    </Link>
  );
}
