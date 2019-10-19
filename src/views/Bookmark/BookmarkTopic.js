import React, { Component } from 'react';
class BookmarkTopic extends Component {
  render() {   
    return(  
         <div className="col-md-4">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <strong>Topic: </strong></div>
            </div>
               <select className="form-control input_box">
                <option value="2" name="cat_id">Select</option>
                <option value="2" name="cat_id">Measurement of Angles</option>
                <option value="3" name="cat_id">Trigonometric functions</option>
                <option value="3" name="cat_id">Factorization Formulae</option>
                <option value="3" name="cat_id">Locus</option>
              </select>
            </div>  
          </div>           
          );
        }
    }

export default BookmarkTopic;