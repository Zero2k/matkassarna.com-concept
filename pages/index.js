import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useStore } from '../stores';

import MainFeaturedPost from '../components/MainFeaturedPost';
import FeaturedPost from '../components/FeaturedPost';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Compare from '../components/Compare';

const useStyles = makeStyles(theme => ({
  gridSpacing: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  }
}));

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

const Index = () => {
  const classes = useStyles();
  const store = useStore();
  const { data } = store.productsStore;

  return (
    <React.Fragment>
      <main>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={3}>
          {featuredPosts.map(post => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
        <Grid container spacing={3} className={classes.gridSpacing}>
          <Main title="Compare Companies:" data={data} />
          <Sidebar />
        </Grid>
        <Divider />
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.gridSpacing}
        >
          <Grid item md={12}>
            <Typography variant="h4" component="h4" align="center" gutterBottom>
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
};

export default Index;
