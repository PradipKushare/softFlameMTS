import { SAVE_PROFILE_PIC } from '../actions/types';

const initialStateDetails = {
    saveProPic:'',
};

export default (state = initialStateDetails, action = {}) => {
  switch(action.type) {
        case SAVE_PROFILE_PIC:
         return{
           saveProPic: action.saveProPic
        }; 

       default: return state;
  }
}