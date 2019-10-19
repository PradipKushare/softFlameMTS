import React, { Component } from 'react';

class MyTestPaginate extends Component {
    constructor(props) {
      super(props);
      this.state = { 
      }
     }

  
render() {   
 
    return(  
        <React.Fragment>
          <div class="form-group row mb15">
            <label class="col-md-3 m-2" style={{marginRight:'20px',fontWeight:'bold',fontSize:'15px'}}>Show Items: </label>
              <div class="col-md-2s">
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