import React, { Component } from 'react';
class MyTestPaginate extends Component { 
render() {   
 
    return(  
        <React.Fragment>
          <div className="form-group row mb15">
            <label className="col-md-3 m-2" style={{marginRight:'20px',fontWeight:'bold',fontSize:'15px'}}>Show Items: </label>
              <div className="col-md-2s">
               <select className="form-control input_box">
                <option value="2" name="cat_id">100</option>
                <option value="3" name="cat_id">200</option>
              </select>
              </div>
            </div>
           </React.Fragment>
          );
        }
    }

export default MyTestPaginate;