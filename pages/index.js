import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MainFeaturedPost from '../components/MainFeaturedPost';
import FeaturedPost from '../components/FeaturedPost';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import { inject } from 'mobx-react';
import { Divider } from '@material-ui/core';

import Compare from '../components/Compare';

const styles = theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  }
});

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…'
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text'
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text'
  }
];

@inject('productsStore')
class Index extends React.Component {
  render() {
    const { classes } = this.props;
    const { data } = this.props.productsStore;

    return (
      <React.Fragment>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={3}>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={3} className={classes.mainGrid}>
            <Main title="Compare Companies:" data={data} />
            <Sidebar />
          </Grid>
          <Divider />
          <Grid container spacing={3} className={classes.mainGrid}>
            <Grid item md={12}>
              <Typography
                variant="h4"
                component="h4"
                align="center"
                gutterBottom
              >
                Compare * products
              </Typography>
              <Typography variant="h5" component="h5" align="center">
                Compare each * provider with one another
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={6} md={4}>
              <Compare url="test/test" />
            </Grid>
            <Grid item xs={6} md={4}>
              <Compare url="test/test" />
            </Grid>
            <Grid item xs={6} md={4}>
              <Compare url="test/test" />
            </Grid>
          </Grid>
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Index);
