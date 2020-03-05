import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const ComparisonTable = props => {
  const { data, features } = props;

  const generateHeader = data => {
    if (data.length <= 0) {
      return;
    } else {
      return (
        <TableHead>
          <TableRow>
            <TableCell />
            {data.map((product, i) => productHeaderDetails(product, i))}
          </TableRow>
        </TableHead>
      );
    }
  };

  const productHeaderDetails = (product, i) => {
    return (
      <TableCell key={i}>
        <img src={product.image} />
      </TableCell>
    );
  };

  const generateBody = data => {
    if (data.length <= 0) {
      return <Typography align="center">No products to display</Typography>;
    } else {
      return (
        <TableBody>
          {features.map(feature => productComparisonFeature(feature, data))}
        </TableBody>
      );
    }
  };

  const productComparisonFeature = (feature, data) => {
    return (
      <TableRow key={feature.text}>
        <TableCell>
          <strong>{feature.text}</strong>
        </TableCell>
        {data.map(product => getFeatureForProduct(product, feature))}
      </TableRow>
    );
  };

  const getFeatureForProduct = (product, feature) => {
    return <TableCell key={product.name}>{product[feature.key]}</TableCell>;
  };

  return (
    <TableContainer>
      <Table>
        {generateHeader(data)}
        {generateBody(data)}
      </Table>
    </TableContainer>
  );
};

export default ComparisonTable;
