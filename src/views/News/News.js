import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {  BrowserRouter as Router, Link, Route, Redirect,Switch,withRouter } from 'react-router-dom';

import { getNewsData } from '../../actions/homepage';

class News extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        newsData:[],
        loadingText:'Loading data please wait..........'
      };

      this._getNewsData     =     this._getNewsData.bind(this);
    }

    _getNewsData(){
       let that = this;
        that.props.getNewsData().then(response => { 
            if (response.data.success) {
                 that.setState({ newsData:response.data.data,loadingText:'' });
              }else{
                that.setState({ newsData:[],loadingText:'News are not available..........' });
              }
           }).catch(function (error) {
        console.log(error);
      }); 
    }

  componentDidMount() {
     this._getNewsData(); 
  }

render() {   
 let { newsData,loadingText } = this.state;

    return(  
      <React.Fragment>
      {newsData && newsData.length > 0 && newsData.map((news,index)=>(
        <div className="row" key={index}>
          <div className="col-xl-12 mb-4">
            <Card className="news-card">  
              <Card.Body>
                <div className="col-12">
                  <div className="homepage_single">         
                    <div className="">
                      <div className="row mb-4">
                        <div className="col-md-12">
                          <span className="label label-warning blog_date">{news.newsdate}</span>
                            <h3 style={{display: 'inline'}}>
                          <span className="blog_title" style={{marginLeft:'15px'}}>{news.newstitle}</span></h3>
                        </div>
                      </div>
                    <p>{news.newsdesc}</p>
                    </div>
                    <div className="row">
                     <div className="col-md-10 mt-3">
                      
                    </div>
                    <div className="col-md-2 mt-3">
                        <span> —</span>
                        <span className="news_writer">{news.newstitle}</span>
                    </div>
                    </div>

                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>))}

      {newsData.length == 0 &&
       <div className="row">
          <div className="col-xl-12 mb-4">
            <Card className="news-card">  
              <Card.Body>
                <div className="col-12">
                  <span className="text-center">{this.state.loadingText}</span>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>}
     </React.Fragment>
          );
        }
    }

News.propTypes = {
    getNewsData: PropTypes.func.isRequired,
  }

export default withRouter(connect(null, {getNewsData})(News));
