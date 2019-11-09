import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './App.css';

 class EditComponent extends Component{

  constructor(props){
    super(props);
    this.state = {
      value : "No" ,
      open : false ,
      idProd : 0
    };
  }
//****************************Options function**************************/
   handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.target.value === "Yes" ? this.available = true : this.available = false ;
     this.setState({ value : event.target.value});
   };

  /********* Set up du dialog material ui ****************/
  handleClickOpen = (i) => {
   this.setState({open : true ,
                  idProd : i    });
 };

  handleClose = () => {
   this.setState({open : false});
 };
  /////*******************Ecriture de yes et no pour availaible ou non ****************/
    avaibOrN = (av)=>{
      if(av){
          return (<p> Yes </p>) ;
     }else{
          return (<p> No </p>)  ;
     }
    }
    handleUpdate = () => {
        this.props.updateProduct(this.id, this.name.value, this.price.value, this.warranty_years.value, this.rating.value, this.available);
     }

/*************************************/

/************************Rendu ******************************************************/
    render(){
        const {allProducts, pressEditBtn, pressDelete} = this.props;
        const productList = allProducts.map((p , index) => {
                  return p.isEditing === true ? (
                    /******************************Les input de l'actualisation*****************************/
                     <tr  className="inputsStyl" key={p._id}>
                       <td>&nbsp;  </td>
                       <td><TextField
                                id="standard-required"
                                defaultValue={p.name}
                                label="product name"
                                margin="normal"
                                inputRef={(val) => {this.name = val}} required/></td>
                    <td><TextField

                             id="standard-required"
                             defaultValue={p.type}
                             label="product type"
                             margin="normal"
                             inputRef={(val) => {this.type = val}} required/></td>
                           <td><TextField
                                      id="standard-required"
                                      label="product price"
                                      defaultValue={p.price}
                                      margin="normal"
                               inputRef={(val) => {this.price = val}} required/> </td>
                               <td><TextField
                                      id="standard-required"
                                      label="product rating"
                                      defaultValue={p.rating}
                                      margin="normal"
                                      inputRef={(val) => {this.rating = val}} required/></td>

                                  <td>
                                     <FormControl component="fieldset">
                                      <FormLabel component="legend">Availaible</FormLabel>
                                      <RadioGroup aria-label="available" name="available" value={this.state.value} onChange={this.handleChange}>
                                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="No" control={<Radio />} label="No" />
                                      </RadioGroup>
                                    </FormControl></td>
                                    <td><TextField
                                               id="standard-required"
                                               label="warranty year"
                                               defaultValue={p.warranty_years}
                                               margin="normal"
                                              inputRef={(val) => {this.warranty_years = val}} required/></td>
                                  <td>
                      <Button variant="outlined" color="primary" value="Update" onClick={this.handleUpdate} ref={() => {
                               this.id = p._id}} > Update </Button>
                      </td>
                </tr>
              ) : (
                /*************************Afficahge de la liste***************************************/
                           <TableRow key={p._id}>
                             <TableCell align="right">{p.name}</TableCell>
                             <TableCell align="right">{p.type}</TableCell>
                             <TableCell align="right">{p.price}</TableCell>
                             <TableCell align="right">{p.rating}</TableCell>
                            <TableCell align="right"> {this.avaibOrN(p.available)}</TableCell>
                            <TableCell align="right">{p.warranty_years}</TableCell>
                            <TableCell align="right"><Button variant="outlined" color="primary" onClick={()=> pressEditBtn(index)}>Edit</Button></TableCell>
                            <TableCell align="right"><Button variant="outlined" color="secondary" onClick={() => this.handleClickOpen(p._id)}> Delete</Button></TableCell>
                              <Dialog
                                  open={this.state.open}
                                  onClose={this.handleClose}
                                  aria-labelledby="alert-dialog-title"
                                  aria-describedby="alert-dialog-description"
                                >
                                  <DialogTitle id="alert-dialog-title">{"Product supression ?"}</DialogTitle>
                                  <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                      Are you sure you want to delete this product ? 
                                    </DialogContentText>
                                  </DialogContent>
                                  <DialogActions>
                                    <Button onClick={this.handleClose} color="primary">
                                      No
                                    </Button>
                                    <Button onClick={()=> pressDelete(this.state.idProd,this.handleClose)}  color="primary" autoFocus>
                                      Yes
                                    </Button>
                                  </DialogActions>
                                </Dialog>
                           </TableRow>
                )

        }) ;
            return(
              /**************************************Retour de la liste et les input avec **************************/
              <div className ="App">
                <Paper >
                     <Table  aria-label="simple table">
                       <TableHead>
                         <TableRow>
                           <TableCell align="right"> <strong>Name</strong> </TableCell>
                           <TableCell align="right"><strong>Type</strong></TableCell>
                           <TableCell align="right"><strong>Price</strong></TableCell>
                           <TableCell align="right"><strong>Rating</strong></TableCell>
                          <TableCell align="right"><strong>Availaible</strong></TableCell>
                           <TableCell align="right"><strong>Warranty years </strong></TableCell>
                           <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                         </TableRow>
                       </TableHead>
                       <TableBody>
                        {productList}
                      </TableBody>
                    </Table>
               </Paper>
              </div>

            )
      }
}
export default EditComponent;
