import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import { CircularProgressbar,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import DonutChart from "react-svg-donut-chart";

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {  BrowserRouter as Router, Link, Route, Redirect,Switch,withRouter } from 'react-router-dom';
import { getDashboardData } from '../../actions/homepage';

import $ from 'jquery';

class ChartSection extends Component {
    constructor(props) {
      super(props);
      this.state = { 
         loadingText:'Loading data please wait.......',
         dataPie:[],
         testGiven:'0%',
         testPerformance:'0%',
         questionTime:'0%',

      };
      this._getDashboardData     =     this._getDashboardData.bind(this);
    }

_getDashboardData(){
 let that = this;
  that.props.getDashboardData().then(response => { 
      if (response.data.success) {
   let dataPie = [
      {value: response.data.data.testOverview[0].remainQuestion, stroke: "#DC143C", strokeWidth: 6},
      {value: response.data.data.testOverview[0].rightQuestion, stroke: "#32CD32"},
      {value: response.data.data.testOverview[0].wrongQuestion, stroke: "#00BFFF"}];

           that.setState({ testGiven:response.data.data.testGiven,
                           testPerformance:response.data.data.testPerformance,
                           questionTime:response.data.data.questionTime,
                           dataPie:dataPie });
        }else{
          that.setState({ testGiven:'',testPerformance:'',
                          questionTime:'',dataPie:[],
                          loadingText:'Data not available....'});
        }
     }).catch(function (error) {
  console.log(error);
}); 
}

  componentDidMount() {
     this._getDashboardData(); 
  }

render() {   
 let { testGiven,testPerformance,questionTime,loadingText,dataPie } = this.state;  
/*let tmp_name = getDashboardData.testOverview;

    const dataPie = [
    {value: tmp_name.remainQuestion, stroke: "#DC143C", strokeWidth: 6},
    {value: tmp_name.rightQuestion, stroke: "#32CD32"},
    {value: tmp_name.wrongQuestion, stroke: "#00BFFF"},
  ]*/




    return(  
        <React.Fragment>
            <div className="wrapper">
                <div className="row">

                    <div className="col-md-3">
                        <Card style={{ width: '18rem' }}>  
                          <Card.Body>
                          <CircularProgressbar value={testGiven} 
                                               text={testGiven+'%'}
                                               styles={buildStyles({textColor: '#f88'})}/>
                          <hr />
                            <Card.Text style={{textAlign:'center'}}>
                             No of Test Given
                            </Card.Text>
                          </Card.Body>
                        </Card>
                    </div>   
                  

                    <div className="col-md-3">
                        <Card style={{ width: '18rem' }}>  
                          <Card.Body>
                          <CircularProgressbar value={testPerformance} 
                                               text={testPerformance+'%'} 
                                               styles={buildStyles({textColor: 'green'})}/>
                          <hr />
                            <Card.Text style={{textAlign:'center'}}>
                             Overall Test Performance
                            </Card.Text>
                          </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-3">
                        <Card style={{ width: '18rem' }}>  
                          <Card.Body>
                          <CircularProgressbar value={questionTime} 
                                               text={questionTime+'%'}
                                               styles={buildStyles({textColor: 'cyan'})} />
                          <hr />
                            <Card.Text style={{textAlign:'center'}}>
                            Overall Question Time in Sec.
                            </Card.Text>
                          </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-3">
                        <Card style={{ width: '18rem' }}>  
                          <Card.Body>
                             <DonutChart data={dataPie} />
                          <hr />
                            <Card.Text style={{textAlign:'center'}}>
                             Last Test Overview
                            </Card.Text>
                          </Card.Body>
                        </Card>
                    </div>

                    {/*<div className="col-md-3">
                        <Card style={{ width: '18rem' }}>  
                          <Card.Body>
                            <div id="browsers_chart"></div>

                          <hr />
                            <Card.Text style={{textAlign:'center'}}>
                             Last Test Overview
                            </Card.Text>
                          </Card.Body>
                        </Card>
                    </div>*/}

                </div>
            </div>

        </React.Fragment>

            );
        }
    }


ChartSection.propTypes = {
    getDashboardData: PropTypes.func.isRequired,
  }

export default withRouter(connect(null, {getDashboardData})(ChartSection));
