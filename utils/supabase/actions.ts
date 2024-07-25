"use server";

import { createClient } from "./server";

export const insertMessage = async (message: string, userId: string | null) => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("messages")
    .insert([{ message: message, user: userId }])
    .select();

  if (error) {
    console.error("Error inserting message:", error);
    return null;
  }

  return data;
};

export const getUser = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};
