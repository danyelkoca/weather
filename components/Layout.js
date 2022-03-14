import Meta from "./Meta";
import Navbar from "./Navbar";
import Footnote from "./Footnote";

// this layout is applied to all pages becuase it wraps _app.js

const Layout = ({ children }) => {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <Meta />
      <Navbar />
      <div style={{ width: "100vw", minHeight: "100vh" }}>{children}</div>
      <Footnote />
    </div>
  );
};

export default Layout;
