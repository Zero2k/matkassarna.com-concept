import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import theme from '../components/theme';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { Provider } from 'mobx-react';
import { initializeStores } from '../stores';

const sections = [
  { title: 'Apple', url: '/apple' },
  { title: 'Amazon', url: '#' },
  { title: 'Google', url: '#' },
  { title: 'Twitter', url: '#' },
  { title: 'Youtube', url: '#' },
  { title: 'Twitch', url: '#' },
  { title: 'Reddit', url: '#' },
  { title: 'Microsoft', url: '#' },
  { title: 'Github', url: '#' },
  { title: 'View All', url: '/companies' }
];

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    //
    // Use getInitialProps as a step in the lifecycle when
    // we can initialize our store
    //
    const isServer = typeof window === 'undefined';
    //
    // Check whether the page being rendered by the App has a
    // static getInitialProps method and if so call it
    //
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {
      isServer,
      pageProps
    };
  }

  constructor(props) {
    super(props);
    this.stores = initializeStores(props.isServer);
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Website.com</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <Provider {...this.stores}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header title="Logo.com" sections={sections} />
            <Container maxWidth="lg" style={{ paddingTop: '15px', paddingBottom: '15px' }}>
              <Component {...pageProps} />
            </Container>
            <Footer
              title="Footer"
              description="Something here to give the footer a purpose!"
            />
          </ThemeProvider>
        </Provider>
      </React.Fragment>
    );
  }
}
