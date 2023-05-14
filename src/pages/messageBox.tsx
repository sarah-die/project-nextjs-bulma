import Layout from "../../components/layout";
import Head from "next/head";

export default function MessageBox() {
  return (
    <Layout>
      <Head>
        <title>Message Box</title>
      </Head>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6-tablet">
              <div className="message">
                <div className="message-header">
                  <p>Earn points with the Cat Club</p>
                </div>
                <div className="message-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Adipisci aperiam minus mollitia natus nesciunt suscipit vero?
                  Beatae dicta dignissimos eveniet exercitationem in maxime
                  minus modi sit voluptas.
                </div>
              </div>
            </div>
            <div className="column is-6-tablet">
              <div className="message is-primary">
                <div className="message-header">
                  <p>Earn points with the Dog Club</p>
                </div>
                <div className="message-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Adipisci aperiam minus mollitia natus nesciunt suscipit vero?
                  Beatae dicta dignissimos eveniet exercitationem in maxime
                  minus modi sit voluptas.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
