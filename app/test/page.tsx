import React from "react";
import Flashlight from "./FlashlightComponent";
import LayoutDemo from "../default/default-components/LayoutDemo";

export default function Test() {
  return (
    <>
      <section className="font-inter">
        <LayoutDemo />
      </section>
      <section className="font-inter">
        <LayoutDemo />
      </section>
    </>
  );
}
