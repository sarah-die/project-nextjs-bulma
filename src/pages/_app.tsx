// merke: nur hier können globale CSS-Dateien importiert werden

import "../../styles/globals.sass";
import "../../styles/globalStyle.css";

export default function App({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}
