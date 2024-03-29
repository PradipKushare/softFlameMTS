import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TestStatusButtons extends Component { 
  constructor(props){
      super(props);
      this.state = { 

      };
      this._goStartTest     =     this._goStartTest.bind(this);
      this._goIncompleteTest     =     this._goIncompleteTest.bind(this);

    }

    _goStartTest(evt,data){
      evt.preventDefault();
      localStorage.setItem( 'examData', JSON.stringify(data));
      this.props.history.push('/start-test');
  }

  _goIncompleteTest(evt,data,id){
      evt.preventDefault();
     localStorage.setItem( 'examData', JSON.stringify(data));
     this.props.history.push('./take_test/questions/'+id);
  }

render() {   
  let { getTestData,initLoading } = this.props;
 
    return(  
      <React.Fragment>
          {data.testStatus == 0 &&
            <td> <button style={{color:'#FFF',fontWeight:'bold'}} className="btn btn-info" onClick={(evt)=>this._goStartTest(evt,data)}>
            Start test </button>
          </td>}

           {data.testStatus == 1 &&
            <td> <button style={{color:'#FFF',fontWeight:'bold'}} className="btn btn-danger" onClick={(evt)=>this._goIncompleteTest(evt,data,data._id)}>
            Incomplete </button>
          </td>}

           {data.testStatus == 2 &&
              <td>
                <i style={{color:'#4cae4c'}} className="fa fa-check-circle fa-2x"></i> Complete
              </td>}
     </React.Fragment>
          );
        }
    }

export default TestStatusButtons;