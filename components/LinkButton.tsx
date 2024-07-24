import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

interface LinkButtonProps {
  link: string;
  name: string;
}

export default async function LinkButton({ link, name }: LinkButtonProps) {
  return (
    <Link href={`/${link}`} className="bg-purple-700 font-bold px-4 py-2 border  rounded-xl hover:shadow hover:shadow-inner border-gray-900">
      {name}
    </Link>
  );
}
