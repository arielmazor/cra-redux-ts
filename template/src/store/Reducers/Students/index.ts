import React from 'react';
import initStudentData from 'mocks/students.mock'
import { ActionsTypes, IStudent, IStudentAction, IPayload} from './types'

export default function studentsReducer(state: IStudent[] = initStudentData, action: IStudentAction): IStudent[] {
  switch(action.type) {
    case ActionsTypes.ADD_STUDENT:
      return AddStudent(state, action.payload.data ? HandleData(action.payload.data, state.length) : {});
    case ActionsTypes.DELETE_STUDENT:
      return DeleteStudent(state, action.payload.id ? action.payload.id : 0)
    default:
      return state;
  };
};

function AddStudent(state: IStudent[], data: IStudent | any): IStudent[] {
  return [
    ...state,
    ...[data]
  ];
}

function HandleData(data: IStudent, studentsCount: number) {
  data.id = studentsCount++;
  return data;
}

function DeleteStudent(Students: IStudent[], id: number){
  let index = Students.findIndex(student => student.id === id);  
  let studentsClone = [...Students];
  const before = studentsClone.slice(0, index);
  const after = studentsClone.slice(index + 1, studentsClone.length);
  studentsClone = before.concat(after);
  
  return studentsClone;
}
