import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ProductList from './productsComposition/ProductsList';


const App = () => (
  <Provider store={store}>
    <ProductList />
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
