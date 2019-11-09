import React,{ Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class AddComponent extends Component{

    state = {
        isEditing:false
    }
    //call AddComponent (App.js)
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addProduct(this.state);
        e.target.reset();

    }
    // update state
    updateState = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        });
    }

    render(){
        return(
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                <tr>
                  <td>&nbsp; &nbsp; &nbsp;<TextField
                          onChange={ this.updateState}
                          label="Outlined secondary"
                          variant="outlined"
                           color="secondary"
                           label="product name"
                           margin="normal" name="name" type ="text" required/></td>
                           <td><TextField
                            onChange={ this.updateState}
                            label="Outlined secondary"
                            variant="outlined"
                             color="secondary"
                            label="product type"
                            margin="normal" name="type" type ="text" required/></td>
                            <td><TextField
                             onChange={ this.updateState}
                             label="Outlined secondary"
                             variant="outlined"
                              color="secondary"
                             label="product price"
                             margin="normal" name="price" type ="text" required/></td>
                             <td><TextField
                              onChange={ this.updateState}
                              label="Outlined secondary"
                              variant="outlined"
                              color="secondary"
                              label="product rating"
                              margin="normal" name="rating" type ="text" required/></td>
                              <td><TextField
                               onChange={this.updateState}
                               label="Outlined secondary"
                               variant="outlined"
                               color="secondary"
                               label="warranty years"
                               margin="normal" name="warranty_years" type ="text" required/></td>
                               <td>
                                 &nbsp; &nbsp; &nbsp;
                                  <FormControl component="fieldset">
                                   <FormLabel component="legend">Availaible</FormLabel>
                                   <RadioGroup aria-label="available" name="available" value={this.state.value} onChange={this.handleChange}>
                                     <FormControlLabel value="Yes" control={<Radio />}
                                       onChange={this.updateState} label="Yes" />
                                     <FormControlLabel value="No"  control={<Radio />} onChange={this.updateState} label="No" />
                                   </RadioGroup>
                                 </FormControl></td>
                </tr>
                    <div className="input-field col s2">
                        <Button type="submit" variant="outlined" color="primary" value="Add" className="btn blue">Add</Button>
                    </div>
                </form>
            </div>
        );
    }
}
export default AddComponent;
