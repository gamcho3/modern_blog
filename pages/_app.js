import { useEffect, useState } from "react";
import { Layout } from "../components"; //index값으로 이동
import "../styles/globals.scss";
import "tailwindcss/tailwind.css";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
