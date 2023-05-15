import Layout from "../../components/layout";
import Head from "next/head";

// remember: is-centered on colums, is-hidden-xxx, is-variable on columns

export default function Cards() {
  return (
    <Layout>
      <Head>
        <title>Cards</title>
      </Head>
      <section className="section is-hidden-mobile">
        <div className="container">
          <h3 className="title has-text-centered is-size-4">
            Related Products
          </h3>
          <div className="columns mt-5 is-8 is-variable is-centered">
            <div className="column is-4-tablet is-3-desktop">
              <div className="card">
                <div className="card-image has-text-centerd-px-6">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Brot_des_Jahres_2018.jpg/1280px-Brot_des_Jahres_2018.jpg"
                    alt="Von Stollenbaecker - Eigenes Werk, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=69413249"
                  />
                </div>
                <div className="card-content">
                  <p>11.99 €</p>
                  <p className="title is-size-5">This is another Product</p>
                </div>
                <footer className="card-footer">
                  <p className="card-footer-item">
                    <a href="" className="has-text-grey">
                      View
                    </a>
                  </p>
                </footer>
              </div>
            </div>
            <div className="column is-4-tablet is-3-desktop">
              <div className="card">
                <div className="card-image has-text-centerd-px-6">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Brot_des_Jahres_2018.jpg/1280px-Brot_des_Jahres_2018.jpg"
                    alt="Von Stollenbaecker - Eigenes Werk, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=69413249"
                  />
                </div>
                <div className="card-content">
                  <p>11.99 €</p>
                  <p className="title is-size-5">This is a great Product</p>
                </div>
                <footer className="card-footer">
                  <p className="card-footer-item">
                    <a href="" className="has-text-grey">
                      View
                    </a>
                  </p>
                </footer>
              </div>
            </div>
            <div className="column is-4-tablet is-3-desktop">
              <div className="card">
                <div className="card-image has-text-centerd-px-6">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Brot_des_Jahres_2018.jpg/1280px-Brot_des_Jahres_2018.jpg"
                    alt="Von Stollenbaecker - Eigenes Werk, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=69413249"
                  />
                </div>
                <div className="card-content">
                  <p>11.99 €</p>
                  <p className="title is-size-5">This is an amazing Product</p>
                </div>
                <footer className="card-footer">
                  <p className="card-footer-item">
                    <a href="" className="has-text-grey">
                      View
                    </a>
                  </p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
