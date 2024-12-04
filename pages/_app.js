import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyle } from "../styles/globalStyles";
import {
  RecoilRoot,
} from 'recoil';

function MyApp({ Component, pageProps }) {
  return (
      <>
          <RecoilRoot>
          <Global styles={globalStyle} />
          <Component {...pageProps} />
          </RecoilRoot>
      </>
  );
}

export default MyApp;
