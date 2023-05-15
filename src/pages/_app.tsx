// merke: nur hier können globale CSS-Dateien importiert werden

import "../../styles/globals.scss";
import "../../styles/globalStyle.css";

export default function App({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}
