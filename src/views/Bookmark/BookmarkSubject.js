import React, { Component } from 'react';
class BookmarkSubject extends Component {

  render() {   
    return(  
          <div className="col-md-4">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <strong>Subject: </strong></div>
              </div>
                 <select className="form-control input_box">
                  <option value="2" name="cat_id">Select</option>
                  <option value="2" name="cat_id">Physics</option>
                  <option value="3" name="cat_id">Chemistry</option>
                  <option value="3" name="cat_id">Mathematics</option>
                  <option value="3" name="cat_id">PCM</option>
                </select>
              </div>  
            </div>         
          );
        }
    }
export default BookmarkSubject;