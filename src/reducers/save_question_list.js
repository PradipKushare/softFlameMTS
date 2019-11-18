import { SAVE_QUES_STORE } from '../actions/types';

const initialStateQues = {
  saveQuesStore:{},
};

export default (state = initialStateQues, action = {}) => {
  switch(action.type) {
        case SAVE_QUES_STORE:
         return{
           saveQuesStore: action.saveQuesStore
        };
       default: return state;
  }
}

