import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import ProductItem from './productItem';
import EditComponent from './edit.component'
import data from '../assets/Products.json';
import './App.css';

//const products = localStorage.setItem('products' ,data) ;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [{}]
    };
  }

  componentDidMount() {
    this.getProducts();
  }
  /**********************************************/
  // List des produits et suppression
  /*****************************************************/
  getProducts() {
    this.setState({products: data});
  }
  pressDelete = (i) => {
        let filtered = this.state.products.filter((p,index)=>{
            return p._id !== i;
        });
        console.log(filtered) ;
        this.setState({
            products : filtered
        });
      }
  /************************************************************/
  // Operation d'actualisation
  /*************************************************************/

  pressEditBtn = (i) => {
    let prods = this.state.products;
    prods[i].isEditing = true;
    this.setState({products : prods});
  }

  updateProduct = (i, name, price, warranty_years, rating) => {
    console.log(name) ;
    let products = this.state.products;
    products[i].name = name;
    products[i].price = price;
    products[i].isEditing = false;
    this.setState({products : products});
  }
    /***************************Rendu*************************
    ******/
    /***************************************************************/
    render(){
      return (
      //  <div className="App">
    //    {
          /*this.state.products.map(p => {
            return (<div>
              <ProductItem key={p._id} {...p} deleteEvent={this.deleteItem.bind(this, p._id)}></ProductItem>
               </div> )
          })*/
      //  }
      //  {
          <div className="App">
            <EditComponent allProducts={this.state.products}
                 pressEditBtn = {this.pressEditBtn}
                 updateProduct = {this.updateProduct}
                 pressDelete={this.pressDelete} >
          </EditComponent>
          </div>
        //}
      //</div>
    );
    }
  }
  export default App;
