var React = require('react');

var NameField = React.createClass({
	getInitialState: function() {
		return {value: ""};
	},
	onChange: function(e){
		this.setState({value: e.target.value});
	},
	render: function() {
		return (
			<div className="form-group">
				<label htmlFor={this.props.type} className="col-md-2 control-label">{this.props.type + " Name"}</label>
				<div className="col-md-10">
					<input 
						className="form-control" 
						onChange={this.onChange}
						id={this.props.type}						
						placeholder={this.props.type + " Name"}
						value={this.state.value} />					
				</div>
			</div>
		);
	}
});

module.exports = NameField;