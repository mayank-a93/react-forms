var React = require('react');

var NameField = React.createClass({
	getInitialState: function() {
		return {value: ""};
	},
	onChange: function(e){
		this.setState({value: e.target.value});
	},
	clear: function() {
		this.setState({value: ""});
	},
	render: function() {
		return (
			<div className="form-group label-floating">
				<label htmlFor={this.props.type} className="col-md-2 control-label">Name</label>
				<div className="col-md-10">
					<input 
						className="form-control" 
						id={this.props.type}						
						onChange={this.onChange}
						value={this.state.value} />					
				</div>
			</div>
		);
	}
});

module.exports = NameField;