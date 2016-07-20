var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');

var LeadCapture = React.createClass({
	onSubmit: function(e){

	},
	render: function() {
		return (
			<div className="col-md-3">
				<div className="well">
					<form className="form-horizontal">
	  					<fieldset>
	  						<legend>Lead Capture</legend>
	  						<NameField type="First"/>	
	  						<EmailField />	  						
							<div className="form-group">
								<div className="col-md-10 col-md-offset-2">
									<button type="button" className="btn btn-default">Cancel</button>
									<button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
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