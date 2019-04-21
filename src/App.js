import React, { Component } from 'react';
import Layout from './components/Layout/Layout.js';

import Aux from './hoc/Auxiliary.js'
import BurgerBuilder from './containers/BurgerBuilder.js'



class App extends Component {
  render() {
    return (
      <div>



          <Layout>
              <BurgerBuilder></BurgerBuilder>
          </Layout>




     </div>
    );
  }
}

export default App;
