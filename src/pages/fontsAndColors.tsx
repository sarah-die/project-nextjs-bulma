import Layout from "../../components/layout";
import Head from "next/head";

export default function FontsAndColors() {
  return (
    <Layout>
      <Head>
        {/*  adds title in the tab bar */}
        <title>FontsAndColors</title>
      </Head>
      <body>
        <a
          className="is-size-5 has-text-weight-bold has-text-info-dark"
          href={
            "https://bulma.io/documentation/helpers/typography-helpers/#docsNav"
          }
        >
          Bulma Typography Helpers
        </a>
        <section className="section">
          <h1 className="is-size-1 has-text-centered">
            is-size-1 has-text-centered
          </h1>
          <h3 className="is-size-4 is-uppercase is-italic">
            is-size-4 is-uppercase is-italic
          </h3>
          <p className="is-size-4 has-text-right">
            this is some is-size-4 has-text-right Text
          </p>
          <p className="is-size-2">this is some is-size-2 Text</p>
          <p className="has-text-weight-bold">
            this is some has-text-weight-bold Text
          </p>
          <p className="has-text-weight-light">
            this is some has-text-weight-light Text
          </p>
          <h2 className="title">title</h2>
          <h3 className="subtitle">subtitle</h3>
        </section>
        <a
          className="is-size-5 has-text-weight-bold has-text-info-dark"
          href={"https://bulma.io/documentation/helpers/color-helpers/"}
        >
          Bulma Color
        </a>
        <section className="section">
          <p className="has-text-primary">has-text-primary</p>
          <p className="has-text-warning has-background-dark">
            has-text-warning has-background-dark
          </p>
          <p className="has-text-danger-dark">has-text-danger-dark</p>
          <p className="has-text-info">has-text-info</p>
          <p className="has-text-success">has-text-success</p>
          <p className="has-text-dark has-background-grey">
            has-text-dark has-background-grey
          </p>
          <p className="has-text-light has-background-success">
            has-text-light has-background-success
          </p>
        </section>
      </body>
    </Layout>
  );
}
