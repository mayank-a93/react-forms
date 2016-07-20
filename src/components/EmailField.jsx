var React = require('react');
var validator = require('email-validator');

var LeadCapture = React.createClass({
	getInitialState: function() {
		return {valid: true, value: ""}
	},
	onChange: function(e) {
		var val = e.target.value;

		if(!validator.validate(val)){
			this.setState({valid: false, value: val});
		} else {
			this.setState({valid: true, value: val});
		}
	},
	clear: function() {
		this.setState({valid: true, value: ""});
	},
	render: function() {
		var formClass = this.state.valid ? "form-group label-floating" : "form-group label-floating is-focused has-warning"
		return (
			<div className={formClass}>
				<label htmlFor="inputEmail" className="col-md-2 control-label">Email</label>
				<div className="col-md-10">
					<input 
						className="form-control" 
						onChange={this.onChange}
						id="inputEmail"
						value={this.state.value} />		
				<span className="help-block">We'll never share your email with anyone else.</span>				
				</div>
			</div>
		);
	}
});

module.exports = LeadCapture;