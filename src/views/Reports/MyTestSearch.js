import React, { Component } from 'react';
class MyTestSearch extends Component {  
render() {   
 
    return(  
        <div className="form-group row">
          <label className="col-md-1 mt-2" style={{marginRight:'30px',fontWeight:'bold',fontSize:'15px',display:'flex'}}>Search: </label>
            <div className="col">
                <div className="input-group">
                  <input aria-label="Default" aria-describedby="inputGroup-sizing-default" className="form-control" />
                </div>
              </div>
            </div>
          );
        }
    }

export default MyTestSearch;