import React, { Component } from 'react';
import default_user from '../../assets/img/default_user.jpg'

class ChangeProfilePic extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        file: '',
        imagePreviewUrl: '',
        defaultUser:default_user,
      };
       this._onClick  =  this._onClick.bind(this);
    }

  _onClick(evt){
    document.getElementById('userProfile').click();
  }

  _handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({ file: file,imagePreviewUrl: reader.result});
    }
    reader.readAsDataURL(file)
  }

render() {   
    let defaultUser = this.state.defaultUser;
    let {imagePreviewUrl} = this.state;
    if (imagePreviewUrl) 
      defaultUser = imagePreviewUrl ;

    return(  
        <React.Fragment>
          <div className="row">
            <div className="col-12">
              <center style={{marginBottom:'20px'}}>                      
                <img src={defaultUser} name="aboutme" style={{width:'140px',height:'140px'}} 
                     className="img-circle profilepic profile-pic" alt="" />
                <div className="p-image">
                    <i className="fa fa-camera upload-button" onClick={(evt)=>this._onClick(evt)}></i>

                     <input id="userProfile" type="file" style={{display:'none'}}
                            name="userProfile" accept="image/*" 
                            onChange={(e)=>this._handleImageChange(e)} />
                </div>
                   <h3 className="user-pro-name">Pradip Kushare</h3>                      
                </center>
              </div>
          </div>
        </React.Fragment>
          );
        }
    }

export default ChangeProfilePic;