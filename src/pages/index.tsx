import { useState } from "react";
import clsx from "clsx";
import Layout from "../../components/layout";
import Link from "next/link";
import {hi} from "./index.module.css"

export default function Home(props) {
  const [buttonSize, setButtonSize] = useState<boolean>(true);

console.log(props)
  return (
    <Layout home>
      <main>
        <section className="section">
          <div className={hi} id="HALLOOOOOO">
            <h1 className="title">Hello World</h1>
            <p className="subtitle">
              My first website 2 with <strong>Bulma</strong>!
            </p>
            <button
              className={clsx("button", buttonSize ? "is-small" : "is-large")}
              onClick={() => {
                setButtonSize(!buttonSize);
              }}
            >
              Button
            </button>
            <h2>
              <Link href="/anotherPage">To another Page</Link>
            </h2>
          </div>
        </section>
      </main>
    </Layout>
  );
}
