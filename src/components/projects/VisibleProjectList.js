import { connect } from 'react-redux'
import ProjectList from './ProjectList'

const mapStateToProps = (state) => {
	return {
		//todos: getVisibleTodos(state.todos, state.visibilityFilter)
		projects:[{
			id:1,
			name:"Project 1",
			description:"This is a test project"
		}]
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onProjectClick: (id) => {
			console.log("Clicked on project "+id);
		}
	}
}

const VisibleProjectList = connect(
	mapStateToProps,
	mapDispatchToProps
)(ProjectList)

export default VisibleProjectList