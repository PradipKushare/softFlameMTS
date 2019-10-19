import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

class News extends Component {
    constructor(props) {
      super(props);
      this.state = { 
      }
     }

render() {   
 
    return(  
      <React.Fragment>
        <div className="row">
          <div className="col-xl-12 mb-4">
            <Card className="news-card">  
              <Card.Body>
                <div className="col-12">
                  <div className="homepage_single">         
                    <div className="">
                      <div className="row mb-4">
                        <div className="col-md-12">
                          <span className="label label-warning blog_date">28 Nov 2027</span>
                            <h3 style={{display: 'inline'}}>
                          <span className="blog_title" style={{marginLeft:'15px'}}>Douglas Evans</span></h3>
                        </div>
                      </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, r</p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

         <div className="row">
          <div className="col-xl-12 mb-4">
            <Card className="news-card">  
              <Card.Body>
                <div className="col-12">
                  <div className="homepage_single">         
                    <div className="">
                      <div className="row mb-4">
                        <div className="col-md-12">
                          <span className="label label-warning blog_date">13 Mar 2034</span>
                            <h3 style={{display: 'inline'}}>
                          <span className="blog_title" style={{marginLeft:'15px'}}>Brittany Collins</span></h3>
                        </div>
                      </div>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,</p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

         <div className="row">
          <div className="col-xl-12 mb-4">
            <Card className="news-card">  
              <Card.Body>
                <div className="col-12">
                  <div className="homepage_single">         
                    <div className="">
                      <div className="row mb-4">
                        <div className="col-md-12">
                          <span className="label label-warning blog_date">30 Jun 2029</span>
                            <h3 style={{display: 'inline'}}>
                          <span className="blog_title" style={{marginLeft:'15px'}}>Diane Washington</span></h3>
                        </div>
                      </div>
                    <p>consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
         <div className="row">
          <div className="col-xl-12 mb-4">
            <Card className="news-card">  
              <Card.Body>
                <div className="col-12">
                  <div className="homepage_single">         
                    <div className="">
                      <div className="row mb-4">
                        <div className="col-md-12">
                          <span className="label label-warning blog_date">17 Jun 2029</span>
                            <h3 style={{display: 'inline'}}>
                          <span className="blog_title" style={{marginLeft:'15px'}}>Michael Collins</span></h3>
                        </div>
                      </div>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

         <div className="row">
          <div className="col-xl-12 mb-4">
            <Card className="news-card">  
              <Card.Body>
                <div className="col-12">
                  <div className="homepage_single">         
                    <div className="">
                      <div className="row mb-4">
                        <div className="col-md-12">
                          <span className="label label-warning blog_date">23 Dec 1990</span>
                            <h3 style={{display: 'inline'}}>
                          <span className="blog_title" style={{marginLeft:'15px'}}>Russell Burns</span></h3>
                        </div>
                      </div>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
     </React.Fragment>
          );
        }
    }

export default News;