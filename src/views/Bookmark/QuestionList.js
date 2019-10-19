import React, { Component } from 'react';

import {Card } from 'react-bootstrap';
import axios from 'axios';
import {Table} from 'react-bootstrap';

var configPath = require('../config');
var ApiPath = configPath.ApiPath;
var authkey = configPath.authkey;
var test_id = configPath.test_id;

class QuestionList extends Component {
    constructor(props) {
      super(props);
      this.state ={
          getTestData:[],
     };
      this._getQuestionsList         = this._getQuestionsList.bind(this);
      this._changeRadio              =      this._changeRadio.bind(this);
   }

   _getQuestionsList(){
     let that = this;
         var dataObj ={
            authkey: authkey,
            test_id:test_id
          }
          axios.post(ApiPath+'test/start_test', dataObj)
              .then(function (response) {
                    that.setState({getTestData: response.data.data.question});
                }).catch(function (error) {
                        console.log(error);
      });  
   }

   componentDidMount() {
     this._getQuestionsList();
   }

   _changeRadio(event,is_correct){
      this.setState({ selectedValue:is_correct });
      console.log(is_correct);
  }

  render() {   
    let {getTestData} = this.state;
    return(  
            <React.Fragment>

              <Card style={{margin:'20px'}}>  
                <Card.Body>
                 <div className="row">

                <Table bordered className="dataTable bookmark">
                <thead>
                  <tr>
                    <th style={{width:'5%'}}>Q.No.</th>
                    <th style={{width:'95%'}}>Question</th>
                  </tr>
                </thead>

                <tbody>
                  {getTestData && getTestData.length > 0 && getTestData.map((ques,index)=>(
                    <tr key={index}>
                      <td>{++index}</td>
                    <td> 
                      <div dangerouslySetInnerHTML={{__html: ques.question}} />
                        <div className="row">
                         <div className="col-md-12">
                          <div className="form-group row mb15" style={{margin:'0px -15px'}}>
                          {ques.options && ques.options.length > 0 && ques.options.map((option)=>(
                               <div className="col-12 option-buttons" key={option.option_id}>
                                <label htmlFor={option.option_id} className="customCheckBox">
                                  <span dangerouslySetInnerHTML={{__html: option.option}}></span>
                                  <input type="radio" 
                                         name="radio_1" 
                                         id={option.option_id}
                                         value="1"
                                         onChange={(evt) => {this._changeRadio(evt,option.is_correct)}} /> 
                                  <span className="checkmark"></span>
                                </label>
                              </div>))}
                          </div>
                         </div>
                        </div>
                      </td>
                  </tr> ))}
                </tbody>


                </Table>

                    
                  </div>
                </Card.Body>
              </Card>


        
           </React.Fragment>
          );
        }
}

export default QuestionList;