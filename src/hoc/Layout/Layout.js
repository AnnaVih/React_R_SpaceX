import React from 'react';

import Aux from '../Aux/Aux';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';

const Layout = props => (
  <Aux>
    <Header />
    <main>{props.children}</main>
    <Footer />
  </Aux>
);

export default Layout;
