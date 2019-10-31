import axios from 'axios';
import {SAVE_PROFILE_PIC} from './types';

var configData = require('../views/config.js');
var ApiPath = configData.ApiPath;
var Api = configData.Api;

export function postRegister(data) {
	return dispatch => {
		return Api.post('student/register',data);
	}
}

export function postLogin(data) {
  return dispatch => {
    return Api.post('student/login',data);
  }
}

export function postProfileInfo(data) {
  return dispatch => {
    return Api.post('student/update_profile',data);
  }
}

export function postForgotPassword(data) {
  return dispatch => {
    return Api.post('student/forgot_password',data);
  }
}

export function postResetPassword(data) {
  return dispatch => {
    return Api.post('student/update_password',data);
  }
}

export function getProfileInfo() {
  return dispatch => {
    return Api.get('student/get_user_profile');
  }
}

export function uploadProfilePics(data) {
  return dispatch => {
    return Api.post('student/update_profile_pics',data);
  }
}

export function getProfilePic(data) {
  return dispatch => {
    return Api.post('student/get_profile_pics',data);
  }
}

export function changePassword(data) {
  return dispatch => {
    return Api.post('student/change_login_password',data);
  }
}

export function getNewsData(data) {
  return dispatch => {
    return Api.get('news/get_news_data',data);
  }
}

export function setProfileStore(profile_pics) {
      return {
       type: SAVE_PROFILE_PIC,
       saveProPic : profile_pics
    };
}

