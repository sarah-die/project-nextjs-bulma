import Layout from "../../components/layout";
import Link from "next/link";

export default function Home(props) {
  console.log(props);
  return (
    <Layout home>
      <section className="section">
        <div className="container">
          <h1 className="title">A small Bulma Project</h1>
          <p className="subtitle">
            Based on the tutorials by <strong>The Net Ninja</strong>!
          </p>
          <div className="content">
            <div className="columns is-vcentered is-multiline">
              <div className="column is-6">
                <div className="has-text-justified">
                  This is some text just to fill up this beautiful space. Let's
                  continue with lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Dicta dolorem ducimus eligendi fuga harum
                  laboriosam molestiae odit optio quae ratione soluta, ut,
                  veritatis voluptates! Earum exercitationem molestias officia
                  quia quos! Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Consequatur deserunt fuga iste nesciunt obcaecati
                  placeat qui. Accusamus dolore eaque earum eius excepturi in
                  ipsa libero, magni minus non nostrum omnis optio quam
                  quibusdam similique veniam veritatis voluptas voluptates!
                  Aspernatur consequatur cum dolorum, eligendi eum eveniet
                  exercitationem illum impedit laudantium, maxime molestias
                  mollitia necessitatibus nulla obcaecati placeat quae quibusdam
                  quo vitae voluptate voluptates? Consectetur, esse quia. Totam.
                </div>
              </div>
              <div className="column is-6">
                <h2 className="is-size-5 mb-3">
                  Click the following links to see the results of the tutorial
                  chapters
                </h2>

                <ol type="1">
                  <li>
                    <Link href="/anotherPage">To another Page</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href={"/fontsAndColors"}>Fonts and Colors</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href={"/spacingAndContainers"}>
                      Spacing and Containers
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href={"/breadcrumbs"}>Breadcrumbs</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href={"/gridColumns"}>
                      Grid Columns, Select and Footer
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href={"/responsiveClasses"}>Responsive Classes</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href={"/tabbedContent"}>Tabbed Content</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href={"/messageBox"}>Message Box</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href={"/buttons"}>Buttons</Link>
                  </li>
                  <li>
                    {" "}
                    <Link href={"/cards"}>Cards</Link>
                  </li>
                  <li>
                    <Link href={"/modals"}>
                      Modals and Forms (input field and checkbox)
                    </Link>
                  </li>
                </ol>
              </div>
              <div className="column is-6">
                <div className="has-text-justified">
                  The rest of the page is dedicated to a Marvel superhero:
                  Scarlett Witch alias Wanda Maximoff. This is to give a goal to
                  the work with Bulma. Have fun exploring!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
