import { useState } from "react";
import clsx from "clsx";
import Layout from "../../components/layout";
import Link from "next/link";

export default function Home(props) {
  const [buttonSize, setButtonSize] = useState<boolean>(true);

  console.log(props);
  return (
    <Layout home>
      <main className="container">
        <section className="section">
          <h1 className="title">Hello World</h1>
          <p className="subtitle">
            My first website 2 with <strong>Bulma</strong>!
          </p>
          <button
            className={clsx(
              "button",
              buttonSize ? "is-small" : "is-large",
              "myGreenButton"
            )}
            onClick={() => {
              setButtonSize(!buttonSize);
            }}
          >
            Button
          </button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, at
            eius eveniet fuga hic molestias neque perferendis vero. Incidunt
            laboriosam natus nostrum obcaecati possimus quae quo recusandae,
            repudiandae voluptate! Aspernatur consectetur culpa distinctio
            doloribus ducimus ipsum labore magni maiores nam provident qui,
            recusandae rem tempore temporibus tenetur velit veniam voluptates!
            Accusamus delectus facilis minima neque odio quas quos sapiente
            sint?
          </p>
          <div className="section">
            Click the following links to see the results of the tutorial
            chapters
          </div>
          <h2>
            <Link href="/anotherPage">To another Page</Link>
          </h2>
          <h2>
            <Link href={"/fontsAndColors"}>Fonts and Colors</Link>
          </h2>
          <h2>
            <Link href={"/spacingAndContainers"}>Spacing and Containers</Link>
          </h2>
          <h2>
            <Link href={"/breadcrumbs"}>Breadcrumbs</Link>
          </h2>
          <h2>
            <Link href={"/gridColumns"}>Grid Columns, Select and Footer</Link>
          </h2>
          <h2>
            <Link href={"/responsiveClasses"}>Responsive Classes</Link>
          </h2>
          <h2>
            <Link href={"/tabbedContent"}>Tabbed Content</Link>
          </h2>
          <h2>
            <Link href={"/messageBox"}>Message Box</Link>
          </h2>
          <h2>
            <Link href={"/buttons"}>Buttons</Link>
          </h2>
          <h2>
            <Link href={"/cards"}>Cards</Link>
          </h2>
          <h2>
            <Link href={"/modals"}>
              Modals and Forms (input field and checkbox)
            </Link>
          </h2>
        </section>
      </main>
    </Layout>
  );
}
