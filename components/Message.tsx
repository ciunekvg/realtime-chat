import { User } from "@supabase/supabase-js";

interface MessageProps {
  //   user: User;
  user: string;
  message: string;
}

export default async function Message({ user, message }: MessageProps) {
  return (
    <div>
      <p>{user}</p>
      <div className="p-2 border w-full rounded-md bg-mint_cream/10">{message}</div>
    </div>
  );
}
