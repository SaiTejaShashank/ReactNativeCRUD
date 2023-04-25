export const ADD_USER='ADD_USER';
export const CREATE_USER='CREATE_USER';
export const DELETE_USER='DELETE_USER';
export const UPDATE_USER='UPDATE_USER';

export function addUser(data){
    return{
        type:ADD_USER,
        data:data
    }
}

export function createUser(data){
    return{
        type:CREATE_USER,
        data:data
    }
}

export function deleteUser(data){
    return{
        type:DELETE_USER,
        data:data
    }
}

export function updateUser(data){
    return{
        type:UPDATE_USER,
        data:data
    }
}