import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MainFeaturedPost from '../components/MainFeaturedPost';
import FeaturedPost from '../components/FeaturedPost';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import { inject } from 'mobx-react';

const styles = theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
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
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Index);
