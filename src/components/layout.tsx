import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div
      style={{
        margin: `0 auto`,
        overflowX: "hidden",
        minHeight: "100vh",
        paddingBottom: "4rem",
      }}
    >
      <Helmet>
        <html lang="en" />
        <script type="text/javascript">
          {`
            _atrk_opts = { atrk_acct:"VLImw1WyR620WR", domain:"nicekeyboards.com",dynamic: true};
            (function() { var as = document.createElement('script'); as.type = 'text/javascript'; as.async = true; as.src = "https://certify-js.alexametrics.com/atrk.js"; var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(as, s); })();
          `}
        </script>
        <noscript>
          <img
            src="https://certify.alexametrics.com/atrk.gif?account=VLImw1WyR620WR"
            style={{ display: "none" }}
            height="1"
            width="1"
            alt=""
          />
        </noscript>
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
