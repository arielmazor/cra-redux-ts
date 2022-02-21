import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addStudent } from 'store/Reducers/Students/actions';
import { IState } from 'store';
import { IStudent } from 'store/Reducers/Students/types';
import ListItem from '../ListItem/ListItem.component'

const List = (props: any) => {
  return (
    <div> 
    <h1> Students </h1>
    <div className="list">
      {props.students.map((student: IStudent) => {
      return <ListItem key={student.id} id={student.id} />
      })}
    </div>
    <button onClick={props.handleIncrease}>Add item</button>
  </div>
  )
}

function mapStateToProps(state: IState) {
  return {
    students: state.students,
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    handleIncrease: addStudent,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(List);