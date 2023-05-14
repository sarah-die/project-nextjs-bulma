import Layout from "../../components/layout";
import Head from "next/head";

export default function ResponsiveClasses() {
  return (
    <Layout>
      <Head>
        <title>Responsive Classes</title>
      </Head>
      <div className="section">
        <div className="container">
          Responsive Classes: -mobile, -tablet, -desktop, -widescreen, -fullhd{" "}
          <br />
          E.g. is-size-1 = applied to all screen sizes, is-size-1-desktop =
          applied to desktop size
          <br />
          E.g. column is-6-tablet is-4-desktop
          <br />
          multiline = defines that if there is not enough room for the columns
          than go to the next line
          <br />
          is-8 is-variable = to increase the gap betwenn columns
        </div>
      </div>
      <>
        <section className="section">
          <div className="container">
            {/*  this colums div surrounds all the columns created*/}
            <div className="columns is-vcentered is-multiline">
              <div className="column is-6-tablet is-3-desktop">
                <h1 className="is-size-3-mobile is-size-1-desktop title">
                  The title
                </h1>
                <h2 className="is-size-3-mobile is-size-2-desktop subtitle">
                  {" "}
                  and a pretty subtitle
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eius. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Atque.
                </p>
              </div>
              <div className="column is-6-tablet is-5-desktop has-text-centered">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/ICOM_International_Museum_Day_2023_image.png/480px-ICOM_International_Museum_Day_2023_image.png"
                  className="px-6"
                  alt="this is a image"
                />
              </div>
              <div className="column is-12-tablet is-4-desktop">
                <div className="is-size-4 mb-4">10.99 €</div>
                <p className="mb-4 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eius. Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns is-8 is-variable">
              <div className="column is-7-tablet">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                dignissimos dolor ducimus eum excepturi quasi, quo sapiente
                soluta. Blanditiis dicta facere impedit iure minima placeat
                possimus repellendus rerum veniam vitae.
              </div>
              <div className="column is-5-tablet">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid architecto autem blanditiis corporis culpa doloremque
                eveniet ipsa maxime molestiae nobis optio, placeat saepe, sequi
                suscipit tempore voluptas voluptate voluptatem voluptates?
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
}
