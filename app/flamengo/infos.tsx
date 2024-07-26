"use client";

import supabase from "@/utils/supabase/supabase";
import { useEffect, useState } from "react";

type Player = {
  id: number;
  name: string;
  number: number;
  created_by: string;
  created_at: string;
};

export default function Infos({ data }: { data: Player }) {
  const [players, setPlayers] = useState(data);

  useEffect(() => {
    const channel = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "flamengo",
        },
        (payload) => {
          setPlayers([...players, payload.new as Player]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, players, setPlayers]);

  return (
    <div>
      <ul>
        {players.map((player: Player, index: any) => (
          <p>
            {player.id} - {player.name} {player.number}
          </p>
        ))}
      </ul>
    </div>
  );
}
