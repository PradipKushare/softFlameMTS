import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import CountUp from 'react-countup';


import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { SubmitQuesFunc } from './SubmitQuesStore';
import { ClearQuesFunc } from './ClearQuesStorage';



import { postQuesData } from '../../../actions/homepage';

class MainTestPageMiddleHeader extends Component {
  constructor(props) {
    super(props);
    this.timer = '';

      let tmpexamTime = 0;
     var examInfoData = JSON.parse(localStorage.getItem('examData'));
       if (examInfoData !== null && examInfoData!== undefined) {
         tmpexamTime = examInfoData.testDuration;
         tmpexamTime*=60000;
       }  

       var questionTime = localStorage.getItem('questionTime');

    this.state = {
        examTime:Date.now() + tmpexamTime,
        questionTime:questionTime,
        tmpexamTime:tmpexamTime,
        now_time:'',
      }
         this._endTest      =     this._endTest.bind(this);
    };

_endTest(evt){
  evt.preventDefault();
  let that = this;
  let post_data = SubmitQuesFunc();
     if(window.confirm('Are you sure you want to submit your test ?')){
        that.props.postQuesData(post_data).then(response => { 
          if (response.data.success) {
              //ClearQuesFunc(response.data.reportId);
               var test_id = response.data.reportId;
               console.log(test_id)
               console.log(that.props.history)
              that.props.history.push('../test_summary/'+test_id);
          }else{
            console.log('failureeeeeeeee');
            }
          }).catch(function (error) {
        console.log(error);
        });  
     }
  }

/*      componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        this.setState({questionTime:nextProps.questionTime});
      }


componentDidMount() {
  let that = this;
    setInterval(() => {
       localStorage.setItem('questionTime',parseInt(that.state.questionTime)+parseInt(1));
        that.setState({questionTime:parseInt(that.state.questionTime)+parseInt(1)});
    }, 1000);

}*/

_isCompleted(){
  console.log('completedddddddddddddddd:')
}

_isTick(tick){
    localStorage.setItem('remainingTime',tick.total);
}

  render() {   
    let {solvedQuestion,remainQuestion,markedQuestion} = this.props;
    let {questionTime} = this.state;

    console.log(this.state.examTime);

    return(  
       <div className="test_middle_header border-0 page-heading">
          <div className="row quetoppanel">
            <div className="col-sm-7">
                Question type : <span id="type">MULTIPLE_CHOICE</span>
            </div>
            <div className="col-sm-3">
              <div className="test-time remaining_time radius alert-success"> <i className="fa fa-clock-o"> </i>
                  <span className="hidden-xs"> Time Remanining </span> <span id="time_remaining">
                  <Countdown zeroPadTime = {2} date={this.state.examTime} 
                             onComplete ={this._isCompleted}
                             onTick ={this._isTick}/>
                  </span>
              </div>
              </div>
              <div className="col-sm-2">
                  <a onClick={(evt)=>this._endTest(evt)} href="javascript:void(0);" className="end-test radius3 btn btn-danger" style={{width: '100%'}}><i className="fa fa-sign-out"></i> End Test</a>
              </div>
          </div>
          <div className="alert alert-warning ">
              <div className="row">
                  <div className="col-sm-3 col-xl-6">
                      Solved : <span id="solved_question_count">{solvedQuestion ? solvedQuestion : 0}</span>
                  </div>
                  <div className="col-sm-3 col-xl-6">
                      Marked : <span id="flaged_question_count">{markedQuestion ? markedQuestion : 0}</span>
                  </div>
                  <div className="col-sm-3 col-xl-6">
                      Remaining : <span id="remaining_question_count">{remainQuestion ? remainQuestion : 0}</span>
                  </div>
                  <div className="col-sm-3 col-xl-6">
                      Que. time :
                       <span id="qtime">
                          {questionTime}
                      </span>
                  </div>
                </div>
              </div>
            </div>
          );
        }
    }

MainTestPageMiddleHeader.propTypes = {
    postQuesData:PropTypes.func.isRequired,
}


export default withRouter(connect(null, {postQuesData})(MainTestPageMiddleHeader));