import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import HvBase from "~/components/threejs/hvBase";

export default component$(() => {
  return (
    <>
      <HvBase />
    </>
  );
});

export const head: DocumentHead = {
  title: "Hector Robayo - Software Developer",
  meta: [
    {
      name: "description",
      content: "portfolio of Hector Robayo, software developer",
    },
  ],
};
