import {SAVE_PROFILE_PIC,SAVE_QUES_STORE} from './types';
var configData = require('../views/config.js');
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

export function getNewsData() {
  return dispatch => {
    return Api.get('news/get_news_data');
  }
}

export function getDashboardData() {
  return dispatch => {
    return Api.get('student/get_dashboard_data');
  }
}

export function getTestData(data) {
  return dispatch => {
    return Api.post('student/get_test_data',data);
  }
}

export function getUserTestData(data) {
  return dispatch => {
    return Api.post('test_list/get_user_test_data',data);
  }
}

export function getTestreports(data) {
  return dispatch => {
    return Api.post('student/get_test_report',data);
  }
}

/*export function getQuestionList(data) {
  return dispatch => {
    return Api.post('student/get_question_test_data',data);
  }
}
*/

export function getQuestionList(data) {
  return dispatch => {
    return Api.post('student/get_question_test_data',data);
  }
}


export function postQuesData(data) {
  return dispatch => {
    return Api.post('student/save_question_answers',data);
  }
}

export function saveQuesStore(data,action) {
  if (action == 'action') {
  return dispatch => {
  return dispatch({ type: SAVE_QUES_STORE,
                    saveQuesStore : data });
      };
    }else{
    return dispatch => {
        var questionList = JSON.parse(localStorage.getItem('questionList')) || [];
    return dispatch({ type: SAVE_QUES_STORE,
                      saveQuesStore : questionList });
    };
  }
}

export function setProfileStore(profile_pics) {
      return {
       type: SAVE_PROFILE_PIC,
       saveProPic : profile_pics
    };
}