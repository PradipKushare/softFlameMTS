import React, { Component } from 'react';
import {ButtonToolbar,Button } from 'react-bootstrap';
class BookmarkFilter extends Component {
  render() {   
    return(  
          <div className="col-md-4">
            <ButtonToolbar style={{justifyContent:'center'}}>
                <Button variant="primary">
                  Filter Questions
                </Button>
              <Button variant="secondary" style={{marginLeft:'20px'}}>
                Reset
              </Button>
            </ButtonToolbar>
          </div>         
          );
        }
    }

export default BookmarkFilter;