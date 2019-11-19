import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import sanitizeHtml from 'sanitize-html';
import MainTestPageMarkUnmark from './MainTestPageMarkUnmark';
import MainTestPageRadioSel from './MainTestPageRadioSel';
import { SubmitQuesFunc } from './SubmitQuesStore';
import { ClearQuesFunc } from './ClearQuesStorage';


import $ from 'jquery';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { saveQuesStore,postQuesData } from '../../../actions/homepage';

var myQues = require('../../sub_parts/questions_functions');

class MainTestPagePanel extends Component {
    constructor(props) {
      super(props);
      this.state ={
        markUnmark:'Mark For Review',
     };
     this._showNextQues       =   this._showNextQues.bind(this);
     this._showPrevQues       =   this._showPrevQues.bind(this);
     this._clearAnswer        =   this._clearAnswer.bind(this);

     this._submitTest         =   this._submitTest.bind(this);
}

_showNextQues(evt,toQues,data,id,index){
  evt.preventDefault();
       let that = this;
       let curr_ques_time = localStorage.getItem('questionTime');
        myQues.set_question_time(index,curr_ques_time, function(err,result1){
          var questionList = result1.questionList;
         if(questionList.length > 0) {
           that.props.saveQuesStore(questionList,'action');

        var fromQues = toQues - 1;
          that.props.showNextQues(parseInt(fromQues),parseInt(toQues));
      }  
  });
}

_showPrevQues(evt,toQues,data,id,index){
    evt.preventDefault();
    let that = this;
      if (toQues > 0) {
         let curr_ques_time = localStorage.getItem('questionTime');
          myQues.set_question_time(index,curr_ques_time, function(err,result1){
            var questionList = result1.questionList;
              if(questionList.length > 0) {
                  that.props.saveQuesStore(questionList,'action');
                }
            var fromQues = toQues - 1;
            that.props.showPrevQues(parseInt(fromQues),parseInt(toQues));
      });
    }
}

  _clearAnswer(evt,id,optionSelected,isAnswered,isRemaining,isCoorectAns){
    let that = this;
     myQues.get_selected_ques(id,optionSelected,isAnswered,isRemaining,isCoorectAns, function(err,result){
       var questionList = result.questionList;
      if(questionList.length > 0) {
           that.props.saveQuesStore(questionList,'action');
        }
    });
  }

_submitTest(evt){
  evt.preventDefault();
  let that = this;
  let post_data = SubmitQuesFunc();

     if(window.confirm('Are you sure you want to submit your test ?')){
        that.props.postQuesData(post_data).then(response => { 
          if (response.data.success) {
              ClearQuesFunc(response.data.reportId);
              var test_id = response.data.reportId;
              that.props.history.push('../test_summary/'+test_id);
          }else{
            console.log('failureeeeeeeee');
            }
          }).catch(function (error) {
        console.log(error);
        });  
     }
}

_get_question_time(time){
  localStorage.setItem('questionTime',time);
  this.props.get_question_time(time);
  return null;
}

  render() {   
    let {questionList,fromQues,toQues,totalQuestion} = this.props;
    let {markUnmark} = this.state;

    return(  
     <section className="chart_section">
      <div className="row">
        <div className="col-xl-12 col-sm-12">
          <div className="card ht-bd border-0 text-light">

    {questionList && questionList.length > 0  && questionList.slice(fromQues, toQues).map((ques,index)=>(
          <div className="card-body card-height" style={{paddingTop: '5px'}} key={index}>
            <div className="row">
              <div className="col-12">
                <div className="panel panel-default" id="questions">
                  <div className="panel-heading question-panel" id="qhead">
                    <table width="100%" border="0" cellSpacing="0" cellPadding="0">
                      <tbody>
                        <tr>
                          <td width="25%" align="left">
                            <div id="que">Q. {toQues}</div></td>
                          <td width="36%" align="center">
                            {this._get_question_time(ques.questionTime)}
                            <MainTestPageMarkUnmark ques_id={ques._id} isMarked={ques.isMarked} />

                        </td>
                        <td width="39%" align="right">
                        <span className=" hidden-xs">Correct Marks:</span> <span style={{color:'#2dff00'}}>+4.00,</span> 
                         <span className="hidden-xs">Negative Marks:</span> <span style={{color:'#ff2a00'}}> -1.00</span></td>
                        </tr>
                       </tbody>
                      </table>
                     </div>

      <div className="panel-body question_detailswithans" id="question-bx">
        <span dangerouslySetInnerHTML={{__html: sanitizeHtml(ReactHtmlParser(ques.question))}}></span>
                <div className="row">
                  {ques.options.map((opt,index1)=>(
                  <div className="radio col-sm-6 col-xs-12 p-3" key={index1}>
                      <MainTestPageRadioSel id={ques._id} 
                                            optionSelected={ques.optionSelected} 
                                            isAnswered={ques.isAnswered}
                                            isRemaining={ques.isRemaining}
                                            correctAns={ques.correctAns}
                                            ans_id={opt.ans_id}
                                            index1={index1}
                                            answer={opt.answer} />
                      </div>))}
                    </div>
                 </div>
               </div>
             </div>
           </div>
          <div className="panel-footer questionfooter row">
            <div className="col-xs-6 col-md-6">
              <button type="button" className="btn btn-success btn-sm" 
                      onClick={(evt)=>this._clearAnswer(evt,ques._id,'','no','yes','no')}>Clear Response</button>
              </div>
                <div className="col-xs-6 col-md-6 pull-right">
                 {toQues !== totalQuestion && 
                  <button type="button" className="btn btn-success btn-sm" 
                          style={{float: 'right',marginLeft:'10px'}} id="saveandnext" 
                          onClick={(evt)=>this._showNextQues(evt,(toQues+1),ques,ques._id,toQues)}>
                  <i className="fa fa-forward"></i> Save and Next</button>}

                  {toQues == totalQuestion && 
                  <button type="button" className="btn btn-success btn-sm" 
                          style={{float: 'right',marginLeft:'10px'}} id="saveandnext" 
                          onClick={(evt)=>this._submitTest(evt)}>
                   Submit Test</button>}

                  {toQues !== 1 &&
                  <button type="button" className="btn btn-success btn-sm"
                          style={{float: 'right'}} 
                          onClick={(evt)=>this._showPrevQues(evt,(toQues-1),ques,ques._id,toQues)}>
                  <i className="fa fa-backward"></i> Previous</button>}
                 </div>
                </div>
               </div>  ))}
             </div>
            </div>
            </div>
           </section>
        );
      }
    }

MainTestPagePanel.propTypes = {
    saveQuesStore:PropTypes.func.isRequired,
    postQuesData:PropTypes.func.isRequired,
}


export default withRouter(connect(null, {saveQuesStore,postQuesData})(MainTestPagePanel));
