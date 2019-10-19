import React, { Component } from 'react';
import {Card,Modal} from 'react-bootstrap';
import MTSlogo from '../../../assets/img/brand/MTS logo login.png';
import default_user from '../../../assets/img/default_user.jpg';
import demo_img from '../../../assets/img/demo.jpg';




class StartTest extends Component {
    constructor(props) {
      super(props);
      this.state ={
       show:true,
       termflag:true,
       checkedFlag:false,
     };
       this.handleClose     =  this.handleClose.bind(this);
       this._checkTerms     =  this._checkTerms.bind(this);
       this._handleChange   =  this._handleChange.bind(this);

   }


  _handleChange(event) {
      if(event.target.checked){
        this.setState({termflag:false });  
      }else{
        this.setState({termflag:true});  
      } 
      this.setState({ [event.target.name]: event.target.value });
}

handleClose(){
    this.setState({ show:false });
}

_checkTerms(evt){
    this.props.history.push('./dashboard');
}

  render() {   
    return(  
      <React.Fragment>
         <Modal show={this.state.show}  className="test-modal" size="xl" backdrop="static">
            <Modal.Header>
              <Modal.Title>
                <img className="mts-logo" src={MTSlogo} alt="" style={{width:'200px',height:'auto',borderRadius:'50%',float:'left'}} /> 
                <img src={demo_img} alt="" style={{width:'60px',height:'60px',borderRadius:'50%',float:'right'}}/>
              </Modal.Title>
            </Modal.Header>
        <Modal.Body>

      <div className="container_full"><div>
        <div className="container-fluid">
            <div className="chart_section">
                <div className="row">
                    <div className="col-xl-12 col-sm-12 mb-4">
                        <div className="card border-0">
                            <div className="card-body">
                                <div className="mb-60">
                                    <div className="col-12">
                                        <div className="homepage_single table-responsive">         
                                          <table id="testinstruction" border="0" cellspacing="0" cellpadding="0" className="table table-bordered stacktable large-only">
                                                <thead>
                                                    <tr>
                                                        <th><strong>Test Name</strong></th>
                                                        <th><strong>Total Questions</strong></th>
                                                        <th><strong>Total Time</strong></th>
                                                        <th><strong>Maximum Marks</strong></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td align="center">Electrostatics</td>
                                                        <td align="center">15</td>
                                                        <td align="center">25 min</td>
                                                        <td align="center">60</td>
                                                    </tr>
                                                </tbody>

                                            </table> 
                                        </div>
                                    </div>
                                </div>

                <div className="col-12 mb-4">
                    <h3>General Instructions:</h3>
                    <p className="text-success">Please read the following instructions very carefully:</p>
                    <p>Following are Important Instructions:</p>

                  <ol>
                    <li>For each correct answer mark/Positive mark is 4 mark.</li>
                    <li>For each wrong answer mark/Negative mark is minus 1 mark</li>
                  </ol>
                          </div>
                    <div className="">
                        <div className="alert alert-warning">
                            <label>

                            <input type="checkbox" 
                                   name="checkedFlag"
                                   onChange={(evt) => this._handleChange(evt)}
                                   defaultChecked = {this.state.checkedFlag} />

                                &nbsp;&nbsp; I have read and understood the above instructions. I agree that in case of not following the given instructions, I may be disqualified from giving the Exam. &nbsp; &nbsp;
                            </label>
                            <button type="button" disabled={this.state.termflag} className="btn btn-success" 
                                    onClick={(evt)=>this._checkTerms(evt)}>Start Test</button>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </Modal.Body>       
     </Modal>
    </React.Fragment>
          );
        }
    }

export default StartTest;