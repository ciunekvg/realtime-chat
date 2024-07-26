import Form from "./form";
import Infos from "./infos";
import supabase from "@/utils/supabase/supabase";

export default async function Flamengo() {
  const { data } = await supabase.from("flamengo").select();

  return (
    <div>
      <p>flamengo</p>

      <div>
        <Form />
      </div>

      <div>
        <Infos data={data ?? []} />
      </div>
    </div>
  );
}
