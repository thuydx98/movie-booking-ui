import * as actionType from '../constants/actionType';


var initialState = {};

var rdcUser = (state = initialState, action) => {
    switch(action.type){
        case actionType.FETCH_USER_LOGIN:
            state = action.user; //.map(item => item.TenLoaiSanPham); 
            return state;
        case actionType.UPDATE_STATE_USER_LOGIN: 
            state = action.user;
            return state;
        case actionType.UPDATE_STATE_USER_LOGOUT:
            state = action.user;
        default:
            return state;
    }
}

export default rdcUser;