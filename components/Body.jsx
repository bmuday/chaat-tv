"use client";
import { useDarkStore } from "@/stores";
import Header from "./header";
import Footer from "./footer";
import classnames from "classnames";

export default function Body({ children }) {
  const dark = useDarkStore((state) => state.dark);
  const dynamic_class = classnames({
    "flex flex-col justify-between container": true,
    dark,
  });

  return (
    <body className={dynamic_class}>
      <Header />
      <main className={dynamic_class}>{children}</main>
      <Footer />
    </body>
  );
}
