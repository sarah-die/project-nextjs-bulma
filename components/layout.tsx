import Head from "next/head";
import Link from "next/link";
import { NavBar } from "../library/NavBar";
import { mainLayoutContainer, header, backToHome } from "./layout.module.scss";
import Image from "next/image";
import arrowLeft from "../public/27323.svg";

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
      <header className={header}>
        <NavBar />
      </header>
      <main className={mainLayoutContainer} id="Outlet">
        {children}
      </main>
      {!home && (
        <div
          className={backToHome}
        >
          <Image src={arrowLeft} alt="Arrow Left" width={20} style={{marginRight: 6}}></Image>
          <Link className="has-text-white" href="/">
            Back to home
          </Link>
        </div>
      )}
    </div>
  );
}
