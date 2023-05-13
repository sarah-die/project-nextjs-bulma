import Layout from "../../components/layout";
import Head from "next/head";

export default function Breadcrumbs() {
  return (
    <Layout>
      <Head>
        <title>Breadcrumbs</title>
      </Head>
      <div className="section pt-4 pb-0">
        <nav className="breadcrumb">
          <ul className="container is-size-6">
            <li>
              <a className="has-text-grey">MyWebsite</a>
            </li>
            <li>
              <a className="has-text-grey">Another Page</a>
            </li>
            <li className="is-active">
              <a>A child page</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="section">
        Breadcrumbs are used to show the user the page she is currently at.
      </div>
    </Layout>
  );
}
