import React, { Component } from 'react';

import $ from 'jquery';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { saveQuesStore } from '../../../actions/homepage';

var myQues = require('../../sub_parts/questions_functions');

class MainTestPageMarkUnmark extends Component {
    constructor(props) {
      super(props);
      this.state ={
        markUnmark:'Mark For Review',
        isMarked:'',
     };
     this._markUnmark        =   this._markUnmark.bind(this);
    this._getMarkedQues      =   this._getMarkedQues.bind(this);

   }

componentWillReceiveProps(nextProps) {
  this._getMarkedQues(nextProps.ques_id,nextProps.isMarked); 
    if (nextProps.isMarked == 'yes') {
      this.setState({markUnmark:'Unmark'});
    }else{
      this.setState({markUnmark:'Mark For Review'});
    }
  }

  _getMarkedQues(id,isMarked){
    var that = this;
     myQues.get_marked_ques(id,isMarked, function(err,result){
       var questionList = result.questionList;
      if(questionList.length > 0) {
           that.props.saveQuesStore(questionList,'action');
      }
   });
}

componentDidMount() {
   this._getMarkedQues(this.props.ques_id,this.props.isMarked);
}

_markUnmark(evt,ques_id){
  let that = this;
  if (this.state.markUnmark == 'Mark For Review') {
    console.log('ques_id:'+ques_id);
    that._getMarkedQues(ques_id,'yes');
  }else{
    that._getMarkedQues(ques_id,'no');
  }
}

  render() {   
  let {markUnmark} = this.state;
  let {ques_id} = this.props;

    return(  
      <React.Fragment>
          <button type="button" className="btn btn-warning" onClick={(evt)=>this._markUnmark(evt,ques_id)}>{markUnmark}</button>
      </React.Fragment>
        );
      }
    }


MainTestPageMarkUnmark.propTypes = {
    saveQuesStore:PropTypes.func.isRequired,
}


export default withRouter(connect(null, {saveQuesStore})(MainTestPageMarkUnmark));
