import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { getQuestionList,saveQuesStore } from '../../../actions/homepage';
import MainTestPageHeader from './MainTestPageHeader';
import MainTestPageQuesPallet from './MainTestPageQuesPallet';
import MainTestPageMiddleHeader from './MainTestPageMiddleHeader';
import MainTestPagePanel from './MainTestPagePanel';

class MainTestPage extends Component {
    constructor(props) {
      super(props);

// document.addEventListener('contextmenu', event => event.preventDefault());


  let test_id   = this.props.match.params.test_id ? this.props.match.params.test_id : '';
  const queryString = require('query-string');
  const parsed  = queryString.parse(props.location.search);
  test_id = parsed.test_id ? parsed.test_id : test_id;

  let examData = JSON.parse(localStorage.getItem('examData'));
  let examName = examData.examName

      this.state ={
          test_id:test_id,
          examName:examName,
          questionList:[],
          fromQues:parseInt(0),
          toQues:parseInt(1),
          currentQues:[],
          totalQuestion:parseInt(0),

          solvedQuestion:'',
          remainQuestion:'',
          markedQuestion:'',
          questionTime:0,
     };
     this._getQuestionList          =   this._getQuestionList.bind(this);
     this._show_question            =   this._show_question.bind(this);
     this._showNextQues             =   this._showNextQues.bind(this);
     this._showPrevQues             =   this._showPrevQues.bind(this);
     this._get_question_time        =   this._get_question_time.bind(this); 
  }

_getQuestionList(evt){
  let that = this;
  var examData = JSON.parse(localStorage.getItem('examData'));
  var subject = examData.subjects;
   let post_data = {
            testId:this.state.test_id,
            subject:subject,
        }

      that.props.getQuestionList(post_data).then(response => { 
          if (response.data.success) {
            var resData = response.data.data.map(function(el) {
                var o = Object.assign({}, el);
                      o.isMarked = 'no';
                      o.isAnswered = 'no';
                      o.markAnswered = 'no';
                      o.isRemaining = 'yes';
                      o.optionSelected = '';
                      o.isCoorectAns = 'no';
                      o.questionTime = 0;


                return o;
              })

            this._storeInLocal(resData, function(err,result){
              if(result){
                var questionList = JSON.parse(localStorage.getItem('questionList'));
                  that.props.saveQuesStore(questionList,'');
                  localStorage.setItem('isQuesLoaded','yes');
                  localStorage.setItem('totalQuestion',parseInt(response.data.countData));
                  
                that.setState({totalQuestion:parseInt(response.data.countData)});
              }
            });
          }else{
              localStorage.removeItem('questionList');
                that.setState({questionList:[],totalQuestion:parseInt(0) });
           }
       }).catch(function (error) {
    console.log(error);
  });   
}

_storeInLocal(data,callback){
  let isQuesLoaded = localStorage.getItem('isQuesLoaded');
  if (isQuesLoaded !== 'yes') {
      localStorage.setItem('questionList',JSON.stringify(data));
    }
   callback(null,{status:true});
}

componentDidMount() {
  this._getQuestionList();

  localStorage.setItem('currIndex',0);
  localStorage.setItem('prevIndex',0);

}

  _get_question_time(questionTime){
    console.log('questionTime:'+questionTime);

      this.setState({questionTime:questionTime});
  }

  _show_question(fromQues,toQues){
    this.setState({fromQues:fromQues,toQues:toQues});
  }

_showNextQues(fromQues,toQues){
    this.setState({fromQues:fromQues,toQues:toQues});
}

_showPrevQues(fromQues,toQues){
    this.setState({fromQues:fromQues,toQues:toQues});
}

componentWillReceiveProps(nextProps) {
  let  questionList = [];
  let chkrec = JSON.stringify(nextProps.questionList);
  if (chkrec!== '{}' && chkrec  !== undefined) {
     questionList = nextProps.questionList;

      let solvedQuestion = localStorage.getItem('solvedQuestion');
      let remainQuestion = localStorage.getItem('remainQuestion');
      let markedQuestion = localStorage.getItem('markedQuestion');  

     this.setState({questionList :questionList,solvedQuestion:solvedQuestion,
                    remainQuestion:remainQuestion,markedQuestion:markedQuestion});
    }
  }

  render() {   
    let {quesNumbers,questionList,fromQues,toQues,optionIndex,currentQues,totalQuestion,examName,palletType,solvedQuestion,remainQuestion,markedQuestion,questionTime} = this.state;


    return(  
          <div className="wrapper">
            <MainTestPageHeader />

            <div className="container_full">
            <div className="container_full">
              <MainTestPageQuesPallet questionList={questionList} 
                                      examName={examName} 
                                      getQuestionNum={this._show_question} />

                <div className="content_wrapper">
                  <div className="container-fluid">

                    <MainTestPageMiddleHeader solvedQuestion={solvedQuestion}
                                              remainQuestion={remainQuestion}
                                              markedQuestion={markedQuestion}
                                              questionTime={questionTime}
                                              history={this.props.history} />
                    <MainTestPagePanel questionList={questionList}
                                       showPrevQues={this._showPrevQues}
                                       showNextQues={this._showNextQues}
                                       fromQues={fromQues}
                                       toQues={toQues}
                                       totalQuestion={totalQuestion}
                                       get_question_time={this._get_question_time}
                                       history={this.props.history} />
                   </div>
                  </div>
                </div>
               </div>
            </div>
          );
        }
    }

MainTestPage.propTypes = {
    getQuestionList: PropTypes.func.isRequired,
    saveQuesStore:PropTypes.func.isRequired,
}

   function mapStateToProps(state) {
    return {
      questionList: state.save_question_list.saveQuesStore,
      
    };
  }


export default withRouter(connect(mapStateToProps, {getQuestionList,saveQuesStore})(MainTestPage));
