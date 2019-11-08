import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import PropTypes from 'prop-types' ;
import './App.css';

  
const   ProductItem = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    function  avaibOrN (av)
     { 
        if(av){
            return (<p> Yes </p>) ;  
       }else{
         return (<p> No </p>)  ;
       }
      }
    return <div className="App">
          <h5> Id : {props._id} </h5>
          <h5> name : {props.name} </h5>
          <h5> type : {props.type} </h5>
          <h5> price : {props.price} </h5>
          <h5> rating : {props.rating} </h5>
          <h5> Warranty : {props.warranty_years} </h5>
          <h5> Availaible : {avaibOrN(props.available)} </h5>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}> Delete</Button>
       <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this product
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.deleteEvent} color="primary">
            Yes
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
      </div>
}

/*const propTypes = {
                        _id : PropTypes.number.required ,
                        name : PropTypes.string ,
                        type : PropTypes.string ,
                        price : PropTypes.number  ,
                        rating : PropTypes.number ,
                        warranty_years : PropTypes.number,
                        available : PropTypes.bool,
                        onDelete : PropTypes.func  //
                   } ;*/

/*class ProductItem extends Component {
 constructor(props){
   super(props) ;
   //this.onDelete = this.onDelete.bind(this) ;
 }
 onDelete(){
    const { _id  , onDelete } = this.props ;
    onDelete(_id) ;
 }
  render() {
   const { _id  ,  name  , type  ,  price  ,rating , warranty_years , available , onDelete } = this.props ;
    return (
      <div className="App">
          <h5> Id : {_id} </h5>
          <h5> name : {name} </h5>
          <h5> type : {type} </h5>
          <h5> price : {price} </h5>
          <h5> rating : {rating} </h5>
          <h5> Warranty : {warranty_years} </h5>
          <h5> Availaible : {available} </h5>
          <button onClick = {() => this.props.onDelete(this.props.id)}> click me </button>
      </div>
    );
  }
}
//ProductItem.propTypes = propTypes*/
export default ProductItem;
