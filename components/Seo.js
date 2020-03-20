import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const Seo = props => {
  const { title = 'Add title', description = 'Add description' } = props;

  return (
    <Head>
      <title>{title} | Website.com</title>
      {/* HTML meta tags */}

      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="" />

      {/* Twitter meta tags */}
      <meta name="twitter:card" content="" />
      <meta name="twitter:site" content="@" />
      <meta name="twitter:title" content="" />
      <meta name="twitter:description" content="" />

      {/* Facebook meta tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="" />
      <meta property="og:site_name" content="" />
      <meta property="og:url" content="" />
      <meta property="og:image" content="" />
      <meta property="article:published_time" content="" />
      <meta property="article:author" content="" />
    </Head>
  );
};

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Seo;
