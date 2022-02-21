import { ActionsTypes } from './types';

export function addStudent() {
  return ({
    type: ActionsTypes.ADD_STUDENT,
    payload:{
    data: {
      name:"test",
      id: 4,
    }}
  });
};

export function deleteStudent(id: number) {
  return ({ 
    type: ActionsTypes.DELETE_STUDENT,
    payload:{ id } 
  });
};