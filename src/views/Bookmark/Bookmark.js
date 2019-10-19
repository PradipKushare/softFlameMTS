import React, { Component } from 'react';
import {Card } from 'react-bootstrap';
import BookmarkFilter  from './BookmarkFilter';
import BookmarkTopic  from './BookmarkTopic';
import BookmarkSubject from './BookmarkSubject';
import QuestionList from './QuestionList';
class Bookmark extends Component {
  render() {   
    return(  
            <React.Fragment>
             <Card style={{margin:'20px'}}>   

              <Card style={{margin:'20px'}}>  
               <Card.Header className="bookmark-header">
                  <h5>Filter Bookmarks</h5>
              </Card.Header>
                <Card.Body>
                 <div className="row">
                    <BookmarkSubject />
                    <BookmarkTopic />
                    <BookmarkFilter />
                  </div>
                </Card.Body>
              </Card>

                 <div className="row">
                    <QuestionList />   
                  </div>
       


              </Card>
           </React.Fragment>
          );
        }
    }

export default Bookmark;