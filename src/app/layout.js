
//src/app/layout.js
import { Fraunces, Mulish  } from "next/font/google";

import '../styles/styles.scss';
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "UIUXer",
    template: "%s - UIUXer"
  },
  description: "UIUXer is a creative, minimal, and cleanly designed personal and portfolio Webflow template.",
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={mulish.className}>
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}

//  https://realfavicongenerator.net/
// https://favicon.io/
