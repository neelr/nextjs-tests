// app.js next
import React from "react";
import App from "next/app";
import { ThemeUIProvider } from "theme-ui";
import theme from "../components/theme";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeUIProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeUIProvider>
  );
}
