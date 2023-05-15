import Head from "next/head";
import Link from "next/link";
import { NavBar } from "../library/NavBar";

export const siteTitle = "Small Next.js project";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div id="wholeScreen">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="A basic next.js plus bulma project" />
        <meta name="og:title" content={siteTitle} />
        {/*Bulma requires this*/}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main
        className="mainLayoutContainer"
        id="Outlet"
      >
        {children}
      </main>
      {!home && (
        <div
        // ToDo add styles
        // className={styles.backToHome}
        >
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
