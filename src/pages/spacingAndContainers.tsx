import Layout from "../../components/layout";
import Head from "next/head";

export default function SpacingAndContainers() {
  return (
    <Layout>
      <Head>
        <title>Spacing and Containers</title>
      </Head>
      <h1 className="pt-3 ml-3">Hello guys. pt-3 ml-3</h1>
      <h1 className="py-1 my-3">Hello guys. py-1 my-3</h1>
      <h1 className="px-4 mx-6">Hello guys. px-4 mx-6</h1>
      <h1 className="p-3 m-3">Hello guys. p-3 m-3</h1>
      <section className="section">
        <p> This is some text to say "hello" to you. </p>
      </section>
      <div className="section has-background-success">
        <div className="container">
          type lorem30 and press tab to get a lorem with 30 words. Add
          className="container" to get auto margin and a maxWidth
        </div>
      </div>
      <div className="section">
        <div className="container">
          <p>
            This is a section with a container inside and some Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Alias amet blanditiis
            consequuntur dolore! Accusantium, ipsum?
          </p>
        </div>
      </div>
    </Layout>
  );
}
