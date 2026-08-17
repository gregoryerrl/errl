import { redirect } from "next/navigation";

// /simple-rpg has no landing page of its own — send visitors to the first
// section the root page links to, instead of 404ing.
export default function SimpleRpgIndex() {
  redirect("/simple-rpg/resume");
}
