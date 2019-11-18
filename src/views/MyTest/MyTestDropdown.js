import React, { Component } from 'react';
class MyTestDropdown extends Component {
   constructor(props) {
      super(props);
      this.state = { 
        selectValue:'',
      };
      this._handleChange     =     this._handleChange.bind(this);
    }

componentWillReceiveProps(nextProps) {
  this.setState({ selectValue:nextProps.sortBy  });
}
  _handleChange(e){
    this.setState({selectValue:e.target.value});
    this.props.getSortBy(e.target.value);
  }

render() {   
    return(  
        <React.Fragment>

        <div className="form-group row mb15 select_test_by">
            <label style={{marginRight:'20px',fontWeight:'bold',fontSize:'15px'}}>Sort: </label>
              <div className="col-md-2s">
               <select className="form-control input_box" 
                       value={this.state.selectValue} 
                       onChange={(e)=>this._handleChange(e)} >
                <option value="ascending" name="cat_id">Ascending</option>
                <option value="descending" name="cat_id">Descending</option>
              </select>
              </div>
            </div>
            
         </React.Fragment>
          );
        }
    }

export default MyTestDropdown;