import React from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Sidebar from '../../components/Sidebar';
import Chips from '../../components/Chips';
import Faq from '../../components/Faq';
import CompanyCard from '../../components/CompanyCard';
import DetailedExpansionPanel from '../../components/DetailedExpansionPanel';
import DetailedCard from '../../components/DetailedCard';
import FeaturedCompany from '../../components/FeaturedCompany';
import Sortbar from '../../components/Sortbar';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

const products = [
  {
    id: 1,
    name: 'Macbook Pro',
    options: [
      {
        id: 1,
        value1: 2,
        value2: 4,
        alternatives: [{ id: 1, name: 'No alternative', price: 440 }]
      },
      {
        id: 2,
        value1: 4,
        value2: 3,
        alternatives: [
          { id: 1, name: 'Select...', price: 510 },
          { id: 2, name: 'White', price: 700 },
          { id: 3, name: 'Silver', price: 720 }
        ]
      },
      {
        id: 3,
        value1: 6,
        value2: 4,
        alternatives: [
          { id: 1, name: 'Select...', price: 874 },
          { id: 2, name: 'White', price: 900 },
          { id: 3, name: 'Silver', price: 920 }
        ]
      }
    ]
  },
  {
    id: 1,
    name: 'iMac',
    options: [
      {
        id: 1,
        value1: 4,
        value2: 3,
        alternatives: [{ id: 1, name: 'No alternative', price: 440 }]
      },
      {
        id: 2,
        value1: 6,
        value2: 4,
        alternatives: [{ id: 1, name: 'No alternative', price: 440 }]
      }
    ]
  }
];

const Company = () => {
  const router = useRouter();
  const classes = useStyles();
  const [grid, setGrid] = React.useState(false);
  const { company } = router.query;

  return (
    <React.Fragment>
      <main className={classes.mainGrid}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={7} md={8}>
            <Typography variant="h1" gutterBottom>
              {company}
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Chips
              title="Categories"
              categories={[{ name: 'category 1' }, { name: 'category 2' }]}
            />
          </Grid>
          <Grid item xs={12} sm={5} md={4}>
            <CompanyCard />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Sortbar setGrid={setGrid} />
          </Grid>
          {grid ? (
            [1, 2, 3].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <DetailedCard />
              </Grid>
            ))
          ) : (
            <Grid item xs={12} md={12}>
              {products.map((product, index) => (
                <DetailedExpansionPanel key={index} product={product} />
              ))}
            </Grid>
          )}
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <h3>Frequently Asked Questions:</h3>
            <Faq
              questions={[
                { question: 'Do you ship internationally?', answer: 'text1' },
                {
                  question: 'How long will it take for my order to arrive?',
                  answer: 'text2'
                }
              ]}
            />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h6" gutterBottom>
              More Companies:
            </Typography>
            <Grid container spacing={3}>
              {[1, 2].map((item, index) => (
                <FeaturedCompany key={index} />
              ))}
            </Grid>
          </Grid>
          <Sidebar />
        </Grid>
      </main>
    </React.Fragment>
  );
};

export default Company;
