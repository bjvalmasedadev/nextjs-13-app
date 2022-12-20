import React from "react";
import { Counter } from "./posts/Counter";

export default function PostLayout({ children }) {
  return (
    <div>
      {/* <Counter /> */}
      <marquee style={{ color: "purple" }}>
        This is a testing app whit next 13
      </marquee>
      {children}
    </div>
  );
}
