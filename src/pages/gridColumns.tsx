import Layout from "../../components/layout";
import Head from "next/head";

export default function GridColumns() {
  return (
    <Layout>
      <Head>
        <title>Grid Columns</title>
      </Head>
      <section className="section">
        <div className="container">
          {/*  this colums div surrounds all the columns created*/}
          <div className="columns is-vcentered">
            <div className="column is-3">
              <h1 className="is-size-1 title">The title</h1>
              <h2 className="is-size-2 subtitle"> and a pretty subtitle</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius.
                Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Atque.
              </p>
            </div>
            <div className="column is-5 has-text-centered">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/ICOM_International_Museum_Day_2023_image.png/480px-ICOM_International_Museum_Day_2023_image.png"
                className="px-6"
                alt="this is a image"
              />
            </div>
            <div className="column is-4">
              <div className="is-size-4 mb-4">10.99 €</div>
              <p className="mb-4 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius.
                Lorem ipsum dolor sit amet, consectetur.
              </p>
              <form>
                <div className="field">
                  <div className="control mb-6">
                    <div className="select is-dark">
                      <select>
                        <option>small</option>
                        <option>medium</option>
                        <option>large</option>
                      </select>
                    </div>
                  </div>
                </div>
                <button className="button is-primary">Add to Cart</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
