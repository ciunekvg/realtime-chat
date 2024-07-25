"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/supabase";

type Product = {
  id: string;
  name: string;
  price: number;
  created_at: string;
};

export default function RealtimeProducts({ serverProducts }: { serverProducts: Product[] }) {
  const supabase = createClient();

  const [products, setProducts] = useState(serverProducts);

  useEffect(() => {
    const channel = supabase
      .channel("realtime messages")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "products",
        },
        (payload) => {
          setProducts([...products, payload.new as Product]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, products, setProducts]);

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}: ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
