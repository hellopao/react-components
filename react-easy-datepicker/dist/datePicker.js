'use strict';

var React = require('react');
var moment = require('moment');

var Calendar = require('./calendar');

require('./styles/datePicker.css');

var DatePicker = React.createClass({
	displayName: 'DatePicker',

	getInitialState: function getInitialState() {
		return {
			select: this.props.current || new Date(),
			show: false
		};
	},

	onDaySelect: function onDaySelect(date) {
		this.setState({
			select: date,
			show: false
		});
	},

	handleClick: function handleClick() {
		this.setState({
			show: true
		});
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'date-picker' },
			React.createElement('input', { type: 'text', readOnly: true,
				className: 'date-input',
				value: moment(this.state.select).format('YYYY-MM-DD'),
				onClick: this.handleClick }),
			React.createElement(Calendar, {
				current: this.state.current,
				sundayFirst: this.props.sundayFirst,
				onDaySelect: this.onDaySelect,
				show: this.state.show })
		);
	}
});

module.exports = DatePicker;