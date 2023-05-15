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
          <form>
            {/* Each form field has to be surrounded by a div.field. Applies default spacing. */}
            <div className="field">
              <label className="label">Name</label>
              {/* whenever user has control over information e.g. input fields, surround them by control-class*/}
              <div className="control">
                <input type="text" className="input" placeholder="Name" />
              </div>
            </div>
            <div className="field">
              <label className="label">E-Mail</label>
              {/* whenever user has control over information e.g. input fields, surround them by control-class*/}
              <div className="control">
                <input type="text" className="input" placeholder="E-Mail" />
              </div>
            </div>
            {/*  Important: Follow those styles down below to style it in the correct way.*/}
            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input type="checkbox" /> I agree to the{" "}
                  <a href="">terms and conditions.</a>
                </label>
              </div>
            </div>
            <div className="mt-6 has-text-centered">
              <button className="button is-warning">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
