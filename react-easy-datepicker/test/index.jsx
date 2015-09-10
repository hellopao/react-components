var React = require('react');

var DatePicker = require('../dist/datePicker');

React.render(
	<div>
		<DatePicker sundayFirst="1"/>
		<DatePicker />
	</div>,
	document.getElementById('datePicker') 
);