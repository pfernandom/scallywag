import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import './ProjectList.scss'

const ProjectList = ({ projects, onProjectClick }) => (
	<table>
		<thead>
			<tr>
				<th>Project ID</th>
				<th>Name</th>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
		{projects.map(project =>
			<tr key={project.id} onClick={() => onProjectClick(project.id)} className="project-item">
				<td>{project.id}</td>
				<td><Link to={`/project/`+project.id}activeClassName="active">{project.name}</Link></td>
				<td>{project.description}</td>
			</tr>
		)}
		</tbody>
	</table>
)

ProjectList.propTypes = {
	projects: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired
	}).isRequired).isRequired,
	onProjectClick: PropTypes.func.isRequired
}

export default ProjectList