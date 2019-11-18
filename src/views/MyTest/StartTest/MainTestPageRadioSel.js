import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { saveQuesStore } from '../../../actions/homepage';
import ReactHtmlParser from 'react-html-parser';
import sanitizeHtml from 'sanitize-html';
var myQues = require('../../sub_parts/questions_functions');

class MainTestPageRadioSel extends Component {
    constructor(props) {
      super(props);
      this.state ={
        selAnswer:''
     };

     this._onSiteChanged   =   this._onSiteChanged.bind(this);
}
  componentWillReceiveProps(nextProps) {
  this._getRadioSelQues(nextProps.id,nextProps.optionSelected,nextProps.isAnswered,nextProps.isRemaining,nextProps.correctAns); 
    if (nextProps.optionSelected !== '') {
      this.setState({selAnswer:nextProps.optionSelected});
    }else{
      this.setState({selAnswer:''});
    }
  }

  componentDidMount() {
  this._getRadioSelQues(this.props.id,this.props.optionSelected,this.props.isAnswered,this.props.isRemaining,this.props.correctAns);
}

  _getRadioSelQues(id,optionSelected,isAnswered,isRemaining,correctAns){
    var that = this;
    let temp_correct = 'no';
      if (optionSelected == correctAns) {
        temp_correct = 'yes';
     }

     myQues.get_selected_ques(id,optionSelected,isAnswered,isRemaining,temp_correct, function(err,result){
       var questionList = result.questionList;
      if(questionList.length > 0) {
           that.props.saveQuesStore(questionList,'action');
      }
   });
}

  _onSiteChanged(evt,id,ans_id,isAnswered,isRemaining,correctAns) {
    this._getRadioSelQues(id,ans_id,isAnswered,isRemaining,correctAns); 

    this.setState({ selAnswer: ans_id });

  }

  render() {   
    let {optionSelected,id,ans_id,answer,index1} = this.props;

    return(  
          <React.Fragment>

          <label htmlFor={ans_id} className="control control-outline control--radio">

             <input type="radio" 
                     name="optionsRadios"
                     value={optionSelected}
                     id={ans_id}
                     checked ={ans_id === optionSelected ? true : false}
                     onChange={(evt)=>this._onSiteChanged(evt,id,ans_id,'yes','no','no')}
                      className="option_id" />
                <strong style={{margin: '5px',position:'relative',top: '-1px'}}>{++index1+')'}</strong>
              <span className="p-1" dangerouslySetInnerHTML={{__html: sanitizeHtml(ReactHtmlParser(answer))}}></span>
            <span className="control__indicator"></span>
             </label>
          </React.Fragment>
        );
      }
    }


MainTestPageRadioSel.propTypes = {
    saveQuesStore:PropTypes.func.isRequired,
}


export default withRouter(connect(null, {saveQuesStore})(MainTestPageRadioSel));
