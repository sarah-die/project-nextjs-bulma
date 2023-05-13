import Layout from "../../components/layout";
import Head from "next/head";

export default function AnotherPage() {
  return (
    <Layout>
      <Head>
        {/*  adds title in the tab bar */}
        <title>Another Page</title>
      </Head>
      <section className="section">
        {/*  my-container ist eine globale CSS-Property. Diese wird in _app importiert.*/}
        <div className="my-container">
          <h1 className="title">Hello!</h1>
          <h1>Welcome to another page</h1>
        </div>
      </section>
    </Layout>
  );
}
