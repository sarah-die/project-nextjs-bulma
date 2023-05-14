import Layout from "../../components/layout";
import Head from "next/head";
import { useState } from "react";
import clsx from "clsx";

type TabAndContent = { name: string; content: string };

const tabs: TabAndContent[] = [
  {
    name: "Product Details",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Cupiditate illo iste iure laborum laudantium odit provident. Ea eligendi error nobis quas rerum!",
  },
  {
    name: "Delivery Information",
    content:
      "              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quae, sed. Consequuntur dignissimos dolor doloremque dolorum ea, facere incidunt itaque magnam nemo optio perferendis quaerat repellendus voluptas.\n",
  },
  { name: "test", content: "test234" },
];

export default function TabbedContent() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <Layout>
      <Head>
        <title>Tabbed Content</title>
      </Head>
      <div className="section">
        Div with className = tabs. Inside ul. Each li represents one tab.
      </div>
      <section className="section">
        <div className="container">
          <div className="columns is-8 is-variable">
            <div className="column is-7-tablet">
              <div className="tabs is-boxed">
                <ul>
                  {tabs.map((tab, index) => {
                    return (
                      // hier clsx verwenden, wenn mehrere Parameter
                      <li
                        // className={`container ${tabStatus[index] ? "is-active" : ""}`}
                        className={clsx(
                          // "container",
                          activeTab === index && "is-active"
                        )}
                        onClick={() => setActiveTab(index)}
                      >
                        <a>{tab.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="px-2" id="tab-content">
                {tabs.map((tab, index) => {
                  return (
                    <div className={index !== activeTab ? "is-hidden" : ""}>
                      <h3 className="is-size-5 title">{tab.name}</h3>
                      <p>{tab.content}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="column is-5-tablet">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              architecto autem blanditiis corporis culpa doloremque eveniet ipsa
              maxime molestiae nobis optio, placeat saepe, sequi suscipit
              tempore voluptas voluptate voluptatem voluptates?
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
