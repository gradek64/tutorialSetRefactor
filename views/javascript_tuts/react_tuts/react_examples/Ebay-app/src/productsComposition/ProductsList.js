import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../redux/actions/products_actions';
import api from '../services/apiService';


class ProductsList extends React.Component {
  componentDidMount() {
    // call my api service for browser API
    /* api.get('/item/v1|153228438937|0').then((data) => {
      console.log('datass', data);
    }); */
    api.get('/item_summary/search/', { q: 'iphone', limit: '3' }).then((data) => {
      console.log('data API', data);
    });
    // fetch products in redux middleware redux-thunk
    // this.props.dispatch(fetchProducts());
  }

  render() {
    const { error, loading, products } = this.props;

    if (error) {
      return (
        <div>
Error!
          {error.message}
        </div>
      );
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error,
});

export default connect(mapStateToProps)(ProductsList);
