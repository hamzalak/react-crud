import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';
import EditComponent from './edit.component'
import AddComponent from './add.component' ;
import './App.css';

const url = "http://localhost:3001/products" ;
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
  // Liste des produits
  /*****************************************************/

  getProducts() {
    axios.get(url)
      .then(res => {
        const products = res.data;
        this.setState({ products : products });
      })
    }

  /*******************************************************************/
  //   Ajout du produit  //
/***********************************************************************/
  addProduct = (newProduct) => {
            console.log(newProduct) ;
            axios.post(url, { newProduct })
              .then(res => { const products = res.data ;
                         this.setState({products : products })
              }).then(this.getProducts())  /** On pourra mettre une fonction de notification d'ajout !  **/
      }
  /****************************************/
    /*********************Delete*******************************/

  pressDelete = (i , func) => {
    event.preventDefault();
    axios.delete(url+`/${i}`)
       .then(res => {
         this.getProducts() ;
         this.setState({
             products : this.state.products ,
             close : func()
         });
       }).then(this.getProducts())
    }
  /************************************************************/
  // Operation d'actualisation
  /*************************************************************/

  pressEditBtn = (i) => {
    let prods = this.state.products;
    prods[i].isEditing = true;
    this.setState({products : prods});
  }

  updateProduct = (i, name, price, warranty_years, rating, available) => {
          console.log(i) ;
          let onProduct = this.state.products.filter( p => p._id == i ) ;
          onProduct[0].name = name;
          onProduct[0].price = price;
          onProduct[0].available = available ;
          onProduct[0].warranty_years = warranty_years ;
          onProduct[0].rating = rating ;
          onProduct[0].isEditing = false;
          axios.put(url+`/${i}`,  onProduct )
            .then(res => { console.log(res)  ;
                           this.getProducts()
            }).then(this.setState({products : this.state.products}))
    }

    /***************************Rendu*************************
    ******/
    /***************************************************************/
    render(){
      return (
          <div className="App">
            <EditComponent allProducts={this.state.products}
                 pressEditBtn = {this.pressEditBtn}
                 updateProduct = {this.updateProduct}
                 pressDelete={this.pressDelete} >
          </EditComponent>
          <br/>
            <h5 className="App">Add New Product</h5>
          <AddComponent addProduct={this.addProduct}/>
          </div>
    );
    }
  }
  export default App;
