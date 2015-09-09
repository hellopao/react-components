var React = require('react');

var DatePicker = require('../src/datePicker.jsx');

React.render(
	<DatePicker sundayFirst="1"/>,
	document.getElementById('datePicker') 
);