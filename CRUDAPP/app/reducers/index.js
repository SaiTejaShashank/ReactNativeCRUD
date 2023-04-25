import React from 'react';
import { ADD_USER,CREATE_USER,UPDATE_USER,DELETE_USER} from '../actions';



const initialState={
    user:[],
}
export default function movies(state=initialState,action) {

    if(action.type==CREATE_USER)
    return {
        ...state,
       // patients:[action.data,...state.patients]
       user:[action.data,...state.user]
    }

    if(action.type==UPDATE_USER)
    {
    const filteredArray=state.user.filter(item => item.id != action.data.id)
    return {
        ...state,
       // patients:[...action.data]
       user:[action.data,...filteredArray],
    }
}

    if(action.type==ADD_USER)
    return {
        ...state,
        user:action.data,
    }

    if(action.type==DELETE_USER){
    const filteredArray=state.user.filter(item => item.id != action.data)
    return {
                    ...state,
                    user:filteredArray

    }
}

    return state;
}
