import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {  BrowserRouter as Router, Link, Route, Redirect,Switch,withRouter } from 'react-router-dom';
import { uploadProfilePics,getProfilePic,setProfileStore } from '../../actions/homepage';

var configData = require('../config.js');
var img_chrome_path = configData.img_chrome_path;

class ChangeProfilePic extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        file: '',
        profilepic: '',
        profilepic:'',
      };
       this._onClick               =      this._onClick.bind(this);
       this._getProfilePics        =      this._getProfilePics.bind(this); 

    }

_getProfilePics(){
 let that = this;
  let post_data = {
     sess_user_id:localStorage.getItem('sess_user_id')
  }
    this.props.getProfilePic(post_data).then(response => { 
      if (response.data.success) {
            that.setState({ profilepic:response.data.profilepic });
               var profile_pics = img_chrome_path+response.data.profilepic;
               localStorage.setItem('profile_pics',profile_pics)
            that.props.setProfileStore(profile_pics);
          }
       }).catch(function (error) {
        console.log(error);
    });
}

componentDidMount() {
  this._getProfilePics();
}

  _onClick(evt){
    document.getElementById('userProfile').click();
  }

  _handleImageChange(e) {
    let that = this;
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
     
     let post_data = new FormData();
     let sess_user_id = localStorage.getItem('sess_user_id');
     let imagedata = document.querySelector('input[name="userProfile"]').files[0];
       post_data.append('userProfile', imagedata);
       post_data.append('sess_user_id', sess_user_id);
      that.props.uploadProfilePics(post_data).then(response => { 
          if (response.data.success) {
              that.setState({ file: file,profilepic: response.data.profilepic});
              var profile_pics = img_chrome_path+response.data.profilepic;
               localStorage.setItem('profile_pics',profile_pics)
            that.props.setProfileStore(profile_pics);
              window.location.reload();
            }
           }).catch(function (error) {
        console.log(error);
      });  
    }
    reader.readAsDataURL(file)
  }

render() {   
let {profilepic} = this.state;
let student_name = localStorage.getItem('student_name');
    return(  
        <React.Fragment>
          <div className="row">
            <div className="col-12">
              <center style={{marginBottom:'20px'}}>                      
                <img src={img_chrome_path+profilepic} name="aboutme" style={{width:'140px',height:'140px'}} 
                     className="img-circle profilepic profile-pic" alt="" />
                <div className="p-image">
                    <i className="fa fa-camera upload-button" onClick={(evt)=>this._onClick(evt)}></i>

                     <input id="userProfile" type="file" style={{display:'none'}}
                            name="userProfile" accept="image/*" 
                            onChange={(e)=>this._handleImageChange(e)} />
                </div>
                   <h3 className="user-pro-name">{student_name}</h3>                      
                </center>
              </div>
          </div>
        </React.Fragment>
          );
        }
    }

ChangeProfilePic.propTypes = {
    uploadProfilePics: PropTypes.func.isRequired,
    getProfilePic: PropTypes.func.isRequired,
    setProfileStore:PropTypes.func.isRequired,
  }

export default withRouter(connect(null, {uploadProfilePics,getProfilePic,setProfileStore})(ChangeProfilePic));
