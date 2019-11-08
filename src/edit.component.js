import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

 class EditComponent extends Component{
  /********* Set up du modal material ui ****************/
  /////*************************************/

    avaibOrN = (av)=>{
      if(av){
          return (<p> Yes </p>) ;
     }else{
          return (<p> No </p>)  ;
     }
    }
    handleUpdate = () => {
        this.props.updateProduct(this.indexNum, this.name.value, this.price.value, this.warranty_years.value, this.rating.value);
     }

    render(){
        const {allProducts, pressEditBtn, pressDelete} = this.props;
        const productList = allProducts.map((p, index) => {

                  return p.isEditing === true ? (
                     <tr  key={index}>
                       <td><TextField

                                id="standard-required"
                                defaultValue={p.name}
                                label="product type"
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
                                     label="warranty year"
                                     defaultValue={p.warranty_years}
                                     margin="normal"
                                    inputRef={(val) => {this.warranty_years = val}} required/></td>
                             <td><TextField
                                    id="standard-required"
                                    label="product price"
                                    defaultValue={p.rating}
                                    margin="normal"
                                    inputRef={(val) => {this.rating = val}} required/></td>
                                  <td>
                      <input type="button" value="Update" onClick={this.handleUpdate} ref={() => {this.indexNum = index}} />
                      </td>
                </tr>
              ) : (
                           <TableRow key={p._id}>
                             <TableCell align="right">{p.name}</TableCell>
                             <TableCell align="right">{p.type}</TableCell>
                             <TableCell align="right">{p.price}</TableCell>
                             <TableCell align="right">{p.rating}</TableCell>
                            <TableCell align="right"> {this.avaibOrN(p.available)}</TableCell>
                              <TableCell align="right">{p.warranty_years}</TableCell>
                            <TableCell align="right"><Button variant="outlined" color="primary" onClick={() => pressEditBtn(index)}>Edit</Button></TableCell>
                            <TableCell align="right"><Button variant="outlined" color="primary" onClick={()=>pressDelete(p._id)}> Delete</Button></TableCell>
                           </TableRow>

                  /*  <tr  key={p._id}>
                    <td>{p.name} </td>
                    <td>{p.type}</td>
                    <td>{p.price}</td>
                    <td>{p.rating}</td>
                    <td>  {this.avaibOrN(p.available)} </td>
                    <td><Button variant="outlined" color="primary" onClick={() => pressEditBtn(index)}>Edit</Button>
                    <Button variant="outlined" color="primary" onClick={()=>pressDelete(p._id)}> Delete</Button>
                    </td>
                  </tr>*/
                )

        }) ;
            return(
              <div className ="App">
                <Paper >
                     <Table  aria-label="simple table">
                       <TableHead>
                         <TableRow>
                           <TableCell align="right">Name</TableCell>
                           <TableCell align="right">Type</TableCell>
                           <TableCell align="right">Price</TableCell>
                           <TableCell align="right">Rating</TableCell>
                          <TableCell align="right">Availaibe</TableCell>
                           <TableCell align="right">Waranty year</TableCell>
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
