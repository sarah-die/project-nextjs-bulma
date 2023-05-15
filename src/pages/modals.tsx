import Layout from "../../components/layout";
import Head from "next/head";
import { useState } from "react";
import clsx from "clsx";

export default function Modals() {
  const [modalIsActive, setModalIsActive] = useState<boolean>(false);
  return (
    <Layout>
      <Head>
        <title>Cards</title>
      </Head>
      <section className="section">
        <div className="container">
          <p>modals only show when the is-active is applied</p>
          <button className="button" onClick={() => setModalIsActive(true)}>
            Open Modal
          </button>
        </div>
      </section>
      <div className={clsx("modal", modalIsActive && "is-active")}>
        <div
          className="modal-background"
          onClick={() => setModalIsActive(false)}
        ></div>
        <div className="modal-content has-background-white py-5 px-5">
          <h3 className="title mb-6">Join the club</h3>
        </div>
      </div>
    </Layout>
  );
}
