import React, { Component } from 'react';
class MyTestSearch extends Component {
  constructor(props) {
  super(props);
  this.state = {
     filter: '',

   };
   this._handleChange   =     this._handleChange.bind(this);
 }

 _handleChange(event){
  this.props.getSearchKey(event.target.value);
    this.setState({ filter: event.target.value });
  }

render() {   

/*    const lowercasedFilter = this.state.filter.toLowerCase();
    const filteredData = this.props.getTestData.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });*/

 
    return(  
        <div className="form-group row">
          <label className="col-md-1 mt-2" style={{marginRight:'30px',fontWeight:'bold',fontSize:'15px',display:'flex'}}>Search: </label>
            <div className="col">
                <div className="input-group">
                    <input aria-label="Default" 
                           aria-describedby="inputGroup-sizing-default" 
                           value={this.state.filter} onChange={(evt)=>this._handleChange(evt)}
                           className="form-control" />
                </div>
              </div>
            </div>
          );
        }
    }

export default MyTestSearch;