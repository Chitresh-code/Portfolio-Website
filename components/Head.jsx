import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Chitresh Gyanani is an avid python full stack developer and ai/ml engineer building websites and ai agents you'd love to use"
      />
      <meta
        name="keywords"
        content="chitresh gyanani, chitresh, gyanani, web developer portfolio, chitresh web developer, chitresh developer, mern stack, chitresh gyanani portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Chitresh Gyanani's Portfolio" />
      <meta
        property="og:description"
        content="A python full stack developer and ai/ml engineer building websites and ai agents that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://chitresh.in" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Nitin Ranganath',
};
