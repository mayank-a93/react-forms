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
	render: function() {
		var formClass = this.state.valid ? "form-group" : "form-group is-focused has-warning"
		return (
			<div className={formClass}>
				<label htmlFor="inputEmail" className="col-md-2 control-label">Email</label>
				<div className="col-md-10">
					<input 
						className="form-control" 
						onChange={this.onChange}
						id="inputEmail" 						
						placeholder="Email" 
						value={this.state.value} />					
				</div>
			</div>
		);
	}
});

module.exports = LeadCapture;