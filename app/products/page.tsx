"use client";

import { createClient } from "@/utils/supabase/supabase";
import { useEffect, useState } from "react";
import RealtimeProducts from "./realtimeProducts";

export default function Products() {
  const supabase = createClient();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);

  const handleProduct = async () => {
    // const supabase = createClient();

    if (!name || !price) {
      setError("Verifique os campos!");
      return false;
    }

    const { data, error } = await supabase
      .from("products")
      .insert([{ name: name, price: price }])
      .select();

    if (!data) {
      setError("Erro ao inserir!" + error);
      return false;
    }

    setName("");
    setPrice("");
  };

  const fetchProducts = async () => {
    // const supabase = createClient();

    let { data: products, error } = await supabase.from("products").select("*");

    if (error) {
      setError("Erro ao buscar produtos: " + error.message);
      return;
    }

    if (!products) {
      setError("Nenhum produto encontrado!");
      return;
    }

    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div>
        <form action={handleProduct}>
          <div className="flex flex-col justify-center items-center gap-2 p-4">
            <input className="bg-night p-2 rounded-md text-mint_cream" placeholder="Product Name:" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            <input
              className="bg-night p-2 rounded-md text-mint_cream"
              placeholder="Product Price:"
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button className="bg-green-500 rounded-md w-full">SALVAR</button>
          </div>
        </form>

        <p>{error}</p>
      </div>
      <div>
        <RealtimeProducts serverProducts={products ?? []} />
      </div>
    </div>
  );
}
