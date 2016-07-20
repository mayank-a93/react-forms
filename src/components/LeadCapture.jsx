var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');

var LeadCapture = React.createClass({
	onSubmit: function(e) {
		e.preventDefault();
		if(!this.refs.fieldEmail.state.valid || (this.refs.fieldEmail.state.value).length == 0) {
			console.log("Nope");
		} else {
			alert("Email : " + this.refs.fieldEmail.state.value + "\nName : " + this.refs.fieldName.state.value + "\nsdf: " + (this.refs.fieldEmail.state.value).length);
		}
	},
	onClear: function() {
		this.refs.fieldEmail.clear();
		this.refs.fieldName.clear();
	},
	render: function() {
		return (
			<div className="col-md-3">
				<div className="well">
					<form className="form-horizontal">
	  					<fieldset>
	  						<legend>Lead Capture</legend>
	  						<NameField type="First" ref="fieldName"/>	
	  						<EmailField ref="fieldEmail"/>	  						
							<div className="form-group">
								<div className="col-md-10 col-md-offset-2">
									<button className="btn btn-default" onClick={this.onClear}>Cancel</button>
									<button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
								</div>
							</div>
						</fieldset>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = LeadCapture;