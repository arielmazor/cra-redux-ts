export const ActionsTypes = {
  ADD_STUDENT: 'ADD_STUDENT',
  DELETE_STUDENT: 'DELETE_STUDENT',
}

export interface IStudent {
  name: string,
  id: number,
}

export interface IStudentAction {
  type: string,
  payload: IPayload,
}

export interface IPayload {
  data?: IStudent,
  id?: number
}