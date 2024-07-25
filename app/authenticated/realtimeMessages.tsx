"use client";

import Message from "@/components/Message";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/supabase";

type TypeMessage = {
  id: string;
  message: string;
  user: string;
  created_at: string;
};

export default function RealtimeMessages({ serverMessages }: { serverMessages: TypeMessage[] }) {
  const supabase = createClient();

  const [messages, setMessages] = useState(serverMessages);

  useEffect(() => {
    const channel = supabase
      .channel("realtime messages")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "messages",
        },
        (payload) => {
          setMessages([...messages, payload.new as TypeMessage]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, messages, setMessages]);

  return (
    <div>
      {messages?.map((message, index) => (
        <Message key={index} user={message.user} message={message.message} />
      ))}
    </div>
  );
}
