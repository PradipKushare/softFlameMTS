import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import TestReportHeader from './TestReportHeader';
import TestReportTable from './TestReportTable';

import TestReportPieChart from './TestReportPieChart';
import TestReportSpeedChart from './TestReportSpeedChart';
import TestReportProgressChart from './TestReportProgressChart';

import { getTestreports } from '../../../actions/homepage';

class TestwiseReports extends Component {
  constructor(props) {
    super(props);

    let test_id   = this.props.match.params.test_id ? this.props.match.params.test_id : '';
    const queryString = require('query-string');
    const parsed  = queryString.parse(props.location.search);
    test_id = parsed.test_id ? parsed.test_id : test_id;
    let userId = localStorage.getItem('sess_user_id');
    this.state = {
      test_id:test_id,
      testReport:[],
      userId:userId,
    };

     this._getTestReports          =   this._getTestReports.bind(this);
}

_getTestReports(evt){
    let that = this;
    var post_data = {
      testId:this.state.test_id,
      userId:this.state.userId
    }

      that.props.getTestreports(post_data).then(response => { 
          if (response.data.success) {   
                that.setState({testReport:response.data.result});
          }else{
                that.setState({testReport:[] });
           }
       }).catch(function (error) {
    console.log(error);
  });   
}

componentDidMount() {
  this._getTestReports();
}

  render() {  
  let {testReport} = this.state; 
   
  return(  
        <React.Fragment>
          <div className="wrapper">
            <TestReportHeader />
              <TestReportTable testReport={testReport} />

              <div className="row">
                  <div className="col-md-4">
                    <TestReportPieChart testReport={testReport}/>
                  </div>

                  <div className="col-md-4">
                    <TestReportSpeedChart testReport={testReport}/>
                  </div>

                  <div className="col-md-4">
                    <TestReportProgressChart testReport={testReport}/>
                  </div>
              </div>

             </div>
            </React.Fragment>
          );
        }
    }

    
TestwiseReports.propTypes = {
    getTestreports: PropTypes.func.isRequired
}

export default withRouter(connect(null, {getTestreports})(TestwiseReports));