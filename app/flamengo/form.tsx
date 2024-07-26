"use client";

import { getUser } from "@/utils/supabase/actions";
import supabase from "@/utils/supabase/supabase";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);

  const reset = () => {
    setName("");
    setNumber(0);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // const supabase = createClient();

    let user = await getUser();

    const { data, error } = await supabase
      .from("flamengo")
      .insert([{ name: name, number: number, created_by: user?.id }])
      .select();

    if (error) {
      console.log("Erro" + error);
    }

    if (data) {
      console.log("ok inserido");
    }

    return reset();
  };

  return (
    <div className="backdrop-blur rounded-md p-2 bg-mint_cream/10 ">
      <h1 className="text-center">FORMULARIO - CLIENT</h1>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col p-2 gap-2">
          <input className="p-2 rounded-md text-night" type="text" placeholder="Player Name:" value={name} onChange={(e) => setName(e.target.value)} required />
          <input className="p-2 rounded-md text-night" type="number" placeholder="Player Number:" value={number} onChange={(e) => setNumber(Number(e.target.value))} required />

          <button className="px-2 rounded-md bg-green-500" type="submit">
            SALVAR
          </button>
        </div>
      </form>

      {/* <div className="flex flex-row justify-around">
        <p>{name}</p>
        <p>{number == 0 ? "" : number}</p>
      </div> */}
    </div>
  );
};

export default Form;
