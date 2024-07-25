"use client";

// import AuthButton from "@/components/AuthButton";
import InputMessage from "@/components/InputMessage";
import { createClient } from "@/utils/supabase/supabase";
import { redirect } from "next/navigation";
import RealtimeMessages from "./realtimeMessages";
import { useEffect, useState } from "react";

export default function AuthenticatedPage() {
  const supabase = createClient();

  const [user, setUser] = useState("");
  const [data, setData] = useState([]);

  const fetch = async () => {
    let { data } = await supabase.from("messages").select();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return redirect("/login");
    } else {
      setUser(user.email as string);
    }

    setData(data);
  };

  useEffect(() => {
    fetch();
  }, [data]);

  return (
    <div className="flex-1 w-full flex flex-col items-center">
      <div className="w-full">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            Olá, {user}
            {/* <AuthButton /> */}
          </div>
        </nav>
      </div>

      <div className="flex-1 flex flex-col items-center h-full w-full gap-2 my-2">
        <div className="border rounded-lg p-4 flex-1 w-11/12">
          <RealtimeMessages serverMessages={data ?? []} />
        </div>
        <InputMessage />
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs bg-dark_purple">
        <div>
          <p>Powered by {"ciunek"}</p>

          <div className="flex justify-between">
            <a href="https://www.linkedin.com/in/viniciusciunek/" target="_blank" className="font-bold hover:underline" rel="noreferrer">
              linkedin
            </a>{" "}
            <a href="https://github.com/viniciusciunek" target="_blank" className="font-bold hover:underline" rel="noreferrer">
              github
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
