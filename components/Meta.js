import Head from "next/head";

// you can use next-seo for managing the meta tag

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      {/* <meta
        name="google-site-verification"
        content="xdkQxVkQHLojk15yZskf4NOt8_xedCpBebo9R_IzvKI"
      /> */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta name="keywords" content={keywords}></meta>
      <meta name="description" content={description}></meta>
      <meta charSet="utf-8"></meta>
      <link rel="shortcut icon" href="/icon.png" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Weather Prediction",
  keywords:
    "weather, temperature, prediction, estimation, graph convolution, tensorflow, image processing, regression, machine learning, tokyo, youtube, rainbow bridge, Danyel Koca, Danyel, Koca",
  description:
    "Weather Prediction is a website that enables users to predict temperatures based on images, watch the temperature prediction timelaps for Rainbow Brodge, and access the relevant article written by Danyel Koca.",
};

export default Meta;
