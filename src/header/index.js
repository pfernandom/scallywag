var React = require('react');

require('./header.scss');

var Header = React.createClass({
	render:function(){
		return (
			<nav className="header">Header!</nav>
		)
	
	}
});

module.exports = Header;
