import Layout from "../../components/layout";
import Head from "next/head";

export default function Buttons() {
  return (
    <Layout>
      <Head>
        <title>Buttons</title>
      </Head>
      <section className="section">
        <div className="container">
          <button className="button">standard</button>
          <button className="button is-warning is-small">
            button is-warning is-small
          </button>
          <button className="button is-primary is-large">
            is-primary is-large
          </button>
          <button className="button is-rounded">is-rounded</button>
          <div className="has-text-centered mt-5">
            <button className="button is-loading">
              is-loading e.g. while async task
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
