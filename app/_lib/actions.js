"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";

// auth actions
export async function signInAction() {
  await signIn("google", {
    redirectTo: "/account",
  });
}

export async function signOutAction() {
  await signOut({
    redirectTo: "/",
  });
}

// CRUD actions

// in form data each field will be identified by its name

// Define the regex pattern for an alphanumeric string between 6 and 12 characters
const regex = /^[a-zA-Z0-9]{6,12}$/;

// Function to check if a nationalID is valid
function isValidNationalID(nationalID) {
  return regex.test(nationalID);
}

export async function updateGuest(formData) {
  const session = await auth();

  if (!session) throw new Error("You must be logged in!");

  const nationalID = formData.get("nationalID");

  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!isValidNationalID(nationalID)) {
    throw new Error("Please provide a valid national ID");
  }

  const updatedData = { nationalID, countryFlag, nationality };

  const { data, error } = await supabase
    .from("guests")
    .update(updatedData)
    .eq("id", session.user.guestId)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Guest could not be updated");
  }

  revalidatePath("/account/profile");

  return data;
}
