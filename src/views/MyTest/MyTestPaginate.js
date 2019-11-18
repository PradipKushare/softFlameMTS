import React, { Component } from 'react';
class MyTestPaginate extends Component { 
   constructor(props) {
      super(props);
      this.state = { 
        selectValue:'',
      };
      this._handleChange     =     this._handleChange.bind(this);
    }

  componentWillReceiveProps(nextProps) {
    this.setState({ selectValue:nextProps.dispItem  });
  }
  _handleChange(e){
    this.setState({selectValue:e.target.value});
    this.props.getDispBy(e.target.value);
  }

render() {   
 
    return(  
        <React.Fragment>
          <div className="form-group row mb15">
            <label className="col-md-3 m-2" style={{marginRight:'20px',fontWeight:'bold',fontSize:'15px'}}>Show Items: </label>
              <div className="col-md-2s">
               <select className="form-control input_box"
                       value={this.state.selectValue} 
                       onChange={(e)=>this._handleChange(e)}>
                <option value="3" name="cat_id">3</option>
                <option value="5" name="cat_id">5</option>
              </select>
              </div>
            </div>
           </React.Fragment>
          );
        }
    }

export default MyTestPaginate;