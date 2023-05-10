import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import { NavBar } from "../library/NavBar";

const top = "This is a navbar";
export const siteTitle = "Small Next.js project";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="A basic next.js plus bulma project" />
        <meta name="og:title" content={siteTitle} />
        {/*Bulma requires this*/}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <NavBar />
          </>
        ) : (
          <>
            <Link href="/"></Link>
            <h2>
              <Link href="/">{top}</Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
