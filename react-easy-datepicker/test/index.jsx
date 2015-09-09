var React = require('react');

var DatePicker = require('../dist/datePicker');

React.render(
	<DatePicker sundayFirst="1"/>,
	document.getElementById('datePicker') 
);