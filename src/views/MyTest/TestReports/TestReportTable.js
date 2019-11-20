import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class TestReportTable extends Component {
  constructor(props) {
    super(props);
}

_getTotalMark(total_questions,rightMarks){
    return parseInt(total_questions)*parseInt(rightMarks);
}

render() {   
  let {testReport} = this.props;

return(  
  <div className="container_full">
    <div>
     <div className="container-fluid">
       <section className="chart_section">
        <div className="row">
          <div className="col-xl-12 col-sm-12">
            <div className="card border-0">
              <div className="card-body">
                <div className="mb-4">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="mb-2 text-success">
                              <span className="text-center">Your Test submitted Successfully </span>
                              <a href="javascript:void(0);" className="btn btn-outline-danger btnwindowclose">
                                <i className="fa fa-times-circle "></i> Close Window</a>
                              </h1>
                            <p className="mb-2"> Test Name : <b>{testReport.testName ? testReport.testName : ''}</b></p>
                            <p className="mb-2">
                              <span className="report-subject">  Subject Name : <b>{testReport.subjectName ? testReport.subjectName : ''}</b></span> 
                              <a href="javascript:void(0);" className="btn btn-outline-danger" style={{float: 'right',visibility:'hidden'}}>
                                <i className="fa fa-times-circle "></i> Close Window</a>
                              </p>
                        </div>
                    </div>
                  <div className="col-12">
                    <div className="homepage_single table-responsive">         
                      <table width="100%" border="0" cellSpacing="0" cellPadding="0" className="table table-bordered stacktable large-only">
                              <thead>
                                  <tr>
                                      <th><strong>Total Questions</strong></th>
                                      <th><strong>Total Attempted</strong></th>
                                      <th><strong>Left Questions</strong></th>
                                      <th><strong>Correct Ques.</strong></th>
                                      <th><strong>Wrong Ques.</strong></th>
                        
                                      <th><strong>Right Marks</strong></th>
                                      <th><strong>Negative Marks</strong></th>
                                      <th><strong>Total Marks</strong></th>
                                  </tr>
                              </thead>
                              <tbody>
                                <tr className="text-center">
                                <td>{testReport.total_questions ? testReport.total_questions : ''}</td>
                                <td>{testReport.totalAttempt ? testReport.totalAttempt : ''}</td>
                                <td>{testReport.leftQuestion ? testReport.leftQuestion : ''}</td>
                                <td>{testReport.correctQuestion ? testReport.correctQuestion : ''}</td>
                                <td>{testReport.wrongQuestion ? testReport.wrongQuestion : ''}</td>

                                <td className="text-success">{testReport.rightMarks ? testReport.rightMarks : ''}</td>
                                <td className="text-danger">{testReport.negativeMarks ? testReport.negativeMarks : ''}</td>
                                <td className="text-info"><strong>{testReport.total_marks ? testReport.total_marks : ''} out of {this._getTotalMark(testReport.total_questions,4)}</strong></td>
                                  </tr>
                              </tbody>
                              </table>
                            </div>
                         </div>
                        </div>    
                      </div>
                     </div>
                  </div>
                 </div>
               </section> 
               </div>
            </div> 
          </div>
          );
        }
    }

export default withRouter(connect(null, {})(TestReportTable));