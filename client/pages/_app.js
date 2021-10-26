import "tailwindcss/tailwind.css";
import { Root_layout } from "../layout";
import  "../styles/myStyles.css";

function MyApp({ Component, pageProps }) {
  return (
    <Root_layout>
      <Component {...pageProps} />
    </Root_layout>
  );
}

export default MyApp;
