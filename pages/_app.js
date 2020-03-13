import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import theme from '../components/theme';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { Provider } from 'mobx-react';
import { createStore } from '../stores';

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
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps
    };
  }

  constructor(props) {
    super(props);
    this.store = createStore();

    if (typeof window !== 'undefined') {
      window.Mobx = this.store;
    }
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
        <Provider {...this.store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header title="Logo.com" sections={sections} />
            <Container
              maxWidth="lg"
              style={{ marginTop: '15px', paddingBottom: '15px' }}
            >
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
