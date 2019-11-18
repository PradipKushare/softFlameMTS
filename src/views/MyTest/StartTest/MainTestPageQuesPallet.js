import React, { Component } from 'react';
import { saveQuesStore } from '../../../actions/homepage';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

var myQues = require('../../sub_parts/questions_functions');

class MainTestPageQuesPallet extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
     this._show_question      =   this._show_question.bind(this);
   }

  _show_question(evt,index,id){
    evt.preventDefault();
    let that = this;
    let tmp_index = index - parseInt(1);
    let curr_ques_time = localStorage.getItem('questionTime');
     myQues.set_question_time(tmp_index,curr_ques_time, function(err,result){
           var questionList = result.questionList;
          if(questionList.length > 0) {
               that.props.saveQuesStore(questionList,'action');
          }
              var fromQues = index - 1;
              var toQues = index;
              that.props.getQuestionNum(parseInt(fromQues),parseInt(toQues));
       });
  }


_setReview(ques){
  var isMarked = ques.isMarked;
  var isAnswered = ques.isAnswered;
  var markAnswered = ques.markAnswered;
  var returnVal = '';

  if (isMarked == 'yes') {
    returnVal = 'review';
  }
 if (isAnswered == 'yes') {
    returnVal+= ' attempt';
  }
  return returnVal;
}

  render() {   
        let {questionList,examName} = this.props;


    return(  
        <div className="side_bar bg_color scroll_auto padding-10 mCustomScrollbar _mCS_1">
          <div id="mCSB_1" className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" style={{maxHeight: 'none'}} tabIndex="0">
            <div id="mCSB_1_container" className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y" style={{position:'relative', top:'0',left:'0'}} dir="ltr">
          <div className="bg-default-color mb-2 questionname">
              <strong>Name - {examName}</strong>
          </div>
          <div className="bg-default-color  mb-2 qpalletlabel">
              <p>Questions Pallet</p>
              <hr className="hr-mar5" />
          <div id="questions-number" className="questionpallet">
          {questionList && questionList.map((ques,index)=>(
               <a href="javascript:void(0);" key={index} 
               className={'active '+this._setReview(ques)}
                 onClick={(evt)=>this._show_question(evt,index,ques._id)}>{++index}</a>   
               ))}
          </div>
          </div>
          <div className="bg-default-color mb-2 questionlegend">
              <div id="questions-number1">
                  <p style={{marginBottom: '6px'}}><a className="legned attempt"></a>Answered Questions</p>
                  <p style={{marginBottom: '6px'}}><a className="legned review"></a>Marked Questions</p>
                  <p style={{marginBottom: '6px'}}><a className="legned notattempt"></a>Not Answer Questions</p>                
                  <p style={{marginBottom: '6px'}}><a className="legned attempt review"></a>  Marked &amp; Answered Questions</p>
              </div>
             </div>
           </div>
         </div>
        </div>
          );
        }
    }

MainTestPageQuesPallet.propTypes = {
    saveQuesStore:PropTypes.func.isRequired,
}

export default withRouter(connect(null, {saveQuesStore})(MainTestPageQuesPallet));